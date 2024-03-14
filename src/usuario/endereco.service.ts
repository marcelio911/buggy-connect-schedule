import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Endereco } from './usuarioSchema/Endereco.schema';
import { EnderecoDto } from './usuarioDto/EnderecoCliente.dto';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectModel(Endereco.name)
    private endereco: mongoose.Model<Endereco>,
  ) {}

  async pegaTodosOsEnderecos(): Promise<Endereco[]> {
    const enderecos = await this.endereco.find();
    return enderecos;
  }

  async pegaEnderecoPeloId(id: string): Promise<Endereco> {
    const enderecoSelecionado: Endereco = await this.endereco.findById(id);
    return enderecoSelecionado;
  }

  async salvaEndereco(endereco: Endereco) {
    const enderecoSalvo = await this.endereco.insertMany(endereco);
    return enderecoSalvo;
  }

  // TODO colocar retorno especifico
  async atualizaEndereco(id: string, dadosAtualizados: EnderecoDto) {
    //: Promise<Endereco> {

    const atualizaEndereco: Endereco = await this.endereco.findByIdAndUpdate(
      id,
      dadosAtualizados,
    );

    return atualizaEndereco;
  }
  // TODO usar o método deleteOne VOID sem retorno
  async apagaEndereco(endereco: Endereco): Promise<void> {
    await this.endereco.deleteOne(endereco._id);
  }
}
