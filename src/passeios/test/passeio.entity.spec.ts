import { PasseiosEntity } from '../../../src/passeios/passeiosEntity/passeios.entity';

describe('Deve testar o entity passeios', () => {
  const passeioEntity = new PasseiosEntity();

  it('Deve testar o entity', async () => {
    passeioEntity.valor = 'R$ 45';
    expect(passeioEntity.valor).toBe('R$ 45');
  });
});
