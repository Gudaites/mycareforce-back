import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostRegistrationInterestService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(availableSlotId: string, userId: string) {
    const availableSlot = await this.prismaService.availableSlot.findUnique({
      where: {
        id: availableSlotId,
      },
    });

    if (!availableSlot) {
      throw new NotFoundException('Horário não encontrado');
    }

    if (availableSlot.booked >= availableSlot.capacity) {
      throw new ConflictException('Todos os horários estão indisponiveis');
    }

    const existingRegistration =
      await this.prismaService.registration.findFirst({
        where: {
          userId,
          availableSlotId,
        },
      });

    if (existingRegistration) {
      throw new BadRequestException('Usuário já está inscrito neste horário');
    }

    const [registration] = await this.prismaService.$transaction([
      this.prismaService.registration.create({
        data: {
          availableSlotId: availableSlotId,
          userId: userId,
        },
      }),
      this.prismaService.availableSlot.update({
        where: { id: availableSlotId },
        data: {
          booked: {
            increment: 1,
          },
        },
      }),
    ]);

    return registration;
  }
}
