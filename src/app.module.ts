import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UtilsModule } from './utils/utils.module';
import { ConfigModule } from '@nestjs/config';
import { HealthUnitsModule } from './modules/health-units/health-units.module';
import { AvailableSlotsModule } from './modules/available-slots/available-slots.module';
import { RegistrationsModule } from './modules/registrations/registrations.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PrismaModule,
    UtilsModule,
    HealthUnitsModule,
    AvailableSlotsModule,
    RegistrationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
