import {
  Controller,
  Get,
  HttpCode,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FindAllHealthService } from './services/find-all-health-units.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FindAllHealthResponseDTO } from './dto/response/find-all-health-response.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { IUserAuth } from 'src/decorators/interfaces/user-auth.interface';
import { UserAuth } from 'src/decorators/user.decorator';

@ApiTags('Health Units')
@Controller('health-units')
@UseGuards(AuthGuard)
export class HealthUnitsController {
  constructor(private readonly findAllHealthService: FindAllHealthService) {}

  @HttpCode(200)
  @ApiOperation({
    summary: 'Route to Login',
  })
  @ApiOkResponse({
    description: 'Result of this route',
    type: [FindAllHealthResponseDTO],
  })
  @Get()
  @ApiBearerAuth()
  @UseInterceptors(new TransformInterceptor(FindAllHealthResponseDTO))
  async findAll(@UserAuth() user: IUserAuth) {
    return this.findAllHealthService.execute(user.id);
  }
}
