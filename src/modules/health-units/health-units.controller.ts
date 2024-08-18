import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { FindAllHealthService } from './services/find-all-health-units.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FindAllHealthResponseDTO } from './dto/response/find-all-health-response.dto';
import { AuthGuard } from 'src/guards/auth.guard';

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
  async findAll() {
    return this.findAllHealthService.execute();
  }
}
