/*
  Warnings:

  - Added the required column `slots` to the `Shit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shit" ADD COLUMN     "slots" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserShifts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_UserShifts_AB_unique" ON "_UserShifts"("A", "B");

-- CreateIndex
CREATE INDEX "_UserShifts_B_index" ON "_UserShifts"("B");

-- AddForeignKey
ALTER TABLE "_UserShifts" ADD CONSTRAINT "_UserShifts_A_fkey" FOREIGN KEY ("A") REFERENCES "Shit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserShifts" ADD CONSTRAINT "_UserShifts_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
