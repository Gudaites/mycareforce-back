import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserAuth = createParamDecorator(
  (_data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
