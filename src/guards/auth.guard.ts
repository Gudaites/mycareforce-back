import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ITokenDecode } from './interfaces/token-decode.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly JwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers.authorization || '';
    const token = authorizationHeader.split('Bearer ')[1];

    if (!token) {
      throw new UnauthorizedException('Não autorizado');
    }

    try {
      const issuer = this.configService.get<string>('JWT_ISSUER');
      const secret = this.configService.get<string>('JWT_SECRET');

      const decodedToken: ITokenDecode = this.JwtService.verify(token, {
        issuer,
        secret,
      });

      if (decodedToken.token_type !== 'access') {
        throw new UnauthorizedException('Não autorizado');
      }

      request.user = decodedToken.user;

      return true;
    } catch (err) {
      if (err.message === 'jwt expired') {
        throw new UnauthorizedException('Token expirado');
      }

      if (err.message === 'invalid signature') {
        throw new UnauthorizedException('Token inválido');
      }

      throw new UnauthorizedException(err.message);
    }
  }
}
