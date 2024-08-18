import { Module } from '@nestjs/common';
import { RegistrationsController } from './registrations.controller';
import { PostRegistrationInterestService } from './services/post-registration-interest.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [ConfigModule],
  controllers: [RegistrationsController],
  providers: [JwtService, PrismaService, PostRegistrationInterestService],
})
export class RegistrationsModule {}
