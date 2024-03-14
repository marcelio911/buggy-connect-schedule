import { EnderecoEntity } from '../../../src/usuario/usuarioEntity/EnderecoCliente.entity';

describe('Deve testar o entity do endereço', () => {
  const enderecoEntity = new EnderecoEntity();

  it('Teste endereço entity', () => {
    enderecoEntity.cidade = 'lagarto';
    expect(enderecoEntity.cidade).toBe('lagarto');
  });
});
