import { Module } from '@nestjs/common';
import { HealthUnitsController } from './health-units.controller';
import { FindAllHealthService } from './services/find-all-health-units.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ConfigModule],
  controllers: [HealthUnitsController],
  providers: [JwtService, PrismaService, FindAllHealthService],
})
export class HealthUnitsModule {}
