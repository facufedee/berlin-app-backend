import { Producto } from "../entities/product.entity";

export interface ProductRepository {
  findAll(): Promise<Producto[]>;
  findById(id: string): Promise<Producto | null>;
  create(product: Producto): Promise<Producto>;
}
