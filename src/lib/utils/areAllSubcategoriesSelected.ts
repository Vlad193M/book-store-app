import { CategoryWithChildren } from './BuildCategoryTree';

export function areAllSubcategoriesSelected(
  category: CategoryWithChildren,
  selectedIds: string[],
): boolean {
  if (!category.children || category.children.length === 0) {
    return selectedIds.includes(category.id);
  }

  if (!selectedIds.includes(category.id)) return false;

  return category.children.every((child) =>
    areAllSubcategoriesSelected(child, selectedIds),
  );
}
