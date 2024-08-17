import { Module } from '@nestjs/common';
import { CreateTokensService } from './services/create-tokens.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  providers: [JwtService, CreateTokensService, ConfigService],
  exports: [CreateTokensService],
})
export class UtilsModule {}
