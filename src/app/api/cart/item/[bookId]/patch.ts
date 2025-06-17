import { db } from '@/lib/db';
import { verifyAuth } from '@/lib/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

interface RequestBody {
  quantity: number;
}

function isValidRequestBody(obj: any): obj is RequestBody {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.quantity === 'number' &&
    obj.quantity >= 0
  );
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ bookId: string }> }
) {
  const authResult = await verifyAuth(request);

  if (authResult instanceof NextResponse) {
    return authResult;
  }
  const userId = authResult.user.id;

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  if (!isValidRequestBody(body)) {
    return NextResponse.json(
      { message: 'Invalid data format' },
      { status: 400 }
    );
  }

  const { quantity } = body;
  const { bookId } = await params;

  try {
    const book = await db.book.findUnique({
      where: { id: bookId },
      select: { inventory: true },
    });

    if (!book || !book.inventory) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }

    if (quantity > book.inventory.quantity) {
      return NextResponse.json(
        { message: `Maximum quantity available is ${book.inventory.quantity}` },
        { status: 400 }
      );
    }
    const cart = await db.cart.findUnique({ where: { userId } });

    if (!cart) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }

    if (quantity === 0) {
      await db.cartItem.delete({
        where: { cartId_bookId: { bookId, cartId: cart.id } },
      });
    } else {
      await db.cartItem.update({
        where: { cartId_bookId: { bookId, cartId: cart.id } },
        data: { quantity },
      });
    }

    return NextResponse.json({ message: 'Quantity updated' }, { status: 200 });
  } catch (error: any) {
    console.log(error.message, 'message');
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
