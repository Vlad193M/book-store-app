import { db } from '@/lib/db';
import { verifyAuth } from '@/lib/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // console.log('Runtime:', process.env.NEXT_RUNTIME);

  const authResult = await verifyAuth(request);
  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const userId = authResult.user.id;

  try {
    const cart = await db.cart.findUnique({
      where: { userId },
      include: {
        cartItems: {
          include: {
            book: {
              select: {
                name: true,
                price: true,
                bookImages: { where: { isPrimary: true } },
              },
            },
          },
          orderBy: {bookId: 'desc'},
        },
      },
    });

    if (!cart) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }

    return NextResponse.json(cart);
  } catch (error: any) {
    console.log(error.message, 'message');
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
