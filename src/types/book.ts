import { Prisma } from '@/generated/prisma';
import { getBookPageData } from '@/lib/db/books';

// export type BookPageDataType = Prisma.BooksGetPayload<{
//   include: {
//     book_images: true;
//     reviews: {
//       select: {
//         id: true;
//         text: true;
//         date: true;
//         rating: true;
//         user: { select: { name: true } };
//       };
//     };
//     author: true;
//     book_categories: true;
//     inventories: true;
//   };
// }>;

export type BookPageDataType = Awaited<ReturnType<typeof getBookPageData>>;

export type DescriptionComponentType = Prisma.BooksGetPayload<{
  include: {
    author: true;
    book_categories: {
      include: { category: true },
    },
    inventories: true;
  };
}>;

export type ReviewComponentType = Prisma.ReviewsGetPayload<{
  select: {
    id: true;
    text: true;
    date: true;
    rating: true;
    user: { select: { name: true } };
  };
}>;
