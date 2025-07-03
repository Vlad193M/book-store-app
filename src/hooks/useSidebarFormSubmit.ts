import { areAllSubcategoriesSelected } from '@/lib/utils/areAllSubcategoriesSelected';
import { CategoryWithSelected } from '@/lib/utils/markSelected';
import { useRouter } from 'next/navigation';

export function useSidebarFormSubmit(categoryTree: CategoryWithSelected[]) {
  const router = useRouter();

  return function handleSidebarSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { selectedCheckboxIds, bookFormats, minPrice, maxPrice } =
      parseFormData(e.currentTarget);

    const urlCategoryIds = collectSelectedCategories(
      categoryTree,
      selectedCheckboxIds,
    );

    const params = buildSearchParams({
      categoryIds: urlCategoryIds,
      bookFormats,
      minPrice,
      maxPrice,
    });

    router.push(`/books?${params.toString()}`);
  };
}

function buildSearchParams({
  categoryIds,
  bookFormats,
  minPrice,
  maxPrice,
}: {
  categoryIds: string[];
  bookFormats: string[];
  minPrice: string;
  maxPrice: string;
}) {
  const params = new URLSearchParams();
  categoryIds.forEach((id) => params.append('categoryIds', id));
  bookFormats.forEach((format) => params.append('bookFormats', format));
  if (minPrice) params.append('minPrice', minPrice);
  if (maxPrice) params.append('maxPrice', maxPrice);
  return params;
}

function parseFormData(form: HTMLFormElement) {
  const formData = new FormData(form);
  return {
    selectedCheckboxIds: formData.getAll('categoryIds') as string[],
    bookFormats: formData.getAll('bookFormats') as string[],
    minPrice: formData.get('minPrice') as string,
    maxPrice: formData.get('maxPrice') as string,
  };
}

function collectSelectedCategories(
  categoryTree: CategoryWithSelected[],
  categoryIds: string[],
): string[] {
  return categoryTree.flatMap((category) => {
    if (areAllSubcategoriesSelected(category, categoryIds)) {
      return [category.id];
    } else if (category.children?.length) {
      return collectSelectedCategories(category.children, categoryIds);
    } else {
      return [];
    }
  });
}
