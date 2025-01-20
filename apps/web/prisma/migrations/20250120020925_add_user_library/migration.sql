/*
  Warnings:

  - You are about to drop the `_BookAuthors` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "BookStatus" AS ENUM ('WANT_TO_READ', 'READING', 'DID_NOT_FINISH', 'FINISHED');

-- CreateEnum
CREATE TYPE "LoanStatus" AS ENUM ('PENDING', 'RETURNED', 'OVERDUE');

-- DropForeignKey
ALTER TABLE "_BookAuthors" DROP CONSTRAINT "_BookAuthors_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookAuthors" DROP CONSTRAINT "_BookAuthors_B_fkey";

-- DropTable
DROP TABLE "_BookAuthors";

-- CreateTable
CREATE TABLE "shelf_book" (
    "id" STRING NOT NULL,
    "shelf_id" STRING NOT NULL,
    "book_id" STRING NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shelf_book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library" (
    "id" STRING NOT NULL,
    "user_id" STRING NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "library_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library_book" (
    "id" STRING NOT NULL,
    "library_id" STRING NOT NULL,
    "book_id" STRING NOT NULL,
    "status" "BookStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "library_book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loan" (
    "id" STRING NOT NULL,
    "library_book_id" STRING NOT NULL,
    "borrower" STRING NOT NULL,
    "loan_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "due_date" TIMESTAMP(3) NOT NULL,
    "return_date" TIMESTAMP(3),
    "status" "LoanStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "bookId" STRING,

    CONSTRAINT "loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goal" (
    "id" STRING NOT NULL,
    "user_id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "book_count" INT4 NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goal_book" (
    "id" STRING NOT NULL,
    "goal_id" STRING NOT NULL,
    "book_id" STRING NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "goal_book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_book_authors" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "shelf_book_shelf_id_book_id_key" ON "shelf_book"("shelf_id", "book_id");

-- CreateIndex
CREATE UNIQUE INDEX "library_user_id_key" ON "library"("user_id");

-- CreateIndex
CREATE INDEX "library_user_id_idx" ON "library"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "library_book_library_id_book_id_key" ON "library_book"("library_id", "book_id");

-- CreateIndex
CREATE INDEX "loan_borrower_idx" ON "loan"("borrower");

-- CreateIndex
CREATE INDEX "goal_user_id_idx" ON "goal"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "goal_book_goal_id_book_id_key" ON "goal_book"("goal_id", "book_id");

-- CreateIndex
CREATE UNIQUE INDEX "_book_authors_AB_unique" ON "_book_authors"("A", "B");

-- CreateIndex
CREATE INDEX "_book_authors_B_index" ON "_book_authors"("B");

-- AddForeignKey
ALTER TABLE "shelf_book" ADD CONSTRAINT "shelf_book_shelf_id_fkey" FOREIGN KEY ("shelf_id") REFERENCES "shelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shelf_book" ADD CONSTRAINT "shelf_book_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library_book" ADD CONSTRAINT "library_book_library_id_fkey" FOREIGN KEY ("library_id") REFERENCES "library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library_book" ADD CONSTRAINT "library_book_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_library_book_id_fkey" FOREIGN KEY ("library_book_id") REFERENCES "library_book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_book" ADD CONSTRAINT "goal_book_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "goal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal_book" ADD CONSTRAINT "goal_book_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_authors" ADD CONSTRAINT "_book_authors_A_fkey" FOREIGN KEY ("A") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_authors" ADD CONSTRAINT "_book_authors_B_fkey" FOREIGN KEY ("B") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
