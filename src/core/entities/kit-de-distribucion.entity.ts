import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'kit-de-distribucion' }) // Asegura que coincide con la colección de MongoDB
export class KitDeDistribucion extends Document {
  @Prop({ required: true, unique: true })
  codigo_kit: string;

  @Prop({ required: true })
  precio_costo: number;

  @Prop({ required: true })
  precio_may: number;

  @Prop({ required: true })
  precio_min: number;
}

export const KitDeDistribucionSchema = SchemaFactory.createForClass(KitDeDistribucion);
