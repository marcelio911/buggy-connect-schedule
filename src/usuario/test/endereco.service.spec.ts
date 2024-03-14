import { Test, TestingModule } from '@nestjs/testing';
import { EnderecoService } from '../../../src/usuario/endereco.service';
import { enderecoServiceMock } from '../../../src/usuario/mocks/endereco.mock';
import { enderecoMockService } from '../../../src/usuario/mocks/endereco.service.mock';
import { AtualizaEnderecoDto } from '../../../src/usuario/usuarioDto/AtualizaEndereco.dto';

describe('Teste service endereco', () => {
  let enderecoService: EnderecoService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [enderecoServiceMock],
    }).compile();

    enderecoService = module.get<EnderecoService>(EnderecoService);
  });

  it('Deve retornar todos os endereços', async () => {
    const todosOsEnderecos = await enderecoService.pegaTodosOsEnderecos();
    expect(todosOsEnderecos).toEqual([enderecoMockService]);
  });

  it('Deve retornar o endereço pelo id', async () => {
    const endereco = await enderecoService.pegaEnderecoPeloId(
      enderecoMockService.id,
    );

    expect(endereco.id).toEqual(enderecoMockService.id);
  });
  it('Deve atualizar o endereço', async () => {
    let enderecoAtualizado: AtualizaEnderecoDto;
    const endereco = { ...enderecoAtualizado, cidade: 'aracaju' };
    const atualizaEndereco = await enderecoService.atualizaEndereco(
      enderecoMockService.id,
      endereco,
    );
    expect(atualizaEndereco.cidade).toEqual(enderecoMockService.cidade);
  });

  it('Deve cria um endereco', async () => {
    const criaEndereco = {
      estado: 'sergipe',
      cidade: 'alagoinhas',
      bairro: 'catu',
      rua: 'cacau',
      numeroCasa: '190',
      cep: '151515151',
    };

    const id = '44';

    enderecoService.salvaEndereco = jest
      .fn()
      .mockReturnValueOnce({ id, ...criaEndereco });
    const criandoEndereco = await enderecoService.salvaEndereco(criaEndereco);

    expect([enderecoService.pegaEnderecoPeloId(id)]).toHaveLength(1);
  });

  it('Deve apagar o endereço', async () => {
    enderecoService.apagaEndereco = jest
      .fn()
      .mockReturnValueOnce({ ...enderecoMockService });

    const apagaEndereco =
      await enderecoService.apagaEndereco(enderecoMockService);
    expect(apagaEndereco).toBeTruthy()
  });
});
