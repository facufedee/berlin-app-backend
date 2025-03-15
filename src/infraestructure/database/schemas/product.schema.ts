import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  codigoRepuesto: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  tipoProducto: string;

  @Prop({ required: true })
  precio: number;

  @Prop()
  imagen?: string;

  @Prop()
  descripcion?: string;

  @Prop({ type: String, default: null }) 
  bombaDeAguaId?: string;

  @Prop({ type: [{ marca: String, modelo: String, motor: String, combustible: String, año: String }] })
  aplicaciones: { 
    marca: string;
    modelo: string;
    motor: string;
    combustible: string;
    año: string;
  }[];

  @Prop({ type: [{ marca: String, codigo: String }] })
  equivalencias: { 
    marca: string;
    codigo: string;
  }[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
