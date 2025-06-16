import Card from '@/components/Card';
import { getBooksBySimilarCategories } from '@/lib/db/books';

interface CartRecommendationsBooksProps {
  bookIds: string[];
}

export default async function CartRecommendationsBooks({
  bookIds,
}: CartRecommendationsBooksProps) {
  const similarBooks = await getBooksBySimilarCategories({ bookIds });
  
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
          src={book.book_images.find((img) => img.is_primary)?.image_url ?? ''}
        />
      ))}
    </div>
  );
}
