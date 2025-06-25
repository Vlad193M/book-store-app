import { db } from '../../db';

type Params = {
  take?: number;
  order?: 'asc' | 'desc';
};

export async function getTopStockBooks({
  take = 4,
  order = 'desc',
}: Params = {}) {
  return db.book.findMany({
    include: {
      bookCategories: true,
      inventory: true,
      bookImages: true,
    },
    orderBy: { inventory: { quantity: order } },
    take,
  });
}
