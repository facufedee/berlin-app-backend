import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BombaDeAguaController } from '../../infraestructure/controllers/bomba-de-agua.controller';
import { BombaDeAguaService } from '../../application/services/bomba-de-agua.service';
import { BombaDeAguaRepository } from '../../infraestructure/repositories/bomba-de-agua.repository';
import { BombaDeAgua, BombaDeAguaSchema } from '../../core/entities/bomba-de-agua.entity';

// Este módulo une todo: controller + service + repo + modelo
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BombaDeAgua.name, schema: BombaDeAguaSchema }
    ]),
  ],
  controllers: [BombaDeAguaController],
  providers: [BombaDeAguaService, BombaDeAguaRepository],
  exports: [BombaDeAguaService, BombaDeAguaRepository],
})
export class BombaDeAguaModule {}
