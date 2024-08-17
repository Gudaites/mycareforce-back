import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class LoginResponseDTO {
  @ApiProperty({ example: 'token123', required: true })
  @IsString()
  @Expose()
  accessToken: string;

  @ApiProperty({ example: 'token123', required: true })
  @IsString()
  @Expose()
  refreshToken: string;
}
