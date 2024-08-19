import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DelayInterceptor } from './delay.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Adicionei para fazer alguns testes de front
  app.useGlobalInterceptors(new DelayInterceptor());

  app.enableCors();

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Beneficiary API')
    .setDescription(process.env.npm_package_description)
    .setVersion(process.env.npm_package_version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
