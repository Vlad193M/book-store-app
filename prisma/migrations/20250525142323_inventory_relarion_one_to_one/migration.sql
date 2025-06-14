/*
  Warnings:

  - A unique constraint covering the columns `[book_id]` on the table `Inventories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Inventories_book_id_key" ON "Inventories"("book_id");
