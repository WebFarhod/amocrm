import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // true for all origins
    origin: true,
  });

  app.setGlobalPrefix('api');
  await app.listen(3000, () => {
    console.log('start');
  });
}
bootstrap();
