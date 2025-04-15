import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auto } from '../../core/entities/auto.entity';

@Injectable()
export class AutoRepository {
  constructor(@InjectModel(Auto.name) private readonly autoModel: Model<Auto>) {}

  async buscarPorId(id: string) {
    return this.autoModel.findById(id).exec();
  }

  async buscarPorMarcaModeloMotor(marca: string, modelo: string, motor: string) {
    return this.autoModel.findOne({ marca, modelo, motor }).exec();
  }

  async buscarPorCodigoKit(codigo_kit: string) {
    return this.autoModel.find({ codigo_kit }).exec();
  }

  async obtenerAutos() {
    return this.autoModel.find().exec();
  }
  
  async obtenerModelosPorMarca(marca: string) {
    return this.autoModel.distinct('modelo', { marca }).exec();
  }
}
