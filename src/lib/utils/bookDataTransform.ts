import 'server-only';
import { BookPageDataType, DescriptionComponentType } from '@/types/book';

export function extractDescriptionData(
  book: BookPageDataType
): DescriptionComponentType | null {
  if (!book) return null;

  const {
    id,
    name,
    authorId,
    price,
    description,
    annotation,
    language,
    pages,
    format,
    isbn,
    dimensions,
    weight,
    publisher,
    publicationYear,

    author,
    bookCategories,
    inventory,
  } = book;

  return {
    id,
    name,
    authorId,
    price,
    description,
    annotation,
    language,
    pages,
    format,
    isbn,
    dimensions,
    weight,
    publisher,
    publicationYear,

    author,
    bookCategories,
    inventory
  };
}
