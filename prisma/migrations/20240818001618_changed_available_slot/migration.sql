/*
  Warnings:

  - You are about to alter the column `date` on the `AvailableSlot` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `DateTime(3)`.
  - You are about to alter the column `startTime` on the `AvailableSlot` table. The data in that column could be lost. The data in that column will be cast from `VarChar(5)` to `DateTime(3)`.
  - You are about to alter the column `endTime` on the `AvailableSlot` table. The data in that column could be lost. The data in that column will be cast from `VarChar(5)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `AvailableSlot` MODIFY `date` DATETIME(3) NOT NULL,
    MODIFY `startTime` DATETIME(3) NOT NULL,
    MODIFY `endTime` DATETIME(3) NOT NULL;
