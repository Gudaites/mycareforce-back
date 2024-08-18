import { Module } from '@nestjs/common';
import { GetAvailableSlotsByHealthUnitIdService } from './services/get-available-slots-by-health-unit-id.service';
import { AvailableSlotsController } from './available-slots.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AvailableSlotsController],
  providers: [PrismaService, GetAvailableSlotsByHealthUnitIdService],
})
export class AvailableSlotsModule {}
