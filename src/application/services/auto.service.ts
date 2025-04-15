import { Injectable } from '@nestjs/common';
import { AutoRepository } from '../../infraestructure/repositories/auto.repository';

@Injectable()
export class AutoService {
  constructor(private readonly autoRepository: AutoRepository) {}

  async buscarPorMarcaModeloMotor(marca: string, modelo: string, motor: string) {
    return this.autoRepository.buscarPorMarcaModeloMotor(marca, modelo, motor);
  }

  async buscarPorCodigoKit(codigo_kit: string) {
    return this.autoRepository.buscarPorCodigoKit(codigo_kit);
  }

  async obtenerAutos() {
    return this.autoRepository.obtenerAutos();
  }

  async obtenerModelosPorMarca(marca: string) {
    return this.autoRepository.obtenerModelosPorMarca(marca);
  }
}
