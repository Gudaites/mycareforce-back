import { Controller, Get, HttpCode } from '@nestjs/common';
import { FindAllHealthService } from './services/find-all-health-units.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllHealthResponseDTO } from './dto/response/find-all-health-response.dto';

@ApiTags('Health Units')
@Controller('health-units')
export class HealthUnitsController {
  constructor(private readonly findAllHealthService: FindAllHealthService) {}

  @HttpCode(200)
  @ApiOperation({
    summary: 'Route to Login',
  })
  @ApiOkResponse({
    description: 'Result of this route',
    type: FindAllHealthResponseDTO,
  })
  @Get()
  findAll() {
    return this.findAllHealthService.execute();
  }
}
