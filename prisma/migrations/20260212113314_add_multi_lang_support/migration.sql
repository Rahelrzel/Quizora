/*
  Warnings:

  - You are about to drop the column `explanation` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `options` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `questionText` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `quizzes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `questions` DROP COLUMN `explanation`,
    DROP COLUMN `options`,
    DROP COLUMN `questionText`;

-- AlterTable
ALTER TABLE `quizzes` DROP COLUMN `title`;

-- CreateTable
CREATE TABLE `quiz_translations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quizId` INTEGER NOT NULL,
    `language` ENUM('en', 'fr', 'es', 'de', 'ar') NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `quiz_translations_quizId_language_key`(`quizId`, `language`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_translations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `questionId` INTEGER NOT NULL,
    `language` ENUM('en', 'fr', 'es', 'de', 'ar') NOT NULL,
    `questionText` TEXT NOT NULL,
    `options` JSON NOT NULL,
    `explanation` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `question_translations_questionId_language_key`(`questionId`, `language`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz_translations` ADD CONSTRAINT `quiz_translations_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `quizzes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question_translations` ADD CONSTRAINT `question_translations_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
