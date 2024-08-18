import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class FindAllHealthResponseDTO {
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
