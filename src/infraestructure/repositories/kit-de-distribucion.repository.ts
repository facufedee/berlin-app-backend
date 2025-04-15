import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KitDeDistribucion } from '../../core/entities/kit-de-distribucion.entity';

@Injectable()
export class KitDeDistribucionRepository {
  constructor(
    @InjectModel(KitDeDistribucion.name)
    private readonly kitModel: Model<KitDeDistribucion>,
  ) {}

  async buscarPorCodigoKit(codigo_kit: string) {
    return this.kitModel.findOne({ codigo_kit }).exec();
  }
}
