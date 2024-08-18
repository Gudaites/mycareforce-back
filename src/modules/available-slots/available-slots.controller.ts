import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { GetAvailableSlotsByHealthUnitIdService } from './services/get-available-slots-by-health-unit-id.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetAvailableSlotsByHealthUnitIdResponseDTO } from './dto/response/get-available-slots-by-health-unit-id-response.dto';
import { GetAvailableSlotsByHealthUnitIdParamDTO } from './dto/params/get-available-slots-by-health-unit-id-params.dto';

@ApiTags('Available Slots')
@Controller('available-slots')
export class AvailableSlotsController {
  constructor(
    private readonly getAvailableSlotsByHealthUnitIdService: GetAvailableSlotsByHealthUnitIdService,
  ) {}

  @HttpCode(200)
  @ApiOperation({
    summary: 'Route to Login',
  })
  @ApiOkResponse({
    description: 'Result of this route',
    type: [GetAvailableSlotsByHealthUnitIdResponseDTO],
  })
  @Get(':healthUnitId')
  async getAvailableSlotsByHealthUnitId(
    @Param() param: GetAvailableSlotsByHealthUnitIdParamDTO,
  ) {
    return this.getAvailableSlotsByHealthUnitIdService.execute(
      param.healthUnitId,
    );
  }
}
