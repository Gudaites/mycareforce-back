import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DateTime } from 'luxon';
import { IFindAllHealth } from '../interfaces/find-all-health.interface';

@Injectable()
export class FindAllHealthService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(userId: string, params: { take?: number; skip?: number }) {
    const now = DateTime.now();
    const startIn3hours = now.plus({ hours: 3 }).toISO();

    const healthUnits = await this.prismaService.$queryRaw<IFindAllHealth[]>`
      SELECT 
        hu.id, 
        hu.name, 
        hu.address, 
        MIN(aslot.startTime) AS next_slot_time
      FROM HealthUnit hu
      JOIN AvailableSlot aslot
        ON hu.id = aslot.healthUnitId
      LEFT JOIN Registration r
        ON aslot.id = r.availableSlotId 
        AND r.userId = ${userId}
      WHERE 
        aslot.startTime >= ${startIn3hours}
        AND (aslot.booked < aslot.capacity OR r.userId IS NOT NULL)
      GROUP BY hu.id
      ORDER BY next_slot_time ASC
      LIMIT ${params.take || 10} OFFSET ${params.skip || 0}
    `;

    const totalCount = await this.prismaService.$queryRaw<any[]>`
      SELECT 
        COUNT(DISTINCT hu.id) as count
      FROM HealthUnit hu
      JOIN AvailableSlot aslot
        ON hu.id = aslot.healthUnitId
      LEFT JOIN Registration r
        ON aslot.id = r.availableSlotId 
        AND r.userId = ${userId}
      WHERE 
        aslot.startTime >= ${startIn3hours}
        AND (aslot.booked < aslot.capacity OR r.userId IS NOT NULL)
    `;

    return { healthUnits, total: Number(totalCount[0].count) };
  }
}
