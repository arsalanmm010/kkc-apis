import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const dotenv = require('dotenv');

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('kkc-backend-apis')
    .setDescription('kkc-backend-apis')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('apis')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const PORT = 5000;

  await app.listen(PORT);

  console.log(`API is running on port ${PORT}`);
}
bootstrap();
