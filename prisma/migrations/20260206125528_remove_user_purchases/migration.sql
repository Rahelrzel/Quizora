/*
  Warnings:

  - You are about to drop the `_UserPurchases` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_UserPurchases` DROP FOREIGN KEY `_UserPurchases_A_fkey`;

-- DropForeignKey
ALTER TABLE `_UserPurchases` DROP FOREIGN KEY `_UserPurchases_B_fkey`;

-- DropTable
DROP TABLE `_UserPurchases`;
