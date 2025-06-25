'use client';

import Card from '@/components/Card';
import { bookApi } from '@/lib/api/book';
import { useQuery } from '@tanstack/react-query';

export default function BookList() {
  const { data } = useQuery(bookApi.getBooksOptions());
  return (
    <div className='flex flex-wrap gap-x-8 gap-y-16 justify-center'>
      {data &&
        data.map((book) => (
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
