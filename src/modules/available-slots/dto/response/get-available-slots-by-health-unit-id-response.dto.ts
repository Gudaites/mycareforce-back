import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetAvailableSlotsByHealthUnitIdResponseDTO {
  @ApiProperty({
    example: '01916203-349f-78f3-a97a-df131000f31c',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Expose()
  id: string;

  @ApiProperty({ example: '2024-08-19T12:00:00.000Z', required: true })
  @IsString()
  @IsNotEmpty()
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2024-08-20T12:00:00.000Z', required: true })
  @IsString()
  @IsNotEmpty()
  @Expose()
  endTime: string;

  @ApiProperty({ example: 2, required: true })
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  capacity: number;

  @ApiProperty({ example: 1, required: true })
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  booked: number;

  @ApiProperty({ example: false, required: true })
  @IsBoolean()
  @Expose()
  @Type(() => Boolean)
  isScheduled: boolean;
}
