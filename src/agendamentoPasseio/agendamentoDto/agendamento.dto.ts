import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AgendamentoPasseioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  PasseioAgendado: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  HorarioInícioPasseio: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  HorarioTerminoPasseio: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  QuantidadePessoas: number;
  @ApiProperty()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  ValorTotalPasseio: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  ProfissionalPasseio: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  titularDoAgendamento: string;
}
