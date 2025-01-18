-- CreateTable
CREATE TABLE "shelf" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL DEFAULT '',
    "description" STRING,
    "user_id" STRING NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shelf_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "shelf_user_id_idx" ON "shelf"("user_id");
