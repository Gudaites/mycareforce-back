import { Module } from '@nestjs/common';
import { GetAvailableSlotsByHealthUnitIdService } from './services/get-available-slots-by-health-unit-id.service';
import { AvailableSlotsController } from './available-slots.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [AvailableSlotsController],
  providers: [
    JwtService,
    PrismaService,
    GetAvailableSlotsByHealthUnitIdService,
  ],
})
export class AvailableSlotsModule {}
