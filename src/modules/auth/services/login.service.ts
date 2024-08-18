import { PrismaService } from './../../../prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateTokensService } from 'src/utils/services/create-tokens.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly createTokensService: CreateTokensService,
  ) {}
  async execute({ email, password }) {
    const existUser = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!existUser) {
      throw new NotFoundException(
        `Parece que ainda não há um cadastro com esse email`,
      );
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existUser.password);

    if (!isPasswordCorrect) {
      throw new BadRequestException(
        'Confira bem os dados: a senha ou o CPF não está correto',
      );
    }

    const tokens = await this.createTokensService.execute(
      existUser.id,
      existUser.email,
    );

    return {
      ...tokens,
      user: existUser,
    };
  }
}
