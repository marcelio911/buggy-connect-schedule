import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Passeios } from './passeiosSchema/passeios.schema';
import { PasseiosDto } from './passeiosDto/passeios.dto';


@Injectable()
export class PasseiosService {
  constructor(
    @InjectModel(Passeios.name)
    private passeios: mongoose.Model<Passeios>,
  ) {}

  async pegaTodosOsPasseios() {
    return this.passeios.find();
  }

  async pegaPasseioPeloId(id: string) {
    return this.passeios.findById(id);
  }

  async adicionaPasseios(dadosPasseio: PasseiosDto) {
    const salvaPasseios = await this.passeios.create(dadosPasseio);
    return salvaPasseios;
  }

  async atualizaPasseios(id: string, atualizacaoPasseio: PasseiosDto) {
    const atualizaPasseio = await this.passeios.findByIdAndUpdate(
      id,
      atualizacaoPasseio,
    );
    return atualizaPasseio
  }

  async deletaPasseio(id: string){
    const passeioDeletado = await this.passeios.findByIdAndDelete(id)
    return passeioDeletado;
  }
}
