import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductRepositoryImpl } from '../repositories/product.repository.impl';
import { CreateProductDto } from '../../core/dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  @Get()
  async getAll() {
    return this.productRepository.findAll();
  }

  @Post()
  async create(@Body() productData: CreateProductDto) {
    return this.productRepository.create(productData);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.productRepository.findById(id);
  }
}
