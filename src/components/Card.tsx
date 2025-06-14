'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: string;
  title: string;
  price: number;
  src: string;
}

export default function Card({ id, title, price, src }: CardProps) {
  return (
    <div className='flex flex-col gap-3 w-[286px]'>
      <Link
        href={`/books/${id}`}
        className='rounded-[14px] overflow-hidden bg-gray-100 h-[360px] relative'
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
        <Link href={`/books/${id}`}>
          <h2 className='whitespace-nowrap overflow-hidden text-ellipsis text-xl mb-2'>
            {title}
          </h2>
        </Link>
        <div className='flex justify-between'>
          <p className='font-semibold'>${price}</p>
          <button onClick={() => console.log('btn')}>
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
