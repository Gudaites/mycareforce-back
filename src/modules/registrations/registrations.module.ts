import { Module } from '@nestjs/common';
import { RegistrationsController } from './registrations.controller';
import { PostRegistrationInterestService } from './services/post-registration-interest.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllRegistrationsService } from './services/get-all-registration.service';

@Module({
  imports: [ConfigModule],
  controllers: [RegistrationsController],
  providers: [
    JwtService,
    PrismaService,
    PostRegistrationInterestService,
    GetAllRegistrationsService,
  ],
})
export class RegistrationsModule {}
