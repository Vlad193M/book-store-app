import { BooksType } from '@/types/book';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchResults({ books }: { books: BooksType[] }) {
  if (books.length === 0) {
    return <p className='text-gray-500'>No books found.</p>;
  }

  return (
    <ul className='flex flex-col gap-2 max-h-[324px] lg:max-h-[407px] overflow-y-auto'>
      {books.map((book) => (
        <li key={book.id}>
          <Link href={`/books/${book.id}`} className='flex items-center gap-2'>
            <Image
              src={book.bookImages.find((img) => img.isPrimary)?.imageUrl || ''}
              alt={book.name}
              width={50}
              height={75}
              className='rounded w-[50px] h-[75px] object-cover'
            />
            <p>{book.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
