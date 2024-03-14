import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { senhaValidada } from '../validador/senha.validator';
import { emailValidado } from 'usuario/validador/email.validator';
import { cpfValidado } from 'usuario/validador/cpf.validator';
import { EnderecoDto } from './EnderecoCliente.dto';
import { ContaPessoalDto, ContaProfissionalDto } from './TipoDeConta.dto';

export class UsuarioDto {
  @ApiProperty({ example: 'Marcos santos oliveira' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio!' })
  @MaxLength(30, { message: 'O campo nome deve ter no máximo 30 caracteres' })
  nome: string;

  @ApiProperty({ example: '(75)9990-08877 OU 75999008877' })
  @IsNotEmpty({ message: 'O campo telefone não pode ser vazio!' })
  @MaxLength(14, {
    message: 'O campo telefone deve ter no máximo 14 caracteres',
  })
  telefone: string;

  @ApiProperty({ example: 'seuemail@email.com' })
  @IsNotEmpty({ message: 'O campo email não pode ser vazio!' })
  @IsEmail()
  @emailValidado({ message: 'Esse email já foi cadastrado' })
  email: string;

  @ApiProperty({ example: 'buGGy123@' })
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio!' })
  @MinLength(7, { message: 'O campo senha deve ter no mínimo 7 caracteres' })
  @senhaValidada({
    message:
      'A sua senha deve ter no mínimo uma letra maiúscula, uma letra minúscula, um número e um caracter especial: @,!,#,$,%...',
  })
  senha: string;

  @ApiProperty({ example: '77788899922' })
  @IsNotEmpty({ message: 'O campo CPF não pode ser vazio!' })
  @MaxLength(11, { message: 'O campo CPF deve ter no máximo 11 números' })
  @MinLength(11, { message: 'O campo CPF deve ter no mínimo 11 números' })
  @cpfValidado({ message: 'CPF já cadastrado' })
  cpf: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo endereço não pode ser vazio!' })
  @ValidateNested()
  @Type(() => EnderecoDto)
  endereco: EnderecoDto;

  @ApiProperty({
    example: {
      rg: '12345678',
      dataDeNascimento: '01/01/2001',
    },
  })
  @IsNotEmpty({ message: 'O campo tipo de conta não pode ser vazio!' })
  @ValidateNested()
  @Type(() => ContaPessoalDto || ContaProfissionalDto)
  tipoDeConta: ContaProfissionalDto | ContaPessoalDto;
}
