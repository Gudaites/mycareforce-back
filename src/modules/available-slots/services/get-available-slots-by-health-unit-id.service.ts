import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import { PrismaService } from 'src/prisma/prisma.service';

export interface IAvailableSlot {
  id: string;
  startTime: Date;
  endTime: Date;
  healthUnitId: string;
  booked: number;
  capacity: number;
}
@Injectable()
export class GetAvailableSlotsByHealthUnitIdService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(healthUnitId: string) {
    const startIn3hours = DateTime.now().plus({ hours: 3 }).toISO();

    const result: IAvailableSlot[] = await this.prismaService
      .$queryRaw`SELECT * FROM AvailableSlot WHERE healthUnitId = ${healthUnitId} AND startTime >= ${startIn3hours} AND booked < capacity`;

    return result;
  }
}
