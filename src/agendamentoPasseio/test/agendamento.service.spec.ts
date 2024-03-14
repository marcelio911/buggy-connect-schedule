import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentoPasseioService } from '../../../src/agendamentoPasseio/agendamento.service';
import {
  agendamentoMock,
  agendamentoMockService,
} from '../../../src/agendamentoPasseio/mocks/agendamento.service.mock'
import { AtualizaAgendamentoPasseioDto } from '../../../src/agendamentoPasseio/agendamentoDto/atualizaPasseioAgendado.dto';

describe('Teste do agendamento service', () => {
  let agendamentoService: AgendamentoPasseioService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [agendamentoMockService],
    }).compile();

    agendamentoService = module.get<AgendamentoPasseioService>(
      AgendamentoPasseioService,
    );
  });

  it('Deve retornar todos os passeios agendados', async () => {
    const retornarPasseioAgendado =
      await agendamentoService.retornarTodosOsPasseiosAgendados();
    expect(retornarPasseioAgendado).toEqual([agendamentoMock]);
  });

  it('Deve retornar o passeio agendado pelo id', async () => {
    const retornaPeloId = await agendamentoService.retornaPasseioAgendadoPeloId(
      agendamentoMock.id,
    );
    expect(retornaPeloId.HorarioInícioPasseio).toBe('15:00');
  });

  it('Deve criar um agendamento para o passeio', async () => {
    const passeio = {
      PasseioAgendado: 'PRAIA DE GENIPABU',
      HorarioInícioPasseio: '15:00',
      HorarioTerminoPasseio: '15:40',
      QuantidadePessoas: 3,
      ValorTotalPasseio: 'R$ 600',
      ProfissionalPasseio: 'Roberto silva',
      titularDoAgendamento: 'Davi ribeiro',
    };

    agendamentoService.passeioAgendadoAdicionado = jest
      .fn()
      .mockResolvedValueOnce({ ...passeio });

    const agendaPasseio =
      await agendamentoService.passeioAgendadoAdicionado(passeio);

    expect(agendaPasseio.ValorTotalPasseio).toBe('R$ 600');
  });

  it('Deve atualizar o passeio agendado', async () => {
    let atualizaPasseioAgendado: AtualizaAgendamentoPasseioDto;

    const atualizandoPasseio = {
      ...atualizaPasseioAgendado,
      QuantidadePessoas: 7,
    };

    const agendamentoPasseioAtualizado =
      await agendamentoService.passeioAgendadoAtualizado(
        agendamentoMock.id,
        atualizandoPasseio,
      );

    expect(agendamentoPasseioAtualizado.QuantidadePessoas).toEqual(
      agendamentoMock.QuantidadePessoas,
    );
  });

  it('Deve deletar o agendamento do passeio', async () => {
    const deletaAgendamento = await agendamentoService.passeioAgendadoDeletado(
      agendamentoMock.id,
    );
    expect(deletaAgendamento).toBeTruthy();
  });
});
