import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Usuario } from './usuarioSchema/usuario.schema';
import { EnderecoService } from './endereco.service';
import { UsuarioEntity } from './usuarioEntity/Cliente.entity';
import { UsuarioDto } from './usuarioDto/Cliente.dto';
import { Endereco } from './usuarioSchema/Endereco.schema';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name)
    private usuario: mongoose.Model<Usuario>,
    private enderecoService: EnderecoService,
  ) { }

  // cliente

  async criaUsuario(usuarioCriado: UsuarioEntity): Promise<Usuario> {
    const salvaUsuario: Usuario = await this.usuario.create(usuarioCriado);
    this.enderecoService.salvaEndereco(salvaUsuario.endereco);
    return salvaUsuario;
  }

  async pegaUsuarios(): Promise<Usuario[]> {
    try {
      const usuarios: Usuario[] = await this.usuario.find();
      return usuarios;
    } catch {
      return;
    }
  }

  /**
   * @deprecated Este método não será mais utilizado
   * @param dadoEnviado
   * @returns
   */
  async pegaUsuarioPorParametro(
    dadoEnviado: string,
  ): Promise<Usuario | object> {
    try {
      const usuarioEncontrado: Usuario[] = await this.encontraUsuario(
        'id',
        dadoEnviado,
      );

      if (usuarioEncontrado.length == 0) {
        throw new Error();
      }

      return usuarioEncontrado;
    } catch (erro) {
      return {
        message:
          'O usuario é encontrado por id, cpf e email, verifique se o dado que você inseriu está correto',
        erro: (erro.message = 'Usuário não encontrado'),
      };
    }
  }

  private async encontraUsuario(
    tipoConsulta: 'email' | 'cpf' | 'id',
    dadoEnviado: string,
  ): Promise<Usuario[]> {
    try {
      switch (tipoConsulta) {
        case 'email':
          return await this.usuario.find({ email: dadoEnviado });
        case 'cpf':
          return await this.usuario.find({ cpf: dadoEnviado });
        case 'id':
          return await this.usuario.find({ _id: dadoEnviado });
        default:
          throw new Error('Tipo de consulta inválido');
      }
      // if (this.regexEmail(dadoEnviado)) {
      //   return await this.usuario.findOne({ email: dadoEnviado });
      // } else if (this.regexCpf(dadoEnviado)) {
      //   return await this.usuario.findOne({ cpf: dadoEnviado });
      // } else {
      //   return await this.usuario.findOne({ _id: dadoEnviado });
      // }
    } catch {
      return;
    }
  }

  async atualizaUsuarioPorId(
    id: string,
    dadosAtualizados: UsuarioDto,
  ): Promise<Usuario | string> {
    try {
      const buscaUsuario: Usuario[0] = await this.encontraUsuario('id', id);

      if (buscaUsuario.length == 0) {
        throw new Error();
      }

      await this.usuario.findByIdAndUpdate(buscaUsuario._id, dadosAtualizados);

      const usuarioAtualizado = await this.usuario.findOne(buscaUsuario._id);

      return usuarioAtualizado;
    } catch (erro) {
      return (erro.message =
        'Usuario não encontrado, verifique se o dado que inseriu é um id, cpf ou email');
    }
  }
  // TODO se realmente for necessário usar o método para atualizar endereço
  async atualizaEnderecoUsuario(
    idUsuario: string,
    dados: Usuario,
  ): Promise<Usuario> {
    this.enderecoService.atualizaEndereco(dados.endereco._id, dados.endereco);

    const recebeEndereco: Usuario = await this.usuario.findOne({
      'endereco._id': dados.endereco._id,
    });

    const encontraEnderecoAtualizado: Endereco = dados.endereco;

    const atualizaEnderecoUsuario: Usuario =
      await this.usuario.findByIdAndUpdate(recebeEndereco._id, {
        endereco: encontraEnderecoAtualizado,
      });

    return atualizaEnderecoUsuario;
  }

  async deletaUsuario(id: string): Promise<object> {
    try {
      const usuario: Usuario[0] = await this.encontraUsuario('id', id);
      const enderecoUsuario: Endereco = usuario.endereco;

      await this.enderecoService.apagaEndereco(enderecoUsuario); //TODO revisar se é realmente necessario ...

      //TODO mudar para remover o usuario do banco de dados tipo VOID
      await this.usuario.findByIdAndDelete(usuario._id);

      return {
        message: 'Usuário removido com sucesso!',
        usuarioRemovido: usuario,
      };
    } catch {
      return { message: 'Não foi possível excluir o usuário' };
    }
  }

  // Validation

  async filtraUsuarioCadastradoEmail(email: string): Promise<boolean> {
    const filtraUsuario: Usuario[] = await this.usuario.find({ email: email });
    const boolean: boolean = true;

    if (filtraUsuario.length > 0) {
      return boolean;
    } else {
      return !boolean;
    }
  }

  async filtraUsuarioCadastradoCpf(cpf: string): Promise<boolean> {
    const filtraUsuario: Usuario[] = await this.usuario.find({ cpf: cpf });
    const boolean: boolean = true;

    if (filtraUsuario.length > 0) {
      return boolean;
    } else {
      return !boolean;
    }
  }

  // Regex

  private regexEmail(dado: string): boolean {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail.test(dado);
  }

  private regexCpf(dado: string): boolean {
    const regexCpf = /\d{11}/;

    return regexCpf.test(dado);
  }

  async regexSenha(possivelSenha: string): Promise<boolean> {
    const regexSenha =
      /^(?=.*[a-zç])(?=.*[A-ZÇ])(?=.*\d)(?=.*[!@#$%^&*()-+])[A-Za-zçÇ\d!@#$%^&*()-+]{8,}$/;

    if (regexSenha.test(possivelSenha)) {
      return true;
    } else {
      return false;
    }
  }
}
