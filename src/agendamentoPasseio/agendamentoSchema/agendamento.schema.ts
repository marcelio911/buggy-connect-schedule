import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Agendamento {
  @Prop()
  PasseioAgendado: string;

  @Prop()
  HorarioInícioPasseio: string;

  @Prop()
  HorarioTerminoPasseio: string;

  @Prop()
  QuantidadePessoas: number;

  @Prop()
  ValorTotalPasseio: string;

  @Prop()
  ProfissionalPasseio: string;

  @Prop()
  titularDoAgendamento: string;
}

export const agendamentoSchema = SchemaFactory.createForClass(Agendamento);
