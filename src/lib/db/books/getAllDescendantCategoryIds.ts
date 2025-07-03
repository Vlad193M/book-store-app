import { db } from '@/lib/db';

export async function getAllDescendantCategoryIds(
  categoryIds: string[],
): Promise<string[]> {
  const allIds = new Set(categoryIds);

  async function helper(ids: string[]) {
    const children = await db.category.findMany({
      where: { parentId: { in: ids } },
      select: { id: true },
    });
    if (children.length === 0) return;

    const childrenIds = children.map((c) => c.id);
    childrenIds.forEach((id) => allIds.add(id));

    await helper(childrenIds);
  }

  await helper(categoryIds);

  return Array.from(allIds);
}
