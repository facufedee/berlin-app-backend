import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from '../../infraestructure/controllers/product.controller';
import { ProductRepositoryImpl } from '../../infraestructure/repositories/product.repository.impl';
import { Product, ProductSchema } from '../../infraestructure/database/schemas/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ProductController],
  providers: [ProductRepositoryImpl],
  exports: [ProductRepositoryImpl],
})
export class ProductsModule {}
