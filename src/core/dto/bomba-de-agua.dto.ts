import { IsString, IsNumber, IsArray, IsOptional, IsUrl } from 'class-validator';

// Objeto que representa cada aplicación (auto compatible)
class AplicacionDto {
  @IsString() modelo: string;
  @IsString() motor: string;
  @IsString() año: string;
}

// DTO principal que define cómo deben venir los datos al crear/editar
export class CrearBombaDeAguaDto {
  @IsString() codigoRepuesto: string;
  @IsString() nombre: string;
  @IsString() marca: string;
  @IsString() tipoProducto: string;

  @IsNumber() precioCosto: number;
  @IsNumber() precioMayorista: number;
  @IsNumber() precioPublico: number;

  @IsString() stock: string;

  @IsOptional()
  @IsString() codigoVMG: string;

  @IsOptional()
  @IsString() codigoDOLZ: string;

  @IsOptional()
  @IsArray() codigosOEM: string[];

  @IsOptional()
  @IsUrl() imagen: string;

  @IsOptional()
  @IsArray()
  aplicaciones: AplicacionDto[];
}
