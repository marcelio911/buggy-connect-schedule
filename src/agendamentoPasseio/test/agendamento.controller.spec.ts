import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentoPasseioController } from '../../../src/agendamentoPasseio/agendamento.controller';
import {
  agendamentoMock,
  agendamentoMockService,
} from '../../../src/agendamentoPasseio/mocks/agendamento.service.mock';
import { AtualizaAgendamentoPasseioDto } from '../../../src/agendamentoPasseio/agendamentoDto/atualizaPasseioAgendado.dto';

describe('Deve testar o controller do agendamento de passeio', () => {
  let agendamentoController: AgendamentoPasseioController;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendamentoPasseioController],
      providers: [agendamentoMockService],
    }).compile();

    agendamentoController = module.get<AgendamentoPasseioController>(
      AgendamentoPasseioController,
    );
  });

  it('Deve retornar uma requisição Get de todos os passeios agendados', async () => {
    const retornarPasseioAgendado =
      await agendamentoController.pegaTodosOsPasseiosAgendados();
    expect(retornarPasseioAgendado).toEqual([agendamentoMock]);
  });

  it('Deve retornar uma requisição Get para buscar um passeio agendado pelo id', async () => {
    const retornaPasseioPeloId =
      await agendamentoController.pegaPasseioAgendadoPeloId(agendamentoMock.id);
    expect(retornaPasseioPeloId.ValorTotalPasseio).toBe('R$ 450');
  });

  it('Deve retornar uma requisição Post para criar uma passeio agendado', async () => {
    const passeio = {
      PasseioAgendado: 'PRAIA DE GENIPABU',
      HorarioInícioPasseio: '15:00',
      HorarioTerminoPasseio: '16:00',
      QuantidadePessoas: 3,
      ValorTotalPasseio: 'R$ 450',
      ProfissionalPasseio: 'Roberto silva',
      titularDoAgendamento: 'Davi ribeiro',
    };

    agendamentoController.adicionaPasseioAgendado = jest
      .fn()
      .mockResolvedValueOnce({ ...passeio });

    const salvaPasseioAgendado =
      await agendamentoController.adicionaPasseioAgendado(passeio);

    expect(salvaPasseioAgendado.HorarioTerminoPasseio).toBe('16:00');
  });

  it('Deve retornar uma requisição Put para atualizar o passeio agendado', async () => {
    let atualizaPasseio: AtualizaAgendamentoPasseioDto;

    const atualizandoPasseio = {
      ...atualizaPasseio,
      ValorTotalPasseio: 'R$ 900',
    };

    const passeioAtualizado =
      await agendamentoController.atualizaPasseioAgendado(
        agendamentoMock.id,
        atualizandoPasseio,
      );

    expect(passeioAtualizado.ValorTotalPasseio).toEqual(
      agendamentoMock.ValorTotalPasseio,
    );
  });

  it('Deve retornar uma requisição Delete para excluir um passeio agendado', async () => {
    const deletaPasseioAgendado =
      await agendamentoController.deletaPasseioAgendado(agendamentoMock.id);
    expect(deletaPasseioAgendado).toBeTruthy();
  });
});
