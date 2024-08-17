import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './services/login.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTokensService } from 'src/utils/services/create-tokens.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [
    JwtService,
    ConfigService,
    PrismaService,
    LoginService,
    CreateTokensService,
  ],
})
export class AuthModule {}
