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
    private readonly options?: { locale?: string }, // Adiciona suporte para opções
  ) {}

  intercept(_context: ExecutionContext, next: CallHandler): Observable<T> {
    return next.handle().pipe(
      map((data) => {
        // Transforma dados brutos em uma instância da classe DTO
        const transformedData = plainToClass(this.dtoClass, data, {
          ignoreDecorators: true,
        });

        // Aplica instanceToInstance para aplicar as opções e excluir valores extrínsecos
        return instanceToInstance(transformedData, {
          ...this.options,
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
