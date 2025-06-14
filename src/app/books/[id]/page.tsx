import { db } from '@/lib/db';

import { Suspense } from 'react';
import ImagesSwapper from './components/ImagesSwapper';
import Info from './components/Info';
import SimilarBooks from './components/SimilarBooks';
import SimilarBooksSkeleton from './components/SimilarBooksSkeleton';

import arrowRight from '@/../public/arrow-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import Details from './components/Details';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const book = await db.books.findUnique({
    where: {
      id,
    },
    include: {
      book_images: true,
      reviews: {
        select: {
          id: true,
          text: true,
          date: true,
          rating: true,
          user: { select: { name: true } },
        },
      },
      author: true,
      book_categories: true,
      inventories: true,
    },
  });
  
  if (!book) return <p>Book do not exist</p>;

  return (
    <div>
      <div className='container flex gap-1 mb-2 md:mb-5 items-center'>
        <Link
          href='/books'
          className='text-[12px] md:text-base text-[#7B7B7B] leading-[1.7]'
        >
          Books
        </Link>
        <Image
          src={arrowRight}
          alt='right arrow'
          className='w-3 h-3 md:w-5 md:h-5 object-contain'
        />
        <p className='text-[12px] md:text-base text-[#414141] leading-[1.7]'>
          {book.name}
        </p>
      </div>

      <section className='container mb-10 flex flex-col lg:flex-row lg:gap-5 md:gap-14 gap-5 justify-between items-center'>
        <ImagesSwapper bookImages={book.book_images} bookName={book.name} />
        <Info
          title={book.name}
          price={book.price}
          description={book.description ?? ''}
          reviewsLength={book.reviews.length}
        />
      </section>

      <Details
        key={book.id}
        description={book.description ?? ''}
        reviews={book.reviews}
      />

      <Suspense fallback={<SimilarBooksSkeleton />}>
        <SimilarBooks bookId={book.id} />
      </Suspense>
    </div>
  );
}
