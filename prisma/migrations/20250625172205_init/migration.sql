/*
  Warnings:

  - Added the required column `expiry` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `joinDate` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Member` ADD COLUMN `expiry` DATETIME(3) NOT NULL,
    ADD COLUMN `joinDate` DATETIME(3) NOT NULL;
