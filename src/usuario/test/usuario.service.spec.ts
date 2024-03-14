import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from '../../../src/usuario/usuario.service';
import { usuarioServiceMock } from '../../../src/usuario/mocks/usuario.mock';
import { usuarioMockService } from '../../../src/usuario/mocks/usuario.service.mock';
import { AtualizaClienteDto } from '../../../src/usuario/usuarioDto/AtualizaDadosUsuario.tdo';

describe('Teste usuário service', () => {
  let serviceUsuario: UsuarioService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [usuarioServiceMock],
    }).compile();

    serviceUsuario = module.get<UsuarioService>(UsuarioService);
  });

  it('Deve retornar todos os usuários', async () => {
    const pegaTodosOsUsuarios = await serviceUsuario.pegaUsuarios();
    expect(pegaTodosOsUsuarios).toEqual([usuarioMockService]);
  });

  it('Deve retornar usuário buscado por parametro', async () => {
    const usuarioMock = {
      ...usuarioMockService,
    };

    serviceUsuario.pegaUsuarioPorParametro = jest
      .fn()
      .mockReturnValueOnce(usuarioMock);

    const resultado = await serviceUsuario.pegaUsuarioPorParametro(
      usuarioMock.id,
    );

    expect(resultado).toEqual(usuarioMock);
  });

  it('Deve retornar a atualização do usuário', async () => {
    let atualizaUsuario: AtualizaClienteDto;
    const atualizaUsuarios = { ...atualizaUsuario, nome: 'acerola' };
    const resultadoAtualizacao = await serviceUsuario.atualizaUsuario(
      usuarioMockService.id,
      atualizaUsuarios,
    );
    expect(resultadoAtualizacao).toEqual(usuarioMockService);
  });

  it('Deve criar um usuário', async () => {
    const usuario = {
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
      },
      tipoDeConta: {
        rg: '15151515151',
        dataDeNascimento: '01022002',
      },
      dataUltimoAcesso: new Date(),
      dataExlusaoConta: null,
      usuarioAutorizado: true,
      usuarioAtivo: true,
      usuarioMotorista: false,
    };
    const id = '21';

    serviceUsuario.criaUsuario = jest
      .fn()
      .mockReturnValueOnce({ id, ...usuario });

    const criaUsuario = await serviceUsuario.criaUsuario(usuario);
    expect(criaUsuario.id).toEqual(id);
  });

  it('Deve deletar um usuário', async () => {
    const deletaUsuario = await serviceUsuario.deletaUsuario(
      usuarioMockService.id,
    );
    expect(deletaUsuario).toBeTruthy();
  });

  // teste validador

  it('Deve retornar um e-mail já cadastrado', async () => {
    const usuario = { ...usuarioMockService };

    serviceUsuario.filtraUsuarioCadastradoEmail = jest
      .fn()
      .mockResolvedValueOnce({ ...usuario });

    const validaEmailCadastrado =
      await serviceUsuario.filtraUsuarioCadastradoEmail(usuario.email);

    expect(validaEmailCadastrado).toBeTruthy();
  });

  it('Deve retornar um cpf já cadastrado', async () => {
    const usuario = { ...usuarioMockService };

    serviceUsuario.filtraUsuarioCadastradoCpf = jest
      .fn()
      .mockResolvedValueOnce({ ...usuario });

    const validaCpfCadastrado = await serviceUsuario.filtraUsuarioCadastradoCpf(
      usuario.cpf.toString(),
    );

    expect(validaCpfCadastrado).toBeTruthy();
  });
});
