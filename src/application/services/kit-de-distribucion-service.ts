import { Injectable } from '@nestjs/common';
import { KitDeDistribucionRepository } from '../../infraestructure/repositories/kit-de-distribucion.repository';
import { CrearKitDeDistribucionDto } from '../../core/dto/kit-de-distribucion.dto';

@Injectable()
export class KitDeDistribucionService {
  constructor(private readonly repo: KitDeDistribucionRepository) {}

  crear(data: CrearKitDeDistribucionDto) {
    return this.repo.crear(data);
  }

  obtenerTodos() {
    return this.repo.obtenerTodos();
  }

  obtenerPorId(id: string) {
    return this.repo.obtenerPorId(id);
  }

  actualizar(id: string, data: Partial<CrearKitDeDistribucionDto>) {
    return this.repo.actualizar(id, data);
  }

  eliminar(id: string) {
    return this.repo.eliminar(id);
  }
}
