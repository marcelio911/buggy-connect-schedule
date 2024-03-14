import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Agendamento } from './agendamentoSchema/agendamento.schema';
import { AtualizaAgendamentoPasseioDto } from './agendamentoDto/AtualizaPasseioAgendado.dto';

@Injectable()
export class AgendamentoPasseioService {
  constructor(
    @InjectModel(Agendamento.name)
    private agendamento: mongoose.Model<Agendamento>,
  ) { }

  async retornarTodosOsPasseiosAgendados() {
    return this.agendamento.find();
  }

  async retornaPasseioAgendadoPeloId(id: string): Promise<Agendamento> {
    const procuraPasseioAgendado: Agendamento =
      await this.agendamento.findById(id);
    return procuraPasseioAgendado;
  }

  async passeioAgendadoAdicionado(
    dadosPasseio: Agendamento,
  ): Promise<Agendamento> {
    const salvaPasseioAgendado: Agendamento =
      await this.agendamento.create(dadosPasseio);
    return salvaPasseioAgendado;
  }

  async passeioAgendadoAtualizado(
    id: string,
    dadosPasseioAtualizado: AtualizaAgendamentoPasseioDto,
  ): Promise<Agendamento> {
    const agendamentoAtualizado: Agendamento =
      await this.agendamento.findByIdAndUpdate(id, dadosPasseioAtualizado);
    return agendamentoAtualizado;
  }

  async passeioAgendadoDeletado(id: string): Promise<void> {
    this.agendamento.findByIdAndDelete(id);
  }
}
