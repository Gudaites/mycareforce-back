import { Controller } from '@nestjs/common';
import { PostRegistrationInterestService } from './services/post-registration-interest.service';

@Controller('registrations')
export class RegistrationsController {
  constructor(
    private readonly postRegistrationInterestService: PostRegistrationInterestService,
  ) {}
}
