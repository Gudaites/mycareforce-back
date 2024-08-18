import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class PostRegistrationInterestResponseDTO {
  @ApiProperty({
    example: '01916577-4f7f-7400-9e4d-6ae43e066ed6',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Expose()
  id: string;

  @ApiProperty({
    example: '0191624d-4117-7767-ae0d-5e66397f7a3d',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Expose()
  availableSlotId: string;

  @ApiProperty({
    example: '019162db-f741-7431-a094-875c9bff246f',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Expose()
  userId: string;
}
