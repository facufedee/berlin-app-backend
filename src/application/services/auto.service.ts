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

  async buscarPorCodigoPastilla(codigo_pastilla: string) {
    return this.autoRepository.buscarPorCodigoPastilla(codigo_pastilla);
  }

  async buscarPorCodigoHomo(codigo_homo: string) {
    return this.autoRepository.buscarPorCodigoHomo(codigo_homo);
  }

  async buscarPorCodigoBomba(codigo_bomba: string){
    return this.autoRepository.buscarPorCodigoBomba(codigo_bomba);
  }

  async obtenerAutos() {
    return this.autoRepository.obtenerAutos();
  }

  async obtenerModelosPorMarca(marca: string) {
    return this.autoRepository.obtenerModelosPorMarca(marca);
  }
}
