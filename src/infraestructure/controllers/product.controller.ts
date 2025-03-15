import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { GetProductsUseCase } from "../../core/use-cases/get-products.use-case";
import { CreateProductUseCase } from "../../core/use-cases/create-product.use-case";
import { ProductRepositoryImpl } from "../repositories/product.repository.impl";
import { Product } from "../../core/entities/product.entity";

@Controller("products")
export class ProductController {
  private getProductsUseCase: GetProductsUseCase;
  private createProductUseCase: CreateProductUseCase;

  constructor(private readonly productRepository: ProductRepositoryImpl) {
    this.getProductsUseCase = new GetProductsUseCase(this.productRepository);
    this.createProductUseCase = new CreateProductUseCase(this.productRepository);
  }

  @Get()
  async getAll() {
    return this.getProductsUseCase.execute();
  }

  @Post()
  async create(@Body() productData: Product) {
    return this.createProductUseCase.execute(productData);
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    return this.getProductsUseCase.execute().then(products => 
      products.find(product => product.id === id)
    );
  }
}
