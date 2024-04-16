/*
  Warnings:

  - Added the required column `gifPath` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagePath` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoPath` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "gifPath" TEXT NOT NULL,
ADD COLUMN     "imagePath" TEXT NOT NULL,
ADD COLUMN     "videoPath" TEXT NOT NULL;
