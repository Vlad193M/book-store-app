'use client';

import useAddCartItem from '@/hooks/useAddCartItem';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  bookId: string;
  title: string;
  price: number;
  src: string;
}

export default function Card({ bookId, title, price, src }: CardProps) {
  const { addItem } = useAddCartItem();
  return (
    <div className='flex flex-col gap-3 w-[286px]'>
      <Link
        href={`/books/${bookId}`}
        className='rounded-[14px] overflow-hidden bg-gray-100 h-[360px] relative z-0'
      >
        <Image
          src={src}
          alt={title}
          fill
          sizes='286px'
          className='object-cover'
        />
      </Link>
      <div className='w-full'>
        <Link href={`/books/${bookId}`}>
          <h2 className='whitespace-nowrap overflow-hidden text-ellipsis text-xl mb-2'>
            {title}
          </h2>
        </Link>
        <div className='flex justify-between'>
          <p className='font-semibold'>${price}</p>
          <button onClick={() => addItem(bookId, 1)}>
            <Image
              src='/plus-button.svg'
              alt='add item button'
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
