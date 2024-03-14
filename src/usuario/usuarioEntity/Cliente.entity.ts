import {
  ContaPessoalDto,
  ContaProfissionalDto,
} from '../../../src/usuario/usuarioDto/TipoDeConta.dto';
import { EnderecoEntity } from '../../../src/usuario/usuarioEntity/EnderecoCliente.entity';

export class UsuarioEntity {
  nome: string;
  telefone: string;
  email: string;
  senha: string;
  cpf: string;
  endereco: EnderecoEntity;
  tipoDeConta: ContaPessoalDto | ContaProfissionalDto;
  dataUltimoAcesso: Date;
  dataExlusaoConta: Date | null;
  usuarioAutorizado: boolean;
  usuarioAtivo: boolean;
  usuarioMotorista: boolean;
}
