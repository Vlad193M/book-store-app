import { db } from '@/lib/db';
import { verifyAuth } from '@/lib/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ bookId: string }> }
) {
  // console.log('Runtime:', process.env.NEXT_RUNTIME);

  const authResult = await verifyAuth(request);

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const userId = authResult.user.id;
  const { bookId } = await params;

  try {
    const cart = await db.cart.findUnique({ where: { userId } });

    if (!cart) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }

    await db.cartItem.delete({
      where: { cartId_bookId: { bookId, cartId: cart.id } },
    });

    return NextResponse.json({ message: 'Item deleted' }, { status: 200 });
  } catch (error: any) {
    console.log(error.message, 'message');
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
