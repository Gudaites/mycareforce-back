import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CreateTokensService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async execute(email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.generateAccessTokenForMember(email),
      this.generateRefreshToken(email),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  private generateAccessTokenForMember(email: string): string {
    const issuer = this.configService.get<string>('JWT_ISSUER');
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<string>('JWT_EXPIRATION_TIME');

    const payload = {
      email,
      token_type: 'access',
    };

    return this.jwtService.sign(payload, { issuer, expiresIn, secret });
  }

  private generateRefreshToken(email: string): string {
    // Possivelmente adicionar regra para bloquear acesso
    const issuer = this.configService.get<string>('JWT_ISSUER');
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<string>('JWT_REFRESH_TIME');

    const payload = {
      email,
      token_type: 'refresh',
    };

    return this.jwtService.sign(payload, { issuer, expiresIn, secret });
  }
}
