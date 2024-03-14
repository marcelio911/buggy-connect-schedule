import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { DadosCnh } from './DadosCnh.dto';
import { TipoDeBuggy } from './TipoDeCarro.dto';
import { MetodoRecebimento } from './MetodoRecebimento.dto';

export class ContaPessoalDto {
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  @MaxLength(8, { message: 'O campo Rg deve ter no máximo 8 caracteres' })
  @MinLength(8, { message: 'O campo Rg deve ter no mínimo 8 caracteres' })
  rg: string;

  @IsOptional()
  sexo: string;

  @IsNotEmpty({ message: 'O campo data de nascimento não pode ser vazio!' })
  dataDeNascimento: string;

  @IsOptional({ message: 'O campo permitido não pode ser vazio!' })
  permitido: boolean;
}

export class ContaProfissionalDto {
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  rg: number;

  @IsOptional()
  sexo: string;

  @IsNotEmpty({ message: 'O campo CNH não pode ser vazio!' })
  @ValidateNested()
  @Type(() => DadosCnh)
  cnh: DadosCnh;

  @IsNotEmpty({ message: 'O campo tipo de buggy não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @Type(() => TipoDeBuggy)
  tipoDeCarro: TipoDeBuggy[];

  @IsNotEmpty({ message: 'O campo método do recebimento não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @Type(() => MetodoRecebimento)
  metodoRecebimento: MetodoRecebimento[];

  @IsOptional({ message: 'O campo permitido não pode ser vazio!' })
  permitido: boolean;
}
