import { db } from '../../db';

type GetBooksBaseParams = {
  take?: number;
  order?: 'asc' | 'desc';
};

type GetBooksBySimilarCategoriesParams =
  | ({ bookId: string; bookIds?: never } & GetBooksBaseParams)
  | ({ bookId?: never; bookIds: string[] } & GetBooksBaseParams);

export async function getBooksBySimilarCategories({
  bookId,
  bookIds,
  take = 4,
  order = 'desc',
}: GetBooksBySimilarCategoriesParams) {
  const targetIds = bookIds ?? (bookId ? [bookId] : []);
  if (targetIds.length === 0) return [];

  const bookCategories = await db.bookCategory.findMany({
    include: { category: true },
    where: { bookId: { in: targetIds } },
  });

  if (bookCategories.length === 0) return [];

  const categoryIds = [...new Set(bookCategories.map((c) => c.categoryId))];

  return db.book.findMany({
    include: {
      bookCategories: true,
      inventory: true,
      bookImages: true,
    },
    where: {
      bookCategories: { some: { categoryId: { in: categoryIds } } },
      id: { notIn: targetIds },
    },
    orderBy: { inventory: { quantity: order } },
    take,
  });
}
