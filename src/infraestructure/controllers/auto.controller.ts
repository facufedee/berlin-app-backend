import { Controller, Get, Param, Query } from '@nestjs/common';
import { AutoService } from '../../application/services/auto.service';

@Controller('autos')
export class AutoController {
  constructor(private readonly autoService: AutoService) {}

  @Get()
  async obtenerAutos() {
    return this.autoService.obtenerAutos();
  }

  @Get('modelos')
  async obtenerModelos(@Query('marca') marca: string) {
    return this.autoService.obtenerModelosPorMarca(marca);
  }

  @Get('buscar')
  async buscarPorMarcaModeloMotor(
    @Query('marca') marca: string,
    @Query('modelo') modelo: string,
    @Query('motor') motor: string
  ) {
    return this.autoService.buscarPorMarcaModeloMotor(marca, modelo, motor);
  }

  @Get('kit/:codigo_kit')
  async buscarPorCodigoKit(@Param('codigo_kit') codigo_kit: string) {
    return this.autoService.buscarPorCodigoKit(codigo_kit);
  }
}
