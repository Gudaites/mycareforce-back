import { Module, OnModuleInit } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UtilsModule } from './utils/utils.module';
import { ConfigModule } from '@nestjs/config';
import { SeederService } from './seeder/seeder.service';
import { SeederModule } from './seeder/seeder.module';
import { HealthUnitsModule } from './modules/health-units/health-units.module';

@Module({
  imports: [
    SeederModule,
    ConfigModule.forRoot(),
    AuthModule,
    PrismaModule,
    UtilsModule,
    HealthUnitsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    await this.seederService.execute();
  }
}
