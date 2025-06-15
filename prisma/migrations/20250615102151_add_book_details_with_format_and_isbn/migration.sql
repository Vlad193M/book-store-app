/*
  Warnings:

  - A unique constraint covering the columns `[isbn]` on the table `Books` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "BookFormat" AS ENUM ('HARDCOVER', 'PAPERBACK', 'EBOOK', 'AUDIOBOOK');

-- AlterTable
ALTER TABLE "Books" ADD COLUMN     "annotation" TEXT,
ADD COLUMN     "dimensions" TEXT,
ADD COLUMN     "format" "BookFormat",
ADD COLUMN     "isbn" TEXT,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "pages" INTEGER,
ADD COLUMN     "weight" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Books_isbn_key" ON "Books"("isbn");
