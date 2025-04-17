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

  //aca buscamos el kit de distribucion por el codigo del kit
  //por ejemplo: /autos/kit-de-distribucion/1234567890
  @Get('kit-de-distribucion/:codigo_kit')
  async buscarPorCodigoKit(@Param('codigo_kit') codigo_kit: string) {
    return this.autoService.buscarPorCodigoKit(codigo_kit);
  }

  @Get('homocinetica/:codigo_homo')
  async buscarPorCodigoHomo(@Param('codigo_homo') codigo_homo: string) {
    return this.autoService.buscarPorCodigoHomo(codigo_homo);
  }

  @Get('bomba-de-agua/:codigo_bomba')
  async buscarPorCodigoBombas(@Param('codigo_bomba') codigo_bomba: string){
    return this.autoService.buscarPorCodigoBomba(codigo_bomba);
  }


  @Get('pastilla-de-freno/:codigo_pastilla')
  async buscarPorCodigoPastilla(@Param('codigo_pastilla') codigo_pastilla: string) {
    return this.autoService.buscarPorCodigoPastilla(codigo_pastilla);
  }
}
