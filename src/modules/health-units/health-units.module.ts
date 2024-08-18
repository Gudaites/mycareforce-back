import { Module } from '@nestjs/common';
import { HealthUnitsController } from './health-units.controller';
import { FindAllHealthService } from './services/find-all-health-units.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HealthUnitsController],
  providers: [PrismaService, FindAllHealthService],
})
export class HealthUnitsModule {}
