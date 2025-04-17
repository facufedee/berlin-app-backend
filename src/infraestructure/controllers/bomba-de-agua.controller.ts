import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { BombaDeAguaService } from '../../application/services/bomba-de-agua.service';
import { CrearBombaDeAguaDto } from '../../core/dto/bomba-de-agua.dto';

// Este controlador maneja todas las rutas relacionadas a bombas
@Controller('productos/bombas')
export class BombaDeAguaController {
  constructor(private readonly service: BombaDeAguaService) {}

  @Post()
  crear(@Body() dto: CrearBombaDeAguaDto) {
    return this.service.crear(dto);
  }

  @Get()
  obtenerTodos() {
    return this.service.obtenerTodos();
  }

  @Get(':id')
  obtenerPorId(@Param('id') id: string) {
    return this.service.obtenerPorId(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() dto: Partial<CrearBombaDeAguaDto>) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
