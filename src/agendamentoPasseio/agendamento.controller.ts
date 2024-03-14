import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgendamentoPasseioService } from './agendamento.service';
import { Agendamento } from './agendamentoSchema/agendamento.schema';
import { AgendamentoPasseioDto } from './agendamentoDto/agendamento.dto';
import { AtualizaAgendamentoPasseioDto } from './agendamentoDto/AtualizaPasseioAgendado.dto';

@ApiTags('Agendamento de passeio')
@Controller('/agendamento')
export class AgendamentoPasseioController {
  constructor(private agendamentoService: AgendamentoPasseioService) {}

  @Get()
  async pegaTodosOsPasseiosAgendados() {
    return this.agendamentoService.retornarTodosOsPasseiosAgendados();
  }

  @Get('/:id')
  async pegaPasseioAgendadoPeloId(
    @Param('id') id: string,
  ): Promise<Agendamento> {
    const retornarPasseioAgendado: Agendamento =
      await this.agendamentoService.retornaPasseioAgendadoPeloId(id);
    return retornarPasseioAgendado;
  }

  @Post()
  async adicionaPasseioAgendado(
    @Body() dadosPasseio: AgendamentoPasseioDto,
  ): Promise<Agendamento> {
    const salvaPasseioAgendado: Agendamento =
      await this.agendamentoService.passeioAgendadoAdicionado(dadosPasseio);

    return salvaPasseioAgendado;
  }

  @Put('/:id')
  async atualizaPasseioAgendado(
    @Param('id') id: string,
    @Body() dadosPasseioAtualizado: AtualizaAgendamentoPasseioDto,
  ): Promise<Agendamento> {
    const atualizandoPasseioAgendado: AgendamentoPasseioDto =
      await this.agendamentoService.passeioAgendadoAtualizado(
        id,
        dadosPasseioAtualizado,
      );
    return atualizandoPasseioAgendado;
  }

  @Delete('/:id')
  async deletaPasseioAgendado(@Param('id') id: string) {
    return this.agendamentoService.passeioAgendadoDeletado(id);
  }
}
