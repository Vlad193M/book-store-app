import Card from '@/components/Card';
import { getSimilarBooks } from '@/lib/db/books';

interface SimilarBooksProps {
  bookId: string;
}

export default async function SimilarBooks({ bookId }: SimilarBooksProps) {
  const similarBooks = await getSimilarBooks({ bookId });

  // await new Promise((res, rej) => {
  //   setTimeout(() => res(""), 5000);
  // });

  return (
    <section className='container mt-10 md:mt-16'>
      <h2 className='text-[#3D3D3D] text-4xl font-bold leading-[45px] mb-9 text-center md:text-start'>
        Similar books
      </h2>
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
    </section>
  );
}
