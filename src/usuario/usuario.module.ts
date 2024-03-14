import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { validaSenha } from './validador/senha.validator';
import { Usuario, UsuarioSchema } from './usuarioSchema/usuario.schema';
import { Endereco, EnderecoSchema } from './usuarioSchema/Endereco.schema';
import { usuarioController } from './usuario.controller';
import { enderecoController } from './endereco.controller';
import { UsuarioService } from './usuario.service';
import { EnderecoService } from './endereco.service';
import { ValidaEmail } from './validador/email.validator';
import { ValidaCpf } from './validador/cpf.validator';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
    MongooseModule.forFeature([
      { name: Endereco.name, schema: EnderecoSchema },
    ]),
  ],
  controllers: [usuarioController, enderecoController],
  providers: [
    UsuarioService,
    EnderecoService,
    ValidaEmail,
    ValidaCpf,
    validaSenha,
  ],
})
export class usuarioModule {}
