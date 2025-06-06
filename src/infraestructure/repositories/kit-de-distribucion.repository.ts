import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { KitDeDistribucion } from '../../core/entities/kit-de-distribucion.entity';

@Injectable()
export class KitDeDistribucionRepository {
  constructor(
    @InjectModel(KitDeDistribucion.name)
    private readonly model: Model<KitDeDistribucion>,
  ) {}

  async crear(data: Partial<KitDeDistribucion>) {
    return this.model.create(data);
  }

  async obtenerTodos() {
    return this.model.find();
  }

  async obtenerPorId(id: string) {
    return this.model.findById(id);
  }

  async actualizar(id: string, data: Partial<KitDeDistribucion>) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async eliminar(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
