import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../../core/interfaces/product.repository";
import { Product } from "../../core/entities/product.entity";

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  private products: Product[] = []; // Temporal, luego se conecta a DB

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.find((p) => p.id === id) || null;
  }

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }
}
