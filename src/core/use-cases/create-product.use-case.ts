import { Producto } from "../entities/product.entity";
import { ProductRepository } from "../interfaces/product.repository";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(productData: Producto): Promise<Producto> {
    return this.productRepository.create(productData);
  }
}
