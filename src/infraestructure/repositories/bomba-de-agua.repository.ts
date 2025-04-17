import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BombaDeAgua } from '../../core/entities/bomba-de-agua.entity';

// Este repositorio se encarga de acceder a la base de datos de bombas
@Injectable()
export class BombaDeAguaRepository {
  constructor(
    @InjectModel(BombaDeAgua.name)
    private readonly model: Model<BombaDeAgua>,
  ) {}

  async crear(data: Partial<BombaDeAgua>) {
    return this.model.create(data);
  }

  async obtenerTodos() {
    return this.model.find();
  }

  async obtenerPorId(id: string) {
    return this.model.findById(id);
  }

  async actualizar(id: string, data: Partial<BombaDeAgua>) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async eliminar(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
