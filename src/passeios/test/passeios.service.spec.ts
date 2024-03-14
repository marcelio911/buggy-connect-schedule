import { Test, TestingModule } from '@nestjs/testing';
import { PasseiosService } from '../../../src/passeios/passeios.service';
import {
  mockPasseio,
  mockPasseioService,
} from '../../../src/passeios/mocks/passeio.service.mock';
import { AtualizaPasseioDto } from '../../../src/passeios/passeiosDto/atualizaPasseios.dto';

describe('Teste passeio service', () => {
  let passeioService: PasseiosService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [mockPasseioService],
    }).compile();

    passeioService = module.get<PasseiosService>(PasseiosService);
  });

  it('Deve retornar todos os passeios', async () => {
    const retornarPasseios = await passeioService.pegaTodosOsPasseios();
    expect(retornarPasseios).toEqual([mockPasseio]);
  });

  it('Deve retornar o passeio pelo id', async () => {
    const retornarPasseioPeloId = await passeioService.pegaPasseioPeloId(
      mockPasseio.id,
    );

    expect(retornarPasseioPeloId.id).toBe('1');
  });

  it('Deve Criar um passeio', async () => {
    const passeio = {
      nomePasseio: 'PRAIA DE GENIPABU',

      datalhesPasseios:
        'Desfrute de um passeio tranquilo pelas famosas dunas de Jenipabu em nosso buggy confortável e seguro. Guiados por nossos motoristas experientes, você e sua família terão a oportunidade de explorar as maravilhas naturais desta região, enquanto deslizam suavemente pelas dunas e apreciam as vistas panorâmicas deslumbrantes. Aproveite para tirar fotos memoráveis e sentir a brisa suave do oceano acariciar seu rosto.',

      horarios: '5:00 as 17:00',

      distancia: '15KM',

      tempoPasseio: '40 minutos',
      valor: 'R$ 150',
    };

    const id = '2';

    passeioService.adicionaPasseios = jest
      .fn()
      .mockResolvedValueOnce({ id, ...passeio });

    const criaPasseio = await passeioService.adicionaPasseios(passeio);
    expect(criaPasseio.id).toBe('2');
  });

  it('Deve retornar a atualização do passeio', async () => {
    let atualizaPasseio: AtualizaPasseioDto;
    const passeioAtualizado = { ...atualizaPasseio, valor: 'R$ 30' };
    const atualizandoPasseio = await passeioService.atualizaPasseios(
      mockPasseio.id,
      passeioAtualizado,
    );

    expect(atualizandoPasseio.valor).toEqual(mockPasseio.valor);
  });

  it('Deve retornar true para a exclusão do passeio', async () => {
    const excluiPasseio = await passeioService.deletaPasseio(mockPasseio.id);
    expect(excluiPasseio).toBeTruthy();
  });
});
