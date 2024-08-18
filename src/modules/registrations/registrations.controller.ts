import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostRegistrationInterestService } from './services/post-registration-interest.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserAuth } from 'src/decorators/user.decorator';
import { IUserAuth } from 'src/decorators/interfaces/user-auth.interface';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { PostRegistrationInterestResponseDTO } from './dto/response/post-registration-interest.dto';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';

@Controller('registrations')
@UseGuards(AuthGuard)
export class RegistrationsController {
  constructor(
    private readonly postRegistrationInterestService: PostRegistrationInterestService,
  ) {}

  @HttpCode(201)
  @ApiOperation({
    summary: 'Route to Registrate interest',
  })
  @ApiOkResponse({
    description: 'Result of this route',
    type: PostRegistrationInterestResponseDTO,
  })
  @ApiBearerAuth()
  @Post('register-interest')
  @UseInterceptors(
    new TransformInterceptor(PostRegistrationInterestResponseDTO),
  )
  registerInterest(
    @Body() body: { availableSlotId: string },
    @UserAuth() user: IUserAuth,
  ) {
    const { availableSlotId } = body;

    return this.postRegistrationInterestService.execute(
      availableSlotId,
      user.id,
    );
  }
}
