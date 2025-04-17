import { IsString, IsNumber, IsArray, IsUrl, ArrayMaxSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// DTO para los objetos dentro de "equivalencias"
class EquivalenciaDto {
  @IsString() marca: string;
  @IsString() codigo: string;
}

// DTO principal para crear o editar un kit
export class CrearKitDeDistribucionDto {
  @IsString() codigoRepuesto: string;
  @IsString() nombre: string;
  @IsString() marca: string;
  @IsString() tipoProducto: string;

  @IsNumber() precioCosto: number;
  @IsNumber() precioMayorista: number;
  @IsNumber() precioPublico: number;

  @IsString() repuestoAdicional: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EquivalenciaDto)
  equivalencias: EquivalenciaDto[];

  // Hasta 4 imágenes (URLs válidas)
  @IsArray()
  @ArrayMaxSize(4)
  @IsUrl({}, { each: true })
  imagenes: string[];

  @IsString() stock: string;
}
