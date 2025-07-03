import { CategoryWithSelected } from '@/lib/utils/markSelected';
import { toggleCategoryWithChildren } from '@/lib/utils/toggleCategoryWithChildren';
import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

export default function CategoryNode({
  category,
  isRoot = false,
  setCategories,
}: {
  category: CategoryWithSelected;
  isRoot?: boolean;
  setCategories: Dispatch<SetStateAction<CategoryWithSelected[]>>;
}) {
  const hasChildren = category.children.length > 0;

  const handleChange = () => {
    setCategories((prevCategories) =>
      toggleCategoryWithChildren(prevCategories, category.id),
    );
  };

  return (
    <li className={clsx({ 'ml-4': !isRoot })}>
      <div className='flex gap-2'>
        <input
          type='checkbox'
          checked={category.isSelected}
          onChange={handleChange}
          name='categoryIds'
          value={category.id}
          id={category.id}
        />
        <label htmlFor={category.id}>{category.name}</label>
      </div>
      {hasChildren && (
        <ul>
          {category.children.map((child) => (
            <CategoryNode
              setCategories={setCategories}
              key={child.id + category.isSelected}
              category={child}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
