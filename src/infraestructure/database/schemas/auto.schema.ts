import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AutoDocument = HydratedDocument<Auto>;

@Schema({ timestamps: true })
export class Auto {
  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  modelo: string;

  @Prop()
  version: string;

  @Prop({ required: true })
  motor: string;

  @Prop({ required: true })
  combustible: string;

  @Prop({ required: true })
  año: string;
}

export const AutoSchema = SchemaFactory.createForClass(Auto);
