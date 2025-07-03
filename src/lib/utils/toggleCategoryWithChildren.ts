import { CategoryWithSelected } from './markSelected';
import { setSelectionForNodeAndChildren } from './setSelectionForNodeAndChildren';

export function toggleCategoryWithChildren(
  categories: CategoryWithSelected[],
  targetId: string,
): CategoryWithSelected[] {
  return categories.map((category) => {
    if (category.id === targetId) {
      const newSelected = !category.isSelected;
      return setSelectionForNodeAndChildren(category, newSelected);
    }

    const updatedChildren = toggleCategoryWithChildren(
      category.children,
      targetId,
    );

    const allChildrenSelected =
      updatedChildren.length > 0 &&
      updatedChildren.every((child) => child.isSelected);

    return {
      ...category,
      children: updatedChildren,
      isSelected:
        updatedChildren.length === 0
          ? category.isSelected
          : allChildrenSelected,
    };
  });
}
