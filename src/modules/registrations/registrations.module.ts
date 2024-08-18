import { Module } from '@nestjs/common';
import { RegistrationsController } from './registrations.controller';
import { PostRegistrationInterestService } from './services/post-registration-interest.service';

@Module({
  controllers: [RegistrationsController],
  providers: [PostRegistrationInterestService],
})
export class RegistrationsModule {}
