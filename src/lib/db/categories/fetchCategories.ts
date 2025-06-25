import { db } from '../../db';

export async function fetchCategories() {
  return db.category.findMany();
}
