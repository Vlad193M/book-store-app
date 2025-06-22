import Card from '@/components/Card';
import { getBooksBySimilarCategories, getTopStockBooks } from '@/lib/db/books';

interface CartRecommendationsBooksProps {
  bookIds: string[];
}

export default async function CartRecommendationsBooks({
  bookIds,
}: CartRecommendationsBooksProps) {
  let recommendBooks;

  if (bookIds.length > 0) {
    recommendBooks = await getBooksBySimilarCategories({ bookIds });
  } else {
    recommendBooks = await getTopStockBooks();
  }

  // await new Promise((res, rej) => {
  //   setTimeout(() => res(""), 5000);
  // });

  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      {recommendBooks.map((book) => (
        <Card
          key={book.id}
          bookId={book.id}
          price={book.price}
          title={book.name}
          src={book.bookImages.find((img) => img.isPrimary)?.imageUrl ?? ''}
        />
      ))}
    </div>
  );
}
