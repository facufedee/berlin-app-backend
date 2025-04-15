import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema({ timestamps: true }) // 🔹 Agrega createdAt y updatedAt automáticamente
export class Producto {
  @Prop({ required: true })
  codigoRepuesto: string;

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  tipoRepuesto: string;

  @Prop({ required: true })
  precio: number;

  @Prop()
  repuestoAdicional?: string;

  @Prop({ type: [String] }) // 🔹 Almacena los autos compatibles como un array
  aplicaciones?: string[];
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
