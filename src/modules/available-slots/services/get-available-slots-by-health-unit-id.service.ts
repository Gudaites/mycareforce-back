import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetAvailableSlotsByHealthUnitIdService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(healthUnitId: string) {
    const startIn3hours = DateTime.now().plus({ hours: 3 }).toISO();

    const result = await this.prismaService.availableSlot.findMany({
      include: {
        _count: {
          select: {
            registrations: true,
          },
        },
      },
      where: {
        healthUnitId,
        startTime: {
          gte: startIn3hours,
        },
      },
    });

    const response = result.map((item) => {
      return {
        ...item,
        availableSlots: item.slots - item._count.registrations,
      };
    });

    return response;
  }
}
