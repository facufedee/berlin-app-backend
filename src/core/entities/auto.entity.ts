import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({ collection: 'autos' })
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

  // ✅ Piezas disponibles
  @Prop({ required: false }) 
  codigo_kit: string;

  @Prop({ required: false }) 
  codigo_bomba: string;

  @Prop({ required: false }) 
  codigo_homo: string;

  @Prop({ required: false }) 
  codigo_pastilla: string;
}


export const AutoSchema = SchemaFactory.createForClass(Auto);
