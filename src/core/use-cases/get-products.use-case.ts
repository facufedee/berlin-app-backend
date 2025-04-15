import { Producto } from "../entities/product.entity";
import { ProductRepository } from "../interfaces/product.repository";

export class GetProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Producto[]> {
    return this.productRepository.findAll();
  }
}
