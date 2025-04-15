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

  async findById(id: string): Promise<Producto | null> {
    return this.productoModel.findById(id).exec();
  }

  async findByCodigoKit(codigoKit: string): Promise<Producto[]> {
    return this.productoModel.find({ codigoRepuesto: codigoKit }).exec();
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
