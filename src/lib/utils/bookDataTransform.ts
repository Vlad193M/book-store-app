import { BookPageDataType, DescriptionComponentType } from '@/types/book';

export function extractDescriptionData(
  book: BookPageDataType
): DescriptionComponentType | null {
  if (!book) return null;

  const {
    id,
    name,
    author_id,
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
    publication_year,

    author,
    book_categories,
    inventories,
  } = book;

  return {
    id,
    name,
    author_id,
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
    publication_year,

    author,
    book_categories,
    inventories,
  };
}
