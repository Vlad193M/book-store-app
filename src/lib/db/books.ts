import { db } from '../db';

export async function getBookPageData(bookId: string) {
  const book = await db.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      bookImages: true,
      reviews: {
        select: {
          id: true,
          text: true,
          date: true,
          rating: true,
          user: { select: { name: true } },
        },
      },
      author: true,
      bookCategories: {
        include: { category: true },
      },
      inventory: true,
    },
  });

  return book;
}

type getBooksBySimilarCategoriesBaseParams = {
  take?: number;
  order?: 'asc' | 'desc';
};

type getBooksBySimilarCategoriesParams =
  | ({
      bookId: string;
      bookIds?: never;
    } & getBooksBySimilarCategoriesBaseParams)
  | ({
      bookId?: never;
      bookIds: string[];
    } & getBooksBySimilarCategoriesBaseParams);

export async function getBooksBySimilarCategories({
  bookId,
  bookIds,
  take = 4,
  order = 'desc',
}: getBooksBySimilarCategoriesParams) {
  const targetIds = bookIds ?? (bookId ? [bookId] : []);

  if (targetIds.length === 0) return [];

  const bookCategories = await db.bookCategory.findMany({
    include: { category: true },
    where: { bookId: { in: targetIds } },
  });

  if (bookCategories.length === 0) return [];

  const arrayCategoryId = [
    ...new Set(bookCategories.map((c) => c.categoryId)),
  ];

  const similarBooks = await db.book.findMany({
    include: {
      bookCategories: true,
      inventory: true,
      bookImages: true,
    },
    where: {
      bookCategories: {
        some: {
          categoryId: { in: arrayCategoryId },
        },
      },
      id: {
        notIn: targetIds,
      },
    },
    orderBy: {
      inventory: {
        quantity: order,
      },
    },
    take,
  });

  return similarBooks;
}
