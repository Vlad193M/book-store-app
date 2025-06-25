import { db } from '@/lib/db';

export async function getUserCartBookIds(userId: string): Promise<string[]> {
  const cart = await db.cart.findUnique({
    where: { userId },
    select: {
      cartItems: { select: { bookId: true } },
    },
  });
  return cart?.cartItems.map((item) => item.bookId) ?? [];
}