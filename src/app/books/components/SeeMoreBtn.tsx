'use client';

import { useLoadMoreBooks } from '@/hooks/useLoadMoreBooks';
import { bookApi } from '@/lib/api/book';
import { whiteRightArrow } from '@/lib/constants/icons';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function SeeMoreBtn() {
  const { data } = useQuery(bookApi.getBooksOptions());
  const searchParams = useSearchParams();

  const lastBookId = data?.[data.length - 1]?.id;
  const newSearchParams = new URLSearchParams(searchParams.toString());

  if (lastBookId) {
    newSearchParams.set('cursorId', lastBookId);
  }

  const { mutate, isPending } = useLoadMoreBooks(newSearchParams);

  if (!lastBookId) return null;

  return (
    <button
      onClick={() => mutate()}
      disabled={isPending}
      className='mx-auto my-6 bg-black rounded-[64px] flex justify-between items-center py-2.5 px-6 min-w-[140px] max-w-44 self-end disabled:opacity-60 disabled:cursor-not-allowed'
    >
      {isPending ? (
        <p className='text-white animate-pulse'>Loading...</p>
      ) : (
        <>
          <p className='text-white'>See more</p>
          <Image src={whiteRightArrow} alt='right arrow' />
        </>
      )}
    </button>
  );
}
