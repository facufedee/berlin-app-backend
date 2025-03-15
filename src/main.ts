import 'dotenv/config'; // Carga las variables de entorno antes que cualquier otro módulo
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  app.enableCors();
  await app.listen(configService.get('PORT') || 3000);
  console.log(`🟢 Servidor corriendo en http://localhost:${configService.get('PORT') || 3000}`);
}

bootstrap();
