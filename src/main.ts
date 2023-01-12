// main.ts가 모든것을 시작한다.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // app 모듈은 모든 것의 루트 모듈이다.
  app.useGlobalPipes(
    // ValidationPipe()는 유효성 검새를 해준다.
    new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      })
  );
  await app.listen(3000);
}
bootstrap();
