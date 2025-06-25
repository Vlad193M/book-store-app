import { db } from '@/lib/db';

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
