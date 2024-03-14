import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class PasseiosDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  @MaxLength(30, { message: 'Você atingiu o maxímo de caracteres, "30"' })
  nomePasseio: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  @MaxLength(500, { message: 'Você atingiu o maxímo de caracteres, "500"' })
  datalhesPasseios: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  horarios: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  distancia: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  tempoPasseio: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  valor: string;

  //   formasDePagamentos: FormasDePagamento;
}
