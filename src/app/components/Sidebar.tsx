'use client';

import { Category } from '@/generated/prisma';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const searchChildCategories = (categories: Category[], id: string) => {
  return categories.filter((category) => category.parentId === id);
};

interface SidebarProps {
  categories: Category[];
}

interface ChildCategoriesState {
  parentId: string;
  categoriesArray: Category[];
}

export default function Sidebar({ categories }: SidebarProps) {
  const [childCategories, setChildCategories] =
    useState<ChildCategoriesState>();

  const parentCategories = useMemo(
    () => categories.filter((category) => !category.parentId),
    [categories],
  );

  function handleChildCategories(id: string) {
    if (id === childCategories?.parentId) {
      setChildCategories(undefined);
      return;
    }

    const searchedChildCategories = searchChildCategories(categories, id);
    setChildCategories({
      parentId: id,
      categoriesArray: searchedChildCategories,
    });
  }

  console.log(categories);
  return (
    <aside className='border px-[30px] py-10 max-w-[286px] w-full h-fit'>
      <div className='flex gap-4'>
        <div className='bg-black w-0.5 h-6'></div>
        <h3 className='mb-6 leading-tight text-[22px]'>Categories</h3>
      </div>
      {parentCategories.map((category) => (
        <div key={category.id}>
          <div className='flex justify-between'>
            <button>{category.name}</button>
            <Image
              src='/arrow-down.svg'
              alt='children categories'
              width={20}
              height={20}
              onClick={() => handleChildCategories(category.id)}
            />
          </div>
          {childCategories?.parentId === category.id &&
            childCategories.categoriesArray.map((childCategory) => (
              <p className='ml-2' key={childCategory.id}>
                <button>{childCategory.name}</button>
              </p>
            ))}
        </div>
      ))}
    </aside>
  );
}
