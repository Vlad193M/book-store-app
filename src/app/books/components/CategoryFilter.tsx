import { CategoryWithSelected } from '@/lib/utils/markSelected';
import Image from 'next/image';
import { useState } from 'react';
import CategoryNode from './CategoryNode';

export default function CategoryFilter({
  categoryTree,
}: {
  categoryTree: CategoryWithSelected[];
}) {
  const [isShowCategories, setIsShowCategories] = useState(false);
  const [categories, setCategories] = useState(categoryTree);

  return (
    <div>
      <button
        type='button'
        className='flex justify-between w-full'
        onClick={() => setIsShowCategories((prev) => !prev)}
        aria-expanded={isShowCategories}
        aria-controls='category-list'
      >
        <h3 className='mb-2 leading-tight text-[18px]'>Categories</h3>
        <Image
          src='/arrow-down.svg'
          alt={isShowCategories ? 'Collapse categories' : 'Expand categories'}
          width={20}
          height={20}
        />
      </button>
      <ul className={isShowCategories ? 'block' : 'hidden'}>
        {categories.map((category) => (
          <CategoryNode
            isRoot={true}
            key={category.id}
            category={category}
            setCategories={setCategories}
          />
        ))}
      </ul>
    </div>
  );
}
