import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto, ProductoDocument } from '../../core/entities/product.entity';


@Injectable()
export class ProductoRepository {
  constructor(@InjectModel(Producto.name) private readonly productoModel: Model<ProductoDocument>) {}

  async findAll(): Promise<Producto[]> {
    return this.productoModel.find().exec();
  }

  async findByCodigoRepuesto(codigo: string): Promise<Producto | null> {
    return this.productoModel.findOne({ codigoRepuesto: codigo }).exec();
  }

  async findByCodigo(codigo: string): Promise<Producto[]> {
    return this.productoModel.find({ codigoRepuesto: codigo }).exec();
  }

  async create(productoData: Partial<Producto>): Promise<Producto> {
    const nuevoProducto = new this.productoModel(productoData);
    return nuevoProducto.save();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.productoModel.deleteOne({ _id: id }).exec();
    return result.deletedCount > 0;
  }
}
