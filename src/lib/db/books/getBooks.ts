import { BookFormat, Prisma } from '@/generated/prisma';
import { db } from '../../db';
import { getAllDescendantCategoryIds } from './getAllDescendantCategoryIds';

interface GetBooksParams {
  take?: number;
  cursorId?: string;
  order?: 'asc' | 'desc';
  categoryIds?: string[];
  search?: string;
  minPrice?: string;
  maxPrice?: string;
  bookFormats?: string[];
}

export async function getBooks({
  take,
  cursorId,
  categoryIds,
  order,
  search,
  minPrice,
  maxPrice,
  bookFormats,
}: GetBooksParams) {
  const where: Prisma.BookWhereInput = {};

  if (categoryIds && categoryIds.length > 0) {
    const allCategoryIds = await getAllDescendantCategoryIds(categoryIds);
    where.bookCategories = { some: { categoryId: { in: allCategoryIds } } };
  }

  if (search) {
    where.name = { contains: search, mode: 'insensitive' };
  }

  if (minPrice || maxPrice) {
    where.price = {};
    if (minPrice && !isNaN(Number(minPrice))) {
      where.price.gte = Number(minPrice);
    }
    if (maxPrice && !isNaN(Number(maxPrice))) {
      where.price.lte = Number(maxPrice);
    }
  }

  if (bookFormats && bookFormats.length > 0) {
    const bookFormatsEnum = bookFormats
      .map((format) => format.toUpperCase())
      .filter((format): format is BookFormat =>
        Object.values(BookFormat).includes(format as BookFormat),
      );
    where.format = { in: bookFormatsEnum };
  }

  return db.book.findMany({
    include: { bookImages: true },
    where,
    orderBy: [{ inventory: { quantity: order } }, { id: order }],
    take,
    ...(cursorId ? { cursor: { id: cursorId }, skip: 1 } : {}),
  });
}
