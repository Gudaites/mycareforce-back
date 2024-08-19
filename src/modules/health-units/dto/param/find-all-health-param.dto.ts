import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class FindAllHealthParamDTO {
  @ApiProperty({ example: 20, required: false })
  @IsNumber()
  @IsOptional()
  @Expose()
  @Type(() => Number)
  take?: number;

  @ApiProperty({ example: 20, required: false })
  @IsNumber()
  @IsOptional()
  @Expose()
  @Type(() => Number)
  skip?: number;
}
