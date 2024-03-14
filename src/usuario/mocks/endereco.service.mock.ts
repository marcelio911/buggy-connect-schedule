import { EnderecoService } from '../../../src/usuario/endereco.service';

export const enderecoMockService = {
  estado: 'bahia',
  cidade: 'alagoinhas',
  bairro: 'catu',
  rua: 'cacau',
  numeroCasa: '190',
  cep: '151515151',
  id: '1',
};

export const enderecoServiceMock = {
  provide: EnderecoService,
  useValue: {
    find: jest.fn().mockResolvedValue([enderecoMockService]),
    findById: jest.fn().mockResolvedValue(enderecoMockService),
    insertMany: jest.fn().mockResolvedValue(enderecoMockService),
    findByIdAndUpdate: jest.fn().mockResolvedValue(enderecoMockService),
    deleteOne: jest.fn().mockResolvedValue(true),
  },
};
