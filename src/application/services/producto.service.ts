import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductoRepository } from '../../infraestructure/repositories/product.repository';
import { Producto } from '../../core/entities/product.entity';
import { AutoRepository } from '../../infraestructure/repositories/auto.repository';
import { KitDeDistribucionRepository } from '../../infraestructure/repositories/kit-de-distribucion.repository';

@Injectable()
export class ProductoService {
      constructor(
        private readonly productoRepository: ProductoRepository,
        private readonly AutoRepository: AutoRepository,
        private readonly KitDeDistribucionRepository: KitDeDistribucionRepository,
      ) {}
  // Obtener todos los productos
  async obtenerTodos(): Promise<Producto[]> {
    return this.productoRepository.findAll();
  }

  async buscarPorAutoId(id: string) {
    // 🔎 1. Buscar el auto por ID en la colección `autos`
    const auto = await this.AutoRepository.buscarPorId(id);
    if (!auto) {
      throw new NotFoundException(`Auto no encontrado.`);
    }
  
    // 🔎 2. Obtener el código de kit asociado a ese auto
    const codigoKit = auto.codigo_kit;
  
    // 🔎 3. Buscar TODAS las aplicaciones (otros autos con el mismo kit)
    const aplicaciones = await this.AutoRepository.buscarPorCodigoKit(codigoKit);
  
    // 🔎 4. Obtener detalles del kit desde la colección `kit-de-distribucion`
    const kitDistribucion = await this.KitDeDistribucionRepository.buscarPorCodigoKit(codigoKit);
  
    // 🔎 5. Retornar los datos estructurados para el frontend
    return { 
      auto,
      codigoKit,
      aplicaciones,
      kitDistribucion
    };
  }
  
  // Buscar producto por ID
  async obtenerPorId(id: string): Promise<Producto> {
    const producto = await this.productoRepository.findById(id);
    if (!producto) throw new NotFoundException('Producto no encontrado');
    return producto;
  }

  // Buscar productos por código de kit
  async obtenerPorCodigoKit(codigoKit: string): Promise<Producto[]> {
    return this.productoRepository.findByCodigoKit(codigoKit);
  }

  // Crear un nuevo producto
  async crearProducto(productoData: Partial<Producto>): Promise<Producto> {
    return this.productoRepository.create(productoData);
  }

  // Eliminar un producto
  async eliminarProducto(id: string): Promise<void> {
    const eliminado = await this.productoRepository.delete(id);
    if (!eliminado) throw new NotFoundException('Producto no encontrado');
  }
}
