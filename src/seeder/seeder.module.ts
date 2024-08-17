import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  providers: [SeederService, PrismaService],
  exports: [SeederService],
})
export class SeederModule {}
