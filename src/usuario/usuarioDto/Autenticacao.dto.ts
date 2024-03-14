import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { EnderecoDto } from '../../../src/usuario/usuarioDto/EnderecoCliente.dto';
import {
  ContaPessoalDto,
  ContaProfissionalDto,
} from '../../../src/usuario/usuarioDto/TipoDeConta.dto';
import { emailValidado } from '../../../src/usuario/validador/email.validator';
import { cpfValidado } from '../../../src/usuario/validador/cpf.validator';
import { senhaValidada } from '../validador/senha.validator';

export class AutenticacaoDto {
  @ApiProperty({ example: 'seuemail@email.com' })
  @IsNotEmpty({ message: 'O campo email não pode ser vazio!' })
  @IsEmail()
  @emailValidado({ message: 'Esse email já foi cadastrado' })
  login: 'email | cpf | telefone | nome de usuário';

  @ApiProperty({ example: 'buGGy123@' })
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio!' })
  @MinLength(7, { message: 'O campo senha deve ter no mínimo 7 caracteres' })
  @senhaValidada({
    message:
      'A sua senha deve ter no mínimo uma letra maiúscula, uma letra minúscula, um número e um caracter especial: @,!,#,$,%...',
  })
  senha: string;

  perfilDeUsuario: 1;
}

export class InformacaoBasicaClienteDto {
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

  @ApiProperty({ example: '' })
  @IsNotEmpty({ message: 'O campo email não pode ser vazio!' })
  @MaxLength(40, {
    message: 'O campo email deve ter no máximo 14 caracteres',
  })
  email: string;

  @ApiProperty({ example: '77788899922' })
  @IsNotEmpty({ message: 'O campo CPF não pode ser vazio!' })
  @MaxLength(11, { message: 'O campo CPF deve ter no máximo 11 números' })
  @MinLength(11, { message: 'O campo CPF deve ter no mínimo 11 números' })
  @cpfValidado({ message: 'CPF já cadastrado' })
  cpf: string;
}

export class AparelhosAcessados {
  login: AutenticacaoDto['login']; // email | cpf | telefone | nome de usuário

  @ApiProperty({ example: 'Android' })
  @IsNotEmpty({ message: 'O campo sistema operacional não pode ser vazio!' })
  sistemaOperacional: string;

  @ApiProperty({ example: 'Google Chrome' })
  @IsNotEmpty({ message: 'O campo navegador não pode ser vazio!' })
  navegador: string;

  @ApiProperty({
    example: '1920x1080',
  })
  latitude: string;

  @ApiProperty({
    example: '1920x1080',
  })
  longitude: string;

  ID_aparelho: string;

  dataUltimoAcesso: string;
}

export class PassageirosDto extends ContaPessoalDto {
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
}

export class MotoristasDto extends ContaProfissionalDto {
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
}
