import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeederService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute() {
    console.log('iniciou');
    const users = [
      {
        name: 'Henrique Gudaites',
        email: 'hgudaites@gmail.com',
        password: bcrypt.hashSync('teste123', 10),
      },
    ];

    for await (const user of users) {
      await this.prismaService.user.upsert({
        where: { email: user.email },
        create: user,
        update: user,
      });
    }
  }
}
