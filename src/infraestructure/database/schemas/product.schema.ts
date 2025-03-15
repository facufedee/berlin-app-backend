import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  codigoRepuesto: string;

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  tipoRepuesto: string;

  @Prop({ required: true })
  precio: number;

  @Prop()
  repuestoAdicional?: string;

  @Prop({ type: [String] })
  aplicaciones: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
