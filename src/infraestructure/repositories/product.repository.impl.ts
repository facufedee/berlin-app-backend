import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../../core/entities/product.entity';
import { ProductRepository } from '../../core/interfaces/product.repository';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findById(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  /**
   * 🔥 Filtra productos por Marca, Modelo y Versión
   */
  async findByFilters(marca: string, modelo: string, version: string): Promise<Product[]> {
    return this.productModel
      .find({
        aplicaciones: { $elemMatch: { marca, modelo, version } },
      })
      .exec();
  }
}
