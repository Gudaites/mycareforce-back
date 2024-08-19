import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DateTime } from 'luxon';
import { IFindAllHealth } from '../interfaces/find-all-health.interface';

@Injectable()
export class FindAllHealthService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(userId: string) {
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
      LIMIT 10 OFFSET 0
    `;

    return healthUnits;
  }
}
