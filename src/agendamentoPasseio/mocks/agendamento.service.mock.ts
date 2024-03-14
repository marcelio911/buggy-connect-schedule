import { AgendamentoPasseioService } from '../../../src/agendamentoPasseio/agendamento.service';

export const agendamentoMock = {
  id: '1',
  PasseioAgendado: 'PRAIA DE GENIPABU',
  HorarioInícioPasseio: '15:00',
  HorarioTerminoPasseio: '15:40',
  QuantidadePessoas: 3,
  ValorTotalPasseio: 'R$ 450',
  ProfissionalPasseio: 'Roberto silva',
  titularDoAgendamento: 'Davi ribeiro',
};

export const agendamentoMockService = {
  provide: AgendamentoPasseioService,
  useValue: {
    retornarTodosOsPasseiosAgendados: jest
      .fn()
      .mockResolvedValue([agendamentoMock]),
    retornaPasseioAgendadoPeloId: jest.fn().mockResolvedValue(agendamentoMock),
    passeioAgendadoAdicionado: jest.fn().mockResolvedValue(agendamentoMock),
    passeioAgendadoAtualizado: jest.fn().mockResolvedValue(agendamentoMock),
    passeioAgendadoDeletado: jest.fn().mockResolvedValue(true),
  },
};
