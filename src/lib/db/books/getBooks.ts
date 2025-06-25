import { Prisma } from '@/generated/prisma';
import { db } from '../../db';

interface GetBooksParams {
  take?: number;
  cursorId?: string;
  order?: 'asc' | 'desc';
  categoryId?: string;
  search?: string;
}

export async function getBooks({
  take,
  cursorId,
  categoryId,
  order,
  search,
}: GetBooksParams) {
  const where: Prisma.BookWhereInput = {};

  if (categoryId) {
    where.bookCategories = { some: { categoryId } };
  }

  if (search) {
    where.name = { contains: search, mode: 'insensitive' };
  }

  return db.book.findMany({
    include: { bookImages: true },
    where,
    orderBy: [{ inventory: { quantity: order } }, { id: order }],
    take,
    ...(cursorId ? { cursor: { id: cursorId }, skip: 1 } : {}),
  });
}
