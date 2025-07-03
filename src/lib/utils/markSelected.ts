import { CategoryWithChildren } from './BuildCategoryTree';

export interface CategoryWithSelected extends CategoryWithChildren {
  isSelected: boolean;
  children: CategoryWithSelected[];
}

export function markSelected(
  category: CategoryWithChildren,
  selectedIds: string[],
  parentSelected: boolean = false,
): CategoryWithSelected {
  const isExplicitlySelected = selectedIds?.includes(category.id);
  const isSelected = parentSelected || isExplicitlySelected;

  return {
    ...category,
    isSelected,
    children: category.children?.map((child) =>
      markSelected(child, selectedIds, isSelected),
    ),
  };
}
