import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { KitDeDistribucionService } from '../../application/services/kit-de-distribucion-service';
import { CrearKitDeDistribucionDto } from '../../core/dto/kit-de-distribucion.dto';

@Controller('productos/kits')
export class KitDeDistribucionController {
  constructor(private readonly service: KitDeDistribucionService) {}

  @Post()
  crear(@Body() dto: CrearKitDeDistribucionDto) {
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
  actualizar(@Param('id') id: string, @Body() dto: Partial<CrearKitDeDistribucionDto>) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
