/*
  Warnings:

  - You are about to drop the column `expiry` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `joinDate` on the `Member` table. All the data in the column will be lost.
  - Added the required column `expiryDate` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Member` DROP COLUMN `expiry`,
    DROP COLUMN `joinDate`,
    ADD COLUMN `expiryDate` VARCHAR(191) NOT NULL,
    ADD COLUMN `startDate` VARCHAR(191) NOT NULL;
