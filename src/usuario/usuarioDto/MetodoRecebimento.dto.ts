import { IsNotEmpty, MaxLength } from 'class-validator';

export class MetodoRecebimento {
  @IsNotEmpty({ message: 'O campo banco não pode ser vazio!' })
  banco: string;

  @IsNotEmpty({ message: 'O campo conta não pode ser vazio!' })
  @MaxLength(20, { message: 'O campo conta deve ter no máximo 20 caracteres' })
  conta: number;

  @IsNotEmpty({ message: 'O campo agência não pode ser vazio!' })
  @MaxLength(5, { message: 'O campo agência deve ter no máximo 5 caracteres' })
  agencia: number;
}
