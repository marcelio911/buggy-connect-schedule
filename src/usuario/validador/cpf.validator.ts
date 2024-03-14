import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsuarioService } from 'usuario/usuario.service';

Injectable();
@ValidatorConstraint({ async: true })
export class ValidaCpf implements ValidatorConstraintInterface {
  constructor(private usuarioService: UsuarioService) {}

  async validate(value: any): Promise<boolean> {
    const validaCpf =
      await this.usuarioService.filtraUsuarioCadastradoCpf(value);
    return !validaCpf;
  }
}

export const cpfValidado = (opcao?: ValidationOptions) => {
  return (obejto: object, propriedade: string) => {
    registerDecorator({
      target: obejto.constructor,
      propertyName: propriedade,
      options: opcao,
      constraints: [],
      validator: ValidaCpf,
    });
  };
};
