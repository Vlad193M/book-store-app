'use client';

import { Category } from '@/generated/prisma';
import { useSidebarFormSubmit } from '@/hooks/useSidebarFormSubmit';
import { buildCategoryTree } from '@/lib/utils/BuildCategoryTree';
import { markSelected } from '@/lib/utils/markSelected';
import { searchParamsToObject } from '@/lib/utils/searchParamsToObject';
import { useSearchParams } from 'next/navigation';
import BookFormatFilter from './BookFormatFilter';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

interface SidebarProps {
  categories: Category[];
}

export default function Sidebar({ categories }: SidebarProps) {
  const searchParams = useSearchParams();
  const searchParamsObj = searchParamsToObject(searchParams);
  const categoryTree = buildCategoryTree(categories).map((category) =>
    markSelected(category, searchParamsObj['categoryIds'] ?? []),
  );

  const handleSubmit = useSidebarFormSubmit(categoryTree);

  return (
    <form
      onSubmit={handleSubmit}
      className='hidden md:flex flex-col border px-[30px] py-10 max-w-[286px] w-full h-fit gap-3'
    >
      <div className='flex gap-3'>
        <div className='bg-black w-0.5 h-6'></div>
        <h2 className='reading-tight text-[22px]'>Filter</h2>
      </div>

      <CategoryFilter categoryTree={categoryTree} />
      <BookFormatFilter initSelectedList={searchParamsObj['bookFormats']} />
      <PriceFilter
        initMinPrice={
          searchParamsObj['minPrice']
            ? Number(searchParamsObj['minPrice'][0])
            : undefined
        }
        initMaxPrice={
          searchParamsObj['maxPrice']
            ? Number(searchParamsObj['maxPrice'][0])
            : undefined
        }
      />

      <button className='bg-black rounded-2xl text-white py-1 px-3 self-end'>
        Search
      </button>
    </form>
  );
}
