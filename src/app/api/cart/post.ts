import { db } from '@/lib/db';
import { verifyAuth } from '@/lib/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

interface RequestBody {
  bookId: string;
  quantity: number;
}

function isValidRequestBody(obj: any): obj is RequestBody {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.bookId === 'string' &&
    obj.bookId.trim() !== '' &&
    typeof obj.quantity === 'number' &&
    obj.quantity > 0 &&
    obj.quantity <= 10
  );
}

export async function POST(request: NextRequest) {
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

  const { bookId, quantity } = body;

  const bookExists = await db.book.findUnique({
    where: { id: bookId },
  });

  if (!bookExists) {
    return NextResponse.json({ error: 'Book not found' }, { status: 404 });
  }

  try {
    let cart = await db.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      cart = await db.cart.create({
        data: {
          userId,
        },
      });
    }

    const cartItem = await db.cartItem.upsert({
      where: {
        cartId_bookId: {
          cartId: cart.id,
          bookId,
        },
      },
      update: {
        quantity: { increment: quantity },
      },
      create: {
        cartId: cart.id,
        bookId,
        quantity,
      },
    });

    return NextResponse.json(cartItem);
  } catch (error: any) {
    console.log(error.message, 'message');
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
