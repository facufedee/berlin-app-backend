import { Controller, Get, Post, Param, Body, Delete, Query } from '@nestjs/common';
import { ProductoService } from '../../application/services/producto.service';
import { Producto } from '../../core/entities/product.entity';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  // Obtener todos los productos
  @Get()
  async obtenerTodos(): Promise<Producto[]> {
    return this.productoService.obtenerTodos();
  }

  @Get('auto/:id')
async buscarPorAuto(@Param('id') id: string) {
  return this.productoService.buscarPorAutoId(id);
}


  // Obtener producto por ID
  @Get(':id')
  async obtenerPorId(@Param('id') id: string): Promise<Producto> {
    return this.productoService.obtenerPorId(id);
  }

  // Buscar productos por código de kit
  @Get('codigo-kit/:codigoKit')
  async obtenerPorCodigoKit(@Param('codigoKit') codigoKit: string): Promise<Producto[]> {
    return this.productoService.obtenerPorCodigoKit(codigoKit);
  }

  // Crear un nuevo producto
  @Post()
  async crearProducto(@Body() productoData: Partial<Producto>): Promise<Producto> {
    return this.productoService.crearProducto(productoData);
  }

  // Eliminar producto por ID
  @Delete(':id')
  async eliminarProducto(@Param('id') id: string): Promise<void> {
    return this.productoService.eliminarProducto(id);
  }
}
