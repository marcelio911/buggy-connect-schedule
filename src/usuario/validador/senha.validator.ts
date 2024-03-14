import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsuarioService } from '../usuario.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class validaSenha implements ValidatorConstraintInterface {
  constructor(private usuarioService: UsuarioService) {}

  async validate(value: string): Promise<boolean> {
    const possivelSenhaAprovada = await this.usuarioService.regexSenha(value);
    return possivelSenhaAprovada;
  }
}

export const senhaValidada = (opcoes?: ValidationOptions) => {
  return (obejto: object, propriedades: string) => {
    registerDecorator({
      target: obejto.constructor,
      propertyName: propriedades,
      options: opcoes,
      constraints: [],
      validator: validaSenha,
    });
  };
};
