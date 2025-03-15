import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  codigoRepuesto: string;

  @IsString()
  nombre: string;

  @IsString()
  marca: string;

  @IsString()
  tipoProducto: string;

  @IsNumber()
  precio: number;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  bombaDeAguaId?: string;

  @IsArray()
  aplicaciones: {
    marca: string;
    modelo: string;
    motor: string;
    combustible: string;
    año: string;
  }[];

  @IsArray()
  equivalencias: {
    marca: string;
    codigo: string;
  }[];
}
