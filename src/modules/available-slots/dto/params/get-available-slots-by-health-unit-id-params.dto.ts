import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetAvailableSlotsByHealthUnitIdParamDTO {
  @ApiProperty({
    example: '01916203-349f-78f3-a97a-df131000f31c',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Expose()
  healthUnitId: string;
}
