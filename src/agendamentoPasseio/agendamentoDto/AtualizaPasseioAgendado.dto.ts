import { IsOptional } from 'class-validator';

export class AtualizaAgendamentoPasseioDto {
  @IsOptional()
  PasseioAgendado: string;
  @IsOptional()
  HorarioInícioPasseio: string;
  @IsOptional()
  HorarioTerminoPasseio: string;
  @IsOptional()
  QuantidadePessoas: number;
  @IsOptional()
  ValorTotalPasseio: string;
  @IsOptional()
  ProfissionalPasseio: string;
  @IsOptional()
  titularDoAgendamento: string;
}
