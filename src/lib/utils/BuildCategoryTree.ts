import { Category } from '@/generated/prisma';

export type CategoryWithChildren = Category & {
  children: CategoryWithChildren[];
};

export function buildCategoryTree(
  categories: Category[],
  parentId: string | null = null,
): CategoryWithChildren[] {
  return categories
    .filter((category) => category.parentId == parentId)
    .map((category) => ({
      ...category,
      children: buildCategoryTree(categories, category.id),
    }));
}
