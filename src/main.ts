import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV !== 'production') {
    app.enableCors({
      origin: 'http://localhost:8080',
    });
  }

  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
