import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginBodyDTO } from './dto/login-body.dto';
import { LoginResponseDTO } from './dto/login-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly loginService: LoginService) {}

  @HttpCode(200)
  @ApiOperation({
    summary: 'Route to Login',
  })
  @ApiOkResponse({
    description: 'Result of this route',
    type: LoginResponseDTO,
  })
  @Post('login')
  async login(@Body() body: LoginBodyDTO) {
    return this.loginService.execute(body);
  }
}
