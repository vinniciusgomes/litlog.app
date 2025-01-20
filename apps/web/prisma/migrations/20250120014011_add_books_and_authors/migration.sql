-- CreateTable
CREATE TABLE "book" (
    "id" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "title" STRING NOT NULL,
    "subtitle" STRING,
    "description" STRING NOT NULL,
    "isbn10" STRING NOT NULL,
    "isbn13" STRING NOT NULL,
    "language" STRING NOT NULL,
    "pageCount" INT4 NOT NULL,
    "publishedDate" TIMESTAMP(3) NOT NULL,
    "publisher" STRING NOT NULL,
    "physicalFormat" STRING NOT NULL,
    "cover" STRING NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "author" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookAuthors" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "book_slug_key" ON "book"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "book_isbn10_key" ON "book"("isbn10");

-- CreateIndex
CREATE UNIQUE INDEX "book_isbn13_key" ON "book"("isbn13");

-- CreateIndex
CREATE INDEX "book_title_idx" ON "book"("title");

-- CreateIndex
CREATE INDEX "book_publishedDate_idx" ON "book"("publishedDate");

-- CreateIndex
CREATE INDEX "book_language_idx" ON "book"("language");

-- CreateIndex
CREATE UNIQUE INDEX "author_slug_key" ON "author"("slug");

-- CreateIndex
CREATE INDEX "author_name_idx" ON "author"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_BookAuthors_AB_unique" ON "_BookAuthors"("A", "B");

-- CreateIndex
CREATE INDEX "_BookAuthors_B_index" ON "_BookAuthors"("B");

-- AddForeignKey
ALTER TABLE "_BookAuthors" ADD CONSTRAINT "_BookAuthors_A_fkey" FOREIGN KEY ("A") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookAuthors" ADD CONSTRAINT "_BookAuthors_B_fkey" FOREIGN KEY ("B") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
