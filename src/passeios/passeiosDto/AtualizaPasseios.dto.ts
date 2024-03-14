import { IsOptional, MaxLength } from 'class-validator';

export class AtualizaPasseioDto {
  @IsOptional()
  @MaxLength(30, { message: 'Você atingiu o maxímo de caracteres, "30"' })
  nomePasseio: string;

  @IsOptional()
  @MaxLength(500, { message: 'Você atingiu o maxímo de caracteres, "500"' })
  datalhesPasseios: string;

  @IsOptional()
  horarios: string;

  @IsOptional()
  distancia: string;

  @IsOptional()
  tempoPasseio: string;

  @IsOptional()
  valor: string;

  //   formasDePagamentos: FormasDePagamento;
}
