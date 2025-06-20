import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const HttpUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request?.user?.uid ?? 'user1';
});
