/*
  Warnings:

  - You are about to drop the column `slots` on the `AvailableSlot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `AvailableSlot` DROP COLUMN `slots`,
    ADD COLUMN `booked` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `copacity` INTEGER NOT NULL DEFAULT 1;
