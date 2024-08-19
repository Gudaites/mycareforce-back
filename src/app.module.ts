import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UtilsModule } from './utils/utils.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';
import { HealthUnitsModule } from './modules/health-units/health-units.module';
import { AvailableSlotsModule } from './modules/available-slots/available-slots.module';
import { RegistrationsModule } from './modules/registrations/registrations.module';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.registerAsync<RedisClientOptions>({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        store: await redisStore({
          url: `redis://${configService.get<string>('REDIS_HOST')}:${configService.get<string>('REDIS_PORT')}`,
          password: configService.get<string>('REDIS_PASSWORD'),
          database: configService.get<number>('REDIS_DATABASE'),
          keyPrefix: 'backend-test',
        }),
      }),
    }),
    AuthModule,
    PrismaModule,
    UtilsModule,
    HealthUnitsModule,
    AvailableSlotsModule,
    RegistrationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
