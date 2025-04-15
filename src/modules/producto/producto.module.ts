import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoService } from '../../application/services/producto.service';
import { ProductoController } from '../../infraestructure/controllers/producto.controller';
import { Producto, ProductoSchema } from '../../core/entities/product.entity';
import { ProductoRepository } from '../../infraestructure/repositories/product.repository';
import { AutoModule } from '../auto/auto.module'; // 🔥 Importamos AutoModule
import { KitDeDistribucionModule } from '../kit-de-distribucion/kit-de-distribucion.module'; // 🔥 Importamos KitDeDistribucionModule

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Producto.name, schema: ProductoSchema }]), // 🔥 Conexión con MongoDB
    AutoModule, // 🔥 Ahora podemos usar AutoRepository en ProductoService
    KitDeDistribucionModule, // 🔥 Ahora podemos usar KitDeDistribucionRepository en ProductoService
  ],
  controllers: [ProductoController],
  providers: [ProductoService, ProductoRepository],
  exports: [ProductoService, ProductoRepository],
})
export class ProductoModule {}
