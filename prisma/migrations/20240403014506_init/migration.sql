/*
  Warnings:

  - The primary key for the `Content` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `subPara1` on table `Content` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subPara2` on table `Content` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subPara3` on table `Content` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Content" DROP CONSTRAINT "Content_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "subPara1" SET NOT NULL,
ALTER COLUMN "subPara2" SET NOT NULL,
ALTER COLUMN "subPara3" SET NOT NULL,
ADD CONSTRAINT "Content_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Content_id_seq";
