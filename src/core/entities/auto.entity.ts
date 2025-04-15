import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'autos' }) // Especificamos la colección en MongoDB
export class Auto extends Document {
  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  modelo: string;

  @Prop({ required: false, default: '' }) 
  version: string;

  @Prop({ required: true })
  motor: string;

  @Prop({ required: true })
  combustible: string;

  @Prop({ required: true })
  año: string;

  @Prop({ required: true })
  codigo_kit: string;

  @Prop({ required: true })
  codigo_bomba: string;
}

export const AutoSchema = SchemaFactory.createForClass(Auto);
