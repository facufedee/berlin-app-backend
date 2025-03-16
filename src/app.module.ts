import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infraestructure/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { AutoModule } from './modules/auto/auto.module'; // Ensu
// re this path is correct
@Module({
  imports: [
    ConfigModule.forRoot(), // Carga las variables de entorno
    DatabaseModule, // Conexión a MongoDB
    AuthModule, // Módulo de autenticación
    AutoModule, // Módulo de autos
  ],
})
export class AppModule {}
