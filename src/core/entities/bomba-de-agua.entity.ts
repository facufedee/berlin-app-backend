import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Esta clase representa la estructura de la colección "bombas-de-agua"
@Schema()
export class BombaDeAgua extends Document {
  @Prop({ required: true }) codigoRepuesto: string;  // Código principal (ej. E-202152)
  @Prop({ required: true }) nombre: string;          // Ejemplo: "Bomba Ford E-202152"
  @Prop({ required: true }) marca: string;           // Marca de la bomba

  @Prop({ required: true }) tipoProducto: string;    // tipoProducto: "bomba-de-agua"

  @Prop({ required: true }) precioCosto: number;
  @Prop({ required: true }) precioMayorista: number;
  @Prop({ required: true }) precioPublico: number;

  @Prop({ required: true }) stock: string;           // Puede ser "10" o "sin stock"

  @Prop() codigoVMG: string;
  @Prop() codigoDOLZ: string;

  // Puede haber uno o más códigos OEM de fabricante
  @Prop([String])
  codigosOEM: string[];

  // URL de imagen de la bomba
  @Prop() imagen: string;

  // Aplicaciones: autos compatibles
  @Prop([
    {
      modelo: String,
      motor: String,
      año: String
    }
  ])
  aplicaciones: { modelo: string; motor: string; año: string }[];
}

export const BombaDeAguaSchema = SchemaFactory.createForClass(BombaDeAgua);
