import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infraestructure/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { AutoModule } from './modules/auto/auto.module'; 
import { ProductoModule } from './modules/producto/producto.module';
import { KitDeDistribucionModule } from './modules/kit-de-distribucion/kit-de-distribucion.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga las variables de entorno desde .env
    DatabaseModule, // Conexión con MongoDB
    AuthModule, // Manejo de autenticación
    AutoModule, // Módulo para gestión de autos
    KitDeDistribucionModule, // Módulo para kits de distribución
    ProductoModule, // Módulo de productos
  ],
})
export class AppModule {}
