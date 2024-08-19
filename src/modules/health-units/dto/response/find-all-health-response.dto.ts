import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

class UnitDto {
  @ApiProperty({
    example: '01916203-349f-78f3-a97a-df131000f31c',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Expose()
  id: string;

  @ApiProperty({ example: 'Health Unit 100', required: true })
  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;

  @ApiProperty({ example: 'Address 786', required: true })
  @IsString()
  @IsNotEmpty()
  @Expose()
  address: string;

  @ApiProperty({ example: '2024-08-19T12:00:00.000Z', required: true })
  @IsString()
  @IsNotEmpty()
  @Expose()
  next_slot_time: string;
}

export class FindAllHealthResponseDTO {
  @ApiProperty({ type: [UnitDto], required: true })
  @IsArray()
  @Expose()
  @Type(() => UnitDto)
  healthUnits: UnitDto[];

  @ApiProperty({ example: 20, required: true })
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  total: number;
}
