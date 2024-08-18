import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CreateTokensService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async execute(id: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.generateAccessTokenForMember(id, email),
      this.generateRefreshToken(id, email),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  private generateAccessTokenForMember(id: string, email: string): string {
    const issuer = this.configService.get<string>('JWT_ISSUER');
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<string>('JWT_EXPIRATION_TIME');

    const payload = {
      user: {
        id,
        email,
      },
      token_type: 'access',
    };

    return this.jwtService.sign(payload, { issuer, expiresIn, secret });
  }

  private generateRefreshToken(id: string, email: string): string {
    // Possivelmente adicionar regra para bloquear acesso
    const issuer = this.configService.get<string>('JWT_ISSUER');
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<string>('JWT_REFRESH_TIME');

    const payload = {
      user: {
        id,
        email,
      },
      token_type: 'refresh',
    };

    return this.jwtService.sign(payload, { issuer, expiresIn, secret });
  }
}
