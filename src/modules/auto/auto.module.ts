import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Auto, AutoSchema } from '../../infraestructure/database/schemas/auto.schema';
import { AutoRepository } from '../../infraestructure/repositories/auto.repository';
import { AutoController } from '../../infraestructure/controllers/auto.controller';	

@Module({
  imports: [MongooseModule.forFeature([{ name: Auto.name, schema: AutoSchema }])],
  controllers: [AutoController],
  providers: [AutoRepository],
  exports: [AutoRepository],
})
export class AutoModule {}
