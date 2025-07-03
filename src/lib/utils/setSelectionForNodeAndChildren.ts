import { CategoryWithSelected } from './markSelected';

export function setSelectionForNodeAndChildren(
  category: CategoryWithSelected,
  isSelected: boolean,
): CategoryWithSelected {
  return {
    ...category,
    isSelected,
    children: category.children.map((child) =>
      setSelectionForNodeAndChildren(child, isSelected),
    ),
  };
}
