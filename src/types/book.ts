import { Prisma } from '@/generated/prisma';
import { getBookPageData } from '@/lib/db/books/getBookPageData';

// export type BookPageDataType = Prisma.BookGetPayload<{
//   include: {
//     bookImages: true;
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
//     bookCategories: true;
//     inventory: true;
//   };
// }>;

export type BookPageDataType = Awaited<ReturnType<typeof getBookPageData>>;

export type DescriptionComponentType = Prisma.BookGetPayload<{
  include: {
    author: true;
    bookCategories: {
      include: { category: true };
    };
    inventory: true;
  };
}>;

export type ReviewComponentType = Prisma.ReviewGetPayload<{
  select: {
    id: true;
    text: true;
    date: true;
    rating: true;
    user: { select: { name: true } };
  };
}>;

export type CartDataType = Prisma.CartGetPayload<{
  include: {
    cartItems: {
      include: {
        book: {
          select: {
            name: true;
            price: true;
            bookImages: { where: { isPrimary: true } };
          };
        };
      };
    };
  };
}>;

export type BooksType = Prisma.BookGetPayload<{
  include: {
    bookImages: true;
  };
}>;

export type RecommendedBooksType = Prisma.BookGetPayload<{
  include: {
    bookCategories: true;
    inventory: true;
    bookImages: true;
  };
}>;
