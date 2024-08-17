import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginBodyDTO {
  @ApiProperty({ example: 'email@example.com', required: true })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senha123', required: true })
  @IsString()
  @IsNotEmpty()
  password: string;
}
