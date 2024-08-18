import { Module } from '@nestjs/common';
import { RegistrationsController } from './registrations.controller';
import { PostRegistrationInterestService } from './services/post-registration-interest.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [RegistrationsController],
  providers: [JwtService, PostRegistrationInterestService],
})
export class RegistrationsModule {}
