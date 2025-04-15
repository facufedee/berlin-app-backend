import { Injectable } from '@nestjs/common';
import { KitDeDistribucionRepository } from '../../infraestructure/repositories/kit-de-distribucion.repository';

@Injectable()
export class KitDeDistribucionService {
  constructor(
    private readonly kitRepository: KitDeDistribucionRepository,
  ) {}

  async obtenerPorCodigo(codigo_kit: string) {
    return this.kitRepository.buscarPorCodigoKit(codigo_kit);
  }
}
