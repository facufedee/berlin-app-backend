import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auto } from '../../infraestructure/database/schemas/auto.schema';

@Controller('autos')
export class AutoController {
  constructor(@InjectModel(Auto.name) private readonly autoModel: Model<Auto>) {}

  @Get()
  async getAllAutos() {
    return await this.autoModel.find().exec(); // 🔥 Devuelve toda la colección
  }
}
