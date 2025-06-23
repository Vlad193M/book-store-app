'use client';

import Card from '@/components/Card';
import { bookApi } from '@/lib/api/book';
import { useQuery } from '@tanstack/react-query';

export default function CartRecommendationsBooks() {
  const { data } = useQuery(bookApi.getRecommendedOptions());
  
  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      {data &&
        data?.map((book) => (
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
