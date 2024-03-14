import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'usuario/usuario.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidaEmail implements ValidatorConstraintInterface {
  constructor(private usuarioService: UsuarioService) {}

  async validate(value: any): Promise<boolean> {
    const validandoUsuario =
      await this.usuarioService.filtraUsuarioCadastradoEmail(value);

    return !validandoUsuario;
  }
}

export const emailValidado = (opcoes?: ValidationOptions) => {
  return (obejto: object, propriedade: string) => {
    registerDecorator({
      target: obejto.constructor,
      propertyName: propriedade,
      options: opcoes,
      constraints: [],
      validator: ValidaEmail,
    });
  };
};
