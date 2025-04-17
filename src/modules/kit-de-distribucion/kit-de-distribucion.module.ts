import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KitDeDistribucionService } from '../../application/services/kit-de-distribucion-service';
import { KitDeDistribucionController } from '../../infraestructure/controllers/kit-de-distribucion.controller';
import { KitDeDistribucionRepository } from '../../infraestructure/repositories/kit-de-distribucion.repository';
import { KitDeDistribucion, KitDeDistribucionSchema } from '../../core/entities/kit-de-distribucion.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: KitDeDistribucion.name, schema: KitDeDistribucionSchema }
    ]),
  ],
  controllers: [KitDeDistribucionController],
  providers: [KitDeDistribucionService, KitDeDistribucionRepository],
  exports: [KitDeDistribucionService, KitDeDistribucionRepository],
})
export class KitDeDistribucionModule {}
