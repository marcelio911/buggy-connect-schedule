import { DadosCnh } from '../../../src/usuario/usuarioEntity/DadosCnh.entity';
import { MetodoRecebimento } from '../../../src/usuario/usuarioEntity/MetodoRecebimento.entity';
import { TipoDeBuggy } from '../../../src/usuario/usuarioEntity/TipoDeCarro.entity';

export class ContaPessoal {
  rg: number;
  sexo: string;
  dataDeNascimento: string;
  metodoDePagamento: any;
  idCliente: string;
}

export class ContaProfissional {
  rg: number;
  sexo: string;
  cnh: DadosCnh;
  tipoDeCarro: TipoDeBuggy[];
  metodoRecebimento: MetodoRecebimento[];
  idCliente: string;
}
