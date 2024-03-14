import { EnderecoService } from '../../../src/usuario/endereco.service';

export const enderecoMock = {
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
    pegaTodosOsEnderecos: jest.fn().mockResolvedValue([enderecoMock]),
    pegaEnderecoPeloId: jest.fn().mockResolvedValue(enderecoMock),
    atualizaEndereco: jest.fn().mockResolvedValue(enderecoMock),
  },
};
