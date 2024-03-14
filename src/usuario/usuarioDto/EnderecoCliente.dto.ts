import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class EnderecoDto {
  @ApiProperty({ example: 'Bahia' })
  @IsNotEmpty({ message: 'O campo Estado não pode ser vazio!' })
  @MaxLength(35, { message: 'O campo Estado deve ter no máximo 53 caracteres' })
  estado: string;

  @ApiProperty({ example: 'Alagoinhas' })
  @IsNotEmpty({ message: 'O campo Cidade não pode ser vazio!' })
  @MaxLength(35, { message: 'O campo Cidade deve ter no máximo 53 caracteres' })
  cidade: string;

  @ApiProperty({ example: 'Mangalô' })
  @IsNotEmpty({ message: 'O campo Bairro não pode ser vazio!' })
  @MaxLength(35, { message: 'O campo Bairro deve ter no máximo 53 caracteres' })
  bairro: string;

  @ApiProperty({ example: 'juraci' })
  @IsNotEmpty({ message: 'O campo Rua não pode ser vazio!' })
  @MaxLength(50, { message: 'O campo Rua deve ter no máximo 15 caracteres' })
  rua: string;

  @ApiProperty({ example: '555' })
  @IsNotEmpty({ message: 'O campo número da casa não pode ser vazio!' })
  numeroCasa: string;

  @ApiProperty({ example: '44002-444' })
  @IsNotEmpty({ message: 'O campo cep não pode ser vazio!' })
  @MaxLength(9, { message: 'O campo CEP deve ter no máximo 9 caracteres' })
  cep: string;
}
