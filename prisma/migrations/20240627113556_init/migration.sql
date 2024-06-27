/*
  Warnings:

  - You are about to drop the column `cover` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `Features` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Img` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cover_url` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_link` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repo_link` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Features` DROP FOREIGN KEY `Features_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `Img` DROP FOREIGN KEY `Img_projectId_fkey`;

-- AlterTable
ALTER TABLE `Project` DROP COLUMN `cover`,
    DROP COLUMN `desc`,
    DROP COLUMN `link`,
    ADD COLUMN `cover_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `project_link` VARCHAR(191) NOT NULL,
    ADD COLUMN `repo_link` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Features`;

-- DropTable
DROP TABLE `Img`;

-- CreateTable
CREATE TABLE `Media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img_url` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `feature` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Media` ADD CONSTRAINT `Media_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Feature` ADD CONSTRAINT `Feature_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
