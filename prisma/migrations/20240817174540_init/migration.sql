-- CreateEnum
CREATE TYPE "CountryEnum" AS ENUM ('BRAZIL', 'PORTUGAL');

-- CreateEnum
CREATE TYPE "DayOfWeekEnum" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateTable
CREATE TABLE "HealthUnit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HealthUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthUnitAddress" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "addressNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "complement" TEXT,
    "district" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HealthUnitAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shit" (
    "id" TEXT NOT NULL,
    "dayOfWeek" "DayOfWeekEnum" NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "available" TEXT NOT NULL,
    "healthUnitId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shit" ADD CONSTRAINT "Shit_healthUnitId_fkey" FOREIGN KEY ("healthUnitId") REFERENCES "HealthUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
