import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Auto, AutoSchema } from '../../infraestructure/database/schemas/auto.schema';
import { AutoRepository } from '../../infraestructure/repositories/auto.repository';
import { AutoController } from '../../infraestructure/controllers/auto.controller';	
import { AutoService } from '../../application/services/auto.service';
@Module({
  imports: [MongooseModule.forFeature([{ name: Auto.name, schema: AutoSchema }])],
  controllers: [AutoController], // ✅ Agrega el controlador
  providers: [AutoService, AutoRepository], // ✅ Asegura que el servicio y el repositorio están en `providers`
  exports: [AutoService, AutoRepository], // ✅ Exporta el servicio y el repositorio para que otros módulos los usen
})
export class AutoModule {}
