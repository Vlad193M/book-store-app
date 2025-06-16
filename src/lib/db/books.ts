import { db } from '../db';

export async function getBookPageData(bookId: string) {
  const book = await db.books.findUnique({
    where: {
      id: bookId,
    },
    include: {
      book_images: true,
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
      book_categories: {
        include: { category: true },
      },
      inventories: true,
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

  const bookCategories = await db.bookCategories.findMany({
    include: { category: true },
    where: { book_id: { in: targetIds } },
  });

  if (bookCategories.length === 0) return [];

  const arrayCategoryId = [
    ...new Set(bookCategories.map((c) => c.category_id)),
  ];

  const similarBooks = await db.books.findMany({
    include: {
      book_categories: true,
      inventories: true,
      book_images: true,
    },
    where: {
      book_categories: {
        some: {
          category_id: { in: arrayCategoryId },
        },
      },
      id: {
        notIn: targetIds,
      },
    },
    orderBy: {
      inventories: {
        quantity: order,
      },
    },
    take,
  });

  return similarBooks;
}
