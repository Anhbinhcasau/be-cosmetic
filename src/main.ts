import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Module, ValidationPipe } from '@nestjs/common';
import * as express from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', 
    credentials: true, // Bật chia sẻ thông tin xác thực (cookies, headers, etc.).
  });
  
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  app.use(express.json({ limit: '500mb' }));
  // app.use(AuthUtils.CheckAuth())
  await app.listen(8080);
}
bootstrap();
