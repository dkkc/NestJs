import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  (app as NestExpressApplication).enable('trust proxy');

  await app.listen(3000);
}
bootstrap();
