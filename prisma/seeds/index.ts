import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const main = async () => {
  const users = [
    {
      name: 'Henrique Gudaites',
      email: 'hgudaites@gmail.com',
      password: bcrypt.hashSync('teste123', 10),
    },
    {
      name: 'teste teste',
      email: 'teste@gmail.com',
      password: bcrypt.hashSync('teste123', 10),
    },
  ];

  for await (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      create: user,
      update: user,
    });
  }

  function generateUnitsAndSlots() {
    const units = [];
    const availableSlots = [];

    for (let i = 0; i < 20; i++) {
      const unit = {
        id: faker.datatype.uuid(),
        name: `Health Unit ${faker.random.numeric(3)}`,
        address: `Address ${faker.random.numeric(3)}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      units.push(unit);

      const slotsCount = faker.datatype.number({ min: 5, max: 10 });
      for (let j = 0; j < slotsCount; j++) {
        const startTime = faker.date.between(
          '2024-08-22T00:00:00.000Z',
          '2024-08-30T00:00:00.000Z',
        );
        const endTime = new Date(startTime);
        endTime.setHours(startTime.getHours() + 8);

        const slot = {
          id: faker.datatype.uuid(),
          startTime: startTime,
          endTime: endTime,
          healthUnitId: unit.id,
        };

        availableSlots.push(slot);
      }
    }

    return { units, availableSlots };
  }

  const { units, availableSlots } = generateUnitsAndSlots();

  for await (const unit of units) {
    await prisma.healthUnit.upsert({
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

  for await (const slot of availableSlots) {
    await prisma.availableSlot.upsert({
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
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
