import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import {
  ClassConstructor,
  instanceToInstance,
  plainToClass,
} from 'class-transformer';
import { Observable, map } from 'rxjs';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor {
  constructor(
    private readonly dtoClass: ClassConstructor<T>,
    private readonly options?: { locale?: string },
  ) {}

  intercept(_context: ExecutionContext, next: CallHandler): Observable<T> {
    return next.handle().pipe(
      map((data) => {
        const transformedData = plainToClass(this.dtoClass, data, {
          ignoreDecorators: true,
        });

        return instanceToInstance(transformedData, {
          ...this.options,
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
