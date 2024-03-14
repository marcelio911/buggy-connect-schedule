import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Schema({ timestamps: true, _id: true })
export class Endereco extends Model {
  @Prop()
  estado: string;

  @Prop()
  cidade: string;

  @Prop()
  bairro: string;

  @Prop()
  rua: string;

  @Prop()
  numeroCasa: string;

  @Prop()
  cep: string;
}

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);
