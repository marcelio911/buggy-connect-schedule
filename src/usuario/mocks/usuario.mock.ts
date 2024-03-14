import { UsuarioService } from '../../../src/usuario/usuario.service';

export const usuarioMock = {
  id: '1',
  nome: 'cacau',
  telefone: '444484848482',
  email: 'e3633523@email.com',
  senha: 'VOLTSJV!1233e4',
  cpf: '98175144651414',
  endereco: {
    estado: 'bahia',
    cidade: 'alagoinhas',
    bairro: 'catu',
    rua: 'cacau',
    numeroCasa: '190',
    cep: '151515151',
    id: '1',
  },
  tipoDeConta: {
    rg: '15151515151',
    dataDeNascimento: '01022002',
  },
};

export const usuarioServiceMock = {
  provide: UsuarioService,
  useValue: {
    pegaUsuarios: jest.fn().mockResolvedValue([usuarioMock]),
    pegaUsuarioPeloId: jest.fn().mockResolvedValue(usuarioMock),
    criaUsuario: jest.fn().mockResolvedValue(usuarioMock),
    atualizaUsuario: jest.fn().mockResolvedValue(usuarioMock),
    deletaUsuario: jest.fn().mockResolvedValue(true),
  },
};
