/*
  Warnings:

  - You are about to drop the column `copacity` on the `AvailableSlot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `AvailableSlot` DROP COLUMN `copacity`,
    ADD COLUMN `capacity` INTEGER NOT NULL DEFAULT 1;
