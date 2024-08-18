/*
  Warnings:

  - A unique constraint covering the columns `[availableSlotId,userId]` on the table `Registration` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Registration_availableSlotId_userId_key` ON `Registration`(`availableSlotId`, `userId`);
