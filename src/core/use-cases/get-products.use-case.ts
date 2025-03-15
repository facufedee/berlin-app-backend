import { Product } from "../entities/product.entity";
import { ProductRepository } from "../interfaces/product.repository";

export class GetProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
