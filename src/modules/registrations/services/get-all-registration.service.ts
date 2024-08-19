import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetAllRegistrationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(userId: string) {
    return this.prismaService.availableSlot.findMany({
      where: {
        registrations: {
          some: {
            userId,
          },
        },
      },
      orderBy: {
        startTime: 'asc',
      },
    });
  }
}
