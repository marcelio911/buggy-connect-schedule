import {
  IsArray,
  IsNotEmpty,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FotoCnh } from './FotoCnh.dto';

export class DadosCnh {
  @IsNotEmpty({ message: 'O campo número da CNH não pode ser vazio!' })
  @MaxLength(11, {
    message: 'O campo número da CNH deve ter no máximo 11 caracteres',
  })
  numeroCnh: number;

  @IsNotEmpty({ message: 'O campo vencimento da CNH não pode ser vazio!' })
  @MaxLength(15, {
    message: 'O campo vencimento da CNH deve ter no máximo 15 caracteres',
  })
  vencimentoCnh: number;

  @IsNotEmpty({ message: 'O campo confirmação com foto não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @Type(() => FotoCnh)
  confirmacaoComFoto: FotoCnh[];
}
