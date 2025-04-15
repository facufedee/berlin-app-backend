import { Controller, Get, Param } from '@nestjs/common';
import { KitDeDistribucionService } from '../../application/services/kit-de-distribucion-service';

@Controller('kit-de-distribucion')
export class KitDeDistribucionController {
  constructor(private readonly kitService: KitDeDistribucionService) {}

  @Get(':codigo_kit')
  async obtenerPorCodigo(@Param('codigo_kit') codigo_kit: string) {
    return this.kitService.obtenerPorCodigo(codigo_kit);
  }
}
