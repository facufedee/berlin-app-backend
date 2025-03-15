import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductRepositoryImpl } from '../repositories/product.repository.impl';
import { Product } from '../database/schemas/product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  @Get()
  async getAll() {
    return this.productRepository.findAll();
  }

  @Post()
  async create(@Body() productData: Partial<Product>) {
    return this.productRepository.create(productData);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.productRepository.findById(id);
  }
}
