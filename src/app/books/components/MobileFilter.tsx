'use client';

import { Category } from '@/generated/prisma';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useRef, useState } from 'react';
import FilterBtn from './FilterBtn';
import Sidebar from './Sidebar';

export default function MobileFilter({
  categories,
}: {
  categories: Category[];
}) {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const node = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(node, () => setIsShowFilter(false));

  return (
    <div ref={node} className='relative flex flex-col items-end'>
      {isShowFilter && (
        <div
          onClick={() => setIsShowFilter(false)}
          className='fixed inset-0 z-1'
        />
      )}
      <FilterBtn onClick={() => setIsShowFilter((prev) => !prev)} />
      {isShowFilter && (
        <Sidebar
          categories={categories}
          className='flex absolute z-1 bg-white shadow-md rounded-lg top-12'
        />
      )}
    </div>
  );
}
