import Card from '@/components/Card';
import { getBooksBySimilarCategories } from '@/lib/db/books';

interface SimilarBooksProps {
  bookId: string;
}

export default async function SimilarBooks({ bookId }: SimilarBooksProps) {
  const similarBooks = await getBooksBySimilarCategories({ bookId});

  // await new Promise((res, rej) => {
  //   setTimeout(() => res(""), 5000);
  // });

  return (
      <div className='flex flex-wrap gap-8 justify-center'>
        {similarBooks.map((book) => (
          <Card
            key={book.id}
            id={book.id}
            price={book.price}
            title={book.name}
            src={
              book.book_images.find((img) => img.is_primary)?.image_url ?? ''
            }
          />
        ))}
      </div>
  );
}
