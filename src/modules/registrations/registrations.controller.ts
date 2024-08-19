import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostRegistrationInterestService } from './services/post-registration-interest.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserAuth } from 'src/decorators/user.decorator';
import { IUserAuth } from 'src/decorators/interfaces/user-auth.interface';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PostRegistrationInterestResponseDTO } from './dto/response/post-registration-interest.dto';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { GetAllRegistrationsService } from './services/get-all-registration.service';
import { GetAllAvailableRegistredResponseDTO } from './dto/response/get-all-available-registred-response.dto';

@ApiTags('Registrations')
@Controller('registrations')
@UseGuards(AuthGuard)
export class RegistrationsController {
  constructor(
    private readonly postRegistrationInterestService: PostRegistrationInterestService,
    private readonly getAllRegistrationsService: GetAllRegistrationsService,
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

  @HttpCode(200)
  @ApiOperation({
    summary: 'Route to get all available registreted interest',
  })
  @ApiOkResponse({
    description: 'Result of this route',
    type: [GetAllAvailableRegistredResponseDTO],
  })
  @ApiBearerAuth()
  @Get('')
  @UseInterceptors(
    new TransformInterceptor(GetAllAvailableRegistredResponseDTO),
  )
  getAllRegister(@UserAuth() user: IUserAuth) {
    return this.getAllRegistrationsService.execute(user.id);
  }
}
