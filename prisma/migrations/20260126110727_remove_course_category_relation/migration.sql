/*
  Warnings:

  - You are about to drop the column `categoryId` on the `courses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `courses` DROP FOREIGN KEY `courses_categoryId_fkey`;

-- DropIndex
DROP INDEX `courses_categoryId_fkey` ON `courses`;

-- AlterTable
ALTER TABLE `courses` DROP COLUMN `categoryId`;
