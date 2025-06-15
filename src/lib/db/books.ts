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
        include: { category: true},
      },
      inventories: true,
    },
  });

  return book;
}

interface SimilarBooksParams {
  bookId: string;
  take?: number;
  order?: 'asc' | 'desc';
}

export async function getSimilarBooks({
  bookId,
  take,
  order,
}: SimilarBooksParams) {
  const bookCategories = await db.bookCategories.findMany({
    include: { category: true },
    where: { book_id: bookId },
  });

  const arrayCategoryId = bookCategories.map(
    (category) => category.category_id
  );

  const similarBooks = await db.books.findMany({
    include: { book_categories: true, inventories: true, book_images: true },
    where: {
      book_categories: {
        some: {
          category_id: { in: arrayCategoryId },
          AND: { book_id: { not: bookId } },
        },
      },
    },
    orderBy: {
      inventories: {
        quantity: order || 'desc',
      },
    },
    take: take || 4,
  });

  return similarBooks;
}
