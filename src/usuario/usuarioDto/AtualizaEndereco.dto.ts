import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class AtualizaEnderecoDto {
  @MaxLength(35)
  @IsOptional()
  estado: string;

  @MaxLength(35)
  @IsOptional()
  cidade: string;

  @MaxLength(35)
  @IsOptional()
  bairro: string;

  @MaxLength(15)
  @IsOptional()
  rua: string;

  @IsNotEmpty({ message: 'O campo número da casa não pode ser vazio!' })
  @IsOptional()
  numeroCasa: string;

  @MaxLength(9, { message: 'O campo CEP deve ter no máximo 9 caracteres' })
  @IsOptional()
  cep: string;
}
