import { Injectable } from '@nestjs/common';
import { BombaDeAguaRepository } from '../../infraestructure/repositories/bomba-de-agua.repository';
import { CrearBombaDeAguaDto } from '../../core/dto/bomba-de-agua.dto';

// Esta clase tiene la lógica de negocio, usa el repo para acceder a la base
@Injectable()
export class BombaDeAguaService {
  constructor(private readonly repo: BombaDeAguaRepository) {}

  crear(data: CrearBombaDeAguaDto) {
    return this.repo.crear(data);
  }

  obtenerTodos() {
    return this.repo.obtenerTodos();
  }

  obtenerPorId(id: string) {
    return this.repo.obtenerPorId(id);
  }

  actualizar(id: string, data: Partial<CrearBombaDeAguaDto>) {
    return this.repo.actualizar(id, data);
  }

  eliminar(id: string) {
    return this.repo.eliminar(id);
  }
}
