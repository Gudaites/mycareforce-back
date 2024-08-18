import { Controller, UseGuards } from '@nestjs/common';
import { PostRegistrationInterestService } from './services/post-registration-interest.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('registrations')
@UseGuards(AuthGuard)
export class RegistrationsController {
  constructor(
    private readonly postRegistrationInterestService: PostRegistrationInterestService,
  ) {}
}
