import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Passeios {
  @Prop()
  nomePasseio: string;
  
  @Prop()
  datalhesPasseios: string;

  @Prop()
  horarios: string;

  @Prop()
  distancia: string;

  @Prop()
  tempoPasseio: string;
  
  @Prop()
  valor: string;
}

export const passseiosSchema = SchemaFactory.createForClass(Passeios)
