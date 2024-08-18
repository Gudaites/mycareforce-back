import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

class UserResponseDto {
  @ApiProperty({ example: 'uuidv7', required: true })
  @IsString()
  @Expose()
  id: string;

  @ApiProperty({ example: 'Henrique', required: true })
  @IsString()
  @Expose()
  name: string;

  @ApiProperty({ example: 'hgudaites@gmail.com', required: true })
  @IsEmail()
  @Expose()
  email: string;
}
export class LoginResponseDTO {
  @ApiProperty({ example: 'token123', required: true })
  @IsString()
  @Expose()
  accessToken: string;

  @ApiProperty({ example: 'token123', required: true })
  @IsString()
  @Expose()
  refreshToken: string;

  @ApiProperty({ type: UserResponseDto, required: true })
  @IsString()
  @Expose()
  @Type(() => UserResponseDto)
  user: UserResponseDto;
}
