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
  isScheduled: boolean;
}
@Injectable()
export class GetAvailableSlotsByHealthUnitIdService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(userId: string, healthUnitId: string) {
    const startIn3hours = DateTime.now().plus({ hours: 3 }).toISO();

    const result: Array<IAvailableSlot> = await this.prismaService.$queryRaw`
      SELECT 
        a.*, 
        CASE 
          WHEN r.userId IS NOT NULL THEN true 
          ELSE false 
        END AS isScheduled
      FROM AvailableSlot a
      LEFT JOIN Registration r 
        ON r.availableSlotId = a.id 
        AND r.userId = ${userId}
      WHERE 
        a.healthUnitId = ${healthUnitId} 
        AND a.startTime >= ${startIn3hours}
        AND (
          (a.booked < a.capacity)
          OR (r.userId IS NOT NULL)
        )
      ORDER BY a.startTime ASC
    `;

    return result;
  }
}
