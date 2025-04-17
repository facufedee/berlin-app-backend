import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Esto define una colección de Mongo llamada "kit-de-distribucions"
@Schema()
export class KitDeDistribucion extends Document {
  // Código único del kit
  @Prop({ required: true }) codigoRepuesto: string;

  // Nombre completo visible del kit
  @Prop({ required: true }) nombre: string;

  // Marca del kit (GATES, SKF, etc.)
  @Prop({ required: true }) marca: string;

  // Tipo de producto (puede ser "kit-de-distribucion")
  @Prop({ required: true }) tipoProducto: string;

  // Precios
  @Prop({ required: true }) precioCosto: number;
  @Prop({ required: true }) precioMayorista: number;
  @Prop({ required: true }) precioPublico: number;

  // Código de repuesto adicional (como bomba de agua)
  @Prop({ required: true }) repuestoAdicional: string;

  // Lista de equivalencias de otras marcas
  @Prop([{ marca: String, codigo: String }])
  equivalencias: { marca: string; codigo: string }[];

  // Lista de hasta 4 imágenes (URLs)
  @Prop({ type: [String], default: [] })
  imagenes: string[];

  // Stock como string (puede ser número o texto tipo "Sin stock")
  @Prop({ required: true }) stock: string;
}

// Generamos el esquema de Mongoose a partir de esta clase
export const KitDeDistribucionSchema = SchemaFactory.createForClass(KitDeDistribucion);
