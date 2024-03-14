import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AtualizaEnderecoDto } from './AtualizaEndereco.dto';
import {
  AtualizaContaPessoal,
  AtualizaContaProfissional,
} from './AtualizaTipoDeConta.dto';

/**
 * @deprecated Por que ter um DTO para atualizar um cliente separado?
 */
export class AtualizaClienteDto {
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio!' })
  @MaxLength(30, { message: 'O campo nome deve ter no máximo 30 caracteres' })
  @IsOptional()
  nome: string;

  @IsNotEmpty({ message: 'O campo telefone não pode ser vazio!' })
  @MaxLength(12, { message: 'O campo telefone deve ter no máximo 12 números' })
  @IsOptional()
  telefone: string;

  @IsNotEmpty({ message: 'O campo email não pode ser vazio!' })
  @IsEmail()
  @IsOptional()
  email: string;

  @IsNotEmpty({ message: 'O campo senha não pode ser vazio!' })
  @MinLength(7, { message: 'O campo senha deve ter no mínimo 7 caracteres' })
  @IsStrongPassword(undefined, {
    message:
      'A sua senha deve ter no mínimo uma letra maiúscula, uma letra minúscula, um número e um caracter especial: @,!,#,$,%...',
  })
  @IsOptional()
  senha: string;

  @IsNotEmpty({ message: 'O campo CPF não pode ser vazio!' })
  @MaxLength(14, { message: 'O campo CPF deve ter no máximo 14 números' })
  @MinLength(14, { message: 'O campo CPF deve ter no mínimo 12 números' })
  @IsOptional()
  cpf: string;

  @IsNotEmpty({ message: 'O campo endereço não pode ser vazio!' })
  @ValidateNested()
  @Type(() => AtualizaEnderecoDto)
  @IsOptional()
  endereco: AtualizaEnderecoDto;

  @IsNotEmpty({ message: 'O campo tipo de conta não pode ser vazio!' })
  @ValidateNested()
  @Type(() => AtualizaContaPessoal || AtualizaContaProfissional)
  @IsOptional()
  tipoDeConta: AtualizaContaPessoal | AtualizaContaProfissional;
}
