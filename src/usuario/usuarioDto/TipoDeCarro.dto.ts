import { IsNotEmpty, MaxLength } from 'class-validator';

export class TipoDeBuggy {
  @IsNotEmpty({ message: 'O campo marca do buggy não pode ser vazio!' })
  @MaxLength(50)
  marca: string;

  @IsNotEmpty({ message: 'O campo modelo do buggy não pode ser vazio!' })
  @MaxLength(50)
  modelo: string;

  @IsNotEmpty({ message: 'O campo placa não pode ser vazio!' })
  @MaxLength(7)
  placa: string;

  @IsNotEmpty({ message: 'O campo renavam não pode ser vazio!' })
  @MaxLength(11)
  renavam: string;

  @IsNotEmpty({ message: 'O campo ano do buggy não pode ser vazio!' })
  @MaxLength(20)
  anoBuggy: number;

  @IsNotEmpty({ message: 'O campo cor do buggy não pode ser vazio!' })
  @MaxLength(35)
  corBuggy: string;
}
