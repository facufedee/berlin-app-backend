export class Product {
    constructor(
      public readonly id: string,
      public readonly created: Date,
      public readonly codigoRepuesto: string,
      public readonly marca: string,
      public readonly tipoRepuesto: string,
      public readonly precio: number,
      public readonly repuestoAdicional?: string,
      public readonly aplicaciones?: string[], // Autos compatibles
    ) {}
  }
  