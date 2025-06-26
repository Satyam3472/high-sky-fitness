/*
  Warnings:

  - You are about to drop the column `phoneNo` on the `Member` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Member` DROP COLUMN `phoneNo`,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;
