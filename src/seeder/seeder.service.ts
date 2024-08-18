import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeederService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute() {
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

    const units = [
      {
        id: '01916203-349f-78f3-a97a-df131000f31c',
        name: 'Health Unit 100',
        address: 'Address 786',
        createdAt: '2024-08-17T20:24:22.944Z',
        updatedAt: '2024-08-17T20:24:22.944Z',
      },
      {
        id: '01916203-34a2-7fc1-b714-c7ec0a298e07',
        name: 'Health Unit 616',
        address: 'Address 966',
        createdAt: '2024-08-17T20:24:22.947Z',
        updatedAt: '2024-08-17T20:24:22.947Z',
      },
      {
        id: '01916203-34a5-70a2-94b2-abd57c39506c',
        name: 'Health Unit 630',
        address: 'Address 614',
        createdAt: '2024-08-17T20:24:22.949Z',
        updatedAt: '2024-08-17T20:24:22.949Z',
      },
      {
        id: '01916203-34a7-7bb1-91bc-b2d2174f393c',
        name: 'Health Unit 594',
        address: 'Address 163',
        createdAt: '2024-08-17T20:24:22.952Z',
        updatedAt: '2024-08-17T20:24:22.952Z',
      },
      {
        id: '01916203-34a9-7093-a23d-f8ad118f2fdf',
        name: 'Health Unit 474',
        address: 'Address 512',
        createdAt: '2024-08-17T20:24:22.954Z',
        updatedAt: '2024-08-17T20:24:22.954Z',
      },
      {
        id: '01916203-34ac-7ad1-8d7d-de0a08ab5247',
        name: 'Health Unit 798',
        address: 'Address 899',
        createdAt: '2024-08-17T20:24:22.956Z',
        updatedAt: '2024-08-17T20:24:22.956Z',
      },
      {
        id: '01916203-34ae-7463-ba08-28fcdf18549a',
        name: 'Health Unit 634',
        address: 'Address 222',
        createdAt: '2024-08-17T20:24:22.958Z',
        updatedAt: '2024-08-17T20:24:22.958Z',
      },
      {
        id: '01916203-34b0-73b3-8379-df7273f62117',
        name: 'Health Unit 974',
        address: 'Address 3',
        createdAt: '2024-08-17T20:24:22.961Z',
        updatedAt: '2024-08-17T20:24:22.961Z',
      },
      {
        id: '01916203-34b2-7a00-a804-8895819c45dc',
        name: 'Health Unit 191',
        address: 'Address 571',
        createdAt: '2024-08-17T20:24:22.963Z',
        updatedAt: '2024-08-17T20:24:22.963Z',
      },
      {
        id: '01916203-34b4-7d83-aab8-3d34a69135bf',
        name: 'Health Unit 108',
        address: 'Address 83',
        createdAt: '2024-08-17T20:24:22.965Z',
        updatedAt: '2024-08-17T20:24:22.965Z',
      },
      {
        id: '01916203-34b6-7f61-9e52-cd627e2bd166',
        name: 'Health Unit 517',
        address: 'Address 389',
        createdAt: '2024-08-17T20:24:22.967Z',
        updatedAt: '2024-08-17T20:24:22.967Z',
      },
      {
        id: '01916203-34b8-7931-b279-179071a8e02e',
        name: 'Health Unit 99',
        address: 'Address 337',
        createdAt: '2024-08-17T20:24:22.969Z',
        updatedAt: '2024-08-17T20:24:22.969Z',
      },
      {
        id: '01916203-34ba-71d2-9cff-cad4cc13d5e9',
        name: 'Health Unit 316',
        address: 'Address 606',
        createdAt: '2024-08-17T20:24:22.971Z',
        updatedAt: '2024-08-17T20:24:22.971Z',
      },
      {
        id: '01916203-34bc-7930-9213-bd18d797f668',
        name: 'Health Unit 595',
        address: 'Address 647',
        createdAt: '2024-08-17T20:24:22.973Z',
        updatedAt: '2024-08-17T20:24:22.973Z',
      },
      {
        id: '01916203-34be-7823-9069-42e3f79ded54',
        name: 'Health Unit 992',
        address: 'Address 340',
        createdAt: '2024-08-17T20:24:22.975Z',
        updatedAt: '2024-08-17T20:24:22.975Z',
      },
      {
        id: '01916203-34c1-75e2-8ec9-48ff274d4360',
        name: 'Health Unit 179',
        address: 'Address 276',
        createdAt: '2024-08-17T20:24:22.977Z',
        updatedAt: '2024-08-17T20:24:22.977Z',
      },
      {
        id: '01916203-34c3-7b80-9d34-2319b59e7302',
        name: 'Health Unit 588',
        address: 'Address 210',
        createdAt: '2024-08-17T20:24:22.979Z',
        updatedAt: '2024-08-17T20:24:22.979Z',
      },
      {
        id: '01916203-34c9-7821-862a-5a3ecb47395b',
        name: 'Health Unit 590',
        address: 'Address 586',
        createdAt: '2024-08-17T20:24:22.985Z',
        updatedAt: '2024-08-17T20:24:22.985Z',
      },
      {
        id: '01916203-34cb-7843-9e8a-95648d147283',
        name: 'Health Unit 14',
        address: 'Address 816',
        createdAt: '2024-08-17T20:24:22.987Z',
        updatedAt: '2024-08-17T20:24:22.987Z',
      },
      {
        id: '01916203-34cd-7d63-af85-99217a02f1da',
        name: 'Health Unit 757',
        address: 'Address 325',
        createdAt: '2024-08-17T20:24:22.989Z',
        updatedAt: '2024-08-17T20:24:22.989Z',
      },
    ];

    for await (const unit of units) {
      await this.prismaService.healthUnit.upsert({
        where: { id: unit.id },
        create: {
          id: unit.id,
          name: unit.name,
          address: unit.address,
          createdAt: unit.createdAt,
          updatedAt: unit.updatedAt,
        },
        update: {
          name: unit.name,
          address: unit.address,
          updatedAt: unit.updatedAt,
        },
      });
    }

    const availableSlots = [
      {
        id: '0191624d-0824-70ed-939a-9880138321ad',
        startTime: new Date('2024-08-17 09:00'),
        endTime: new Date('2024-08-17 21:00'),
        healthUnitId: units[0].id,
      },
      {
        id: '0191624d-4117-7767-ae0d-5e66397f7a3d',
        startTime: new Date('2024-09-19 09:00'),
        endTime: new Date('2024-09-19 21:00'),
        healthUnitId: units[0].id,
      },
      {
        id: '0191624d-68c6-7a84-b019-58b5843bcc7f',
        startTime: new Date('2024-09-19 09:00'),
        endTime: new Date('2024-09-19 21:00'),
        healthUnitId: units[1].id,
      },
      {
        id: '0191624d-8fc2-7957-9d29-78e3bb252702',
        startTime: new Date('2024-09-19 09:00'),
        endTime: new Date('2024-09-19 21:00'),
        healthUnitId: units[1].id,
      },
    ];

    for await (const slot of availableSlots) {
      await this.prismaService.availableSlot.upsert({
        where: { id: slot.id },
        update: {
          id: slot.id,
          startTime: slot.startTime,
          endTime: slot.endTime,
          healthUnitId: slot.healthUnitId,
        },
        create: {
          id: slot.id,
          startTime: slot.startTime,
          endTime: slot.endTime,
          healthUnitId: slot.healthUnitId,
        },
      });
    }
  }
}
