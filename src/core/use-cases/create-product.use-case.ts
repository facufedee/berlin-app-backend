import { Product } from "../entities/product.entity";
import { ProductRepository } from "../interfaces/product.repository";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(productData: Product): Promise<Product> {
    return this.productRepository.create(productData);
  }
}
