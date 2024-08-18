import {
  Controller,
  Get,
  HttpCode,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { GetAvailableSlotsByHealthUnitIdService } from './services/get-available-slots-by-health-unit-id.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { GetAvailableSlotsByHealthUnitIdResponseDTO } from './dto/response/get-available-slots-by-health-unit-id-response.dto';
import { GetAvailableSlotsByHealthUnitIdParamDTO } from './dto/params/get-available-slots-by-health-unit-id-params.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';

@ApiTags('Available Slots')
@Controller('available-slots')
@UseGuards(AuthGuard)
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
  @ApiBearerAuth()
  @UseInterceptors(
    new TransformInterceptor(GetAvailableSlotsByHealthUnitIdResponseDTO),
  )
  async getAvailableSlotsByHealthUnitId(
    @Param() param: GetAvailableSlotsByHealthUnitIdParamDTO,
  ) {
    return this.getAvailableSlotsByHealthUnitIdService.execute(
      param.healthUnitId,
    );
  }
}
