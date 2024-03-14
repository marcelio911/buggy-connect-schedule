import { PasseiosService } from '../../../src/passeios/passeios.service';

export const mockPasseio = {
  id: '1',
  
  nomePasseio: 'PRAIA DE GENIPABU',

  datalhesPasseios:
    'Desfrute de um passeio tranquilo pelas famosas dunas de Jenipabu em nosso buggy confortável e seguro. Guiados por nossos motoristas experientes, você e sua família terão a oportunidade de explorar as maravilhas naturais desta região, enquanto deslizam suavemente pelas dunas e apreciam as vistas panorâmicas deslumbrantes. Aproveite para tirar fotos memoráveis e sentir a brisa suave do oceano acariciar seu rosto.',

  horarios: '5:00 as 17:00',

  distancia: '15KM',

  tempoPasseio: '40 minutos',
  valor: 'R$ 150',
};

export const mockPasseioService = {
  provide: PasseiosService,
  useValue: {
    pegaTodosOsPasseios: jest.fn().mockResolvedValue([mockPasseio]),
    pegaPasseioPeloId: jest.fn().mockResolvedValue(mockPasseio),
    adicionaPasseios: jest.fn().mockResolvedValue(mockPasseio),
    atualizaPasseios: jest.fn().mockResolvedValue(mockPasseio),
    deletaPasseio: jest.fn().mockResolvedValue(true),
  },
};
''