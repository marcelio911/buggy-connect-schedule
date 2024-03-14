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
import { PasseiosService } from './passeios.service';
import { PasseiosDto } from './passeiosDto/passeios.dto';
import { AtualizaPasseioDto } from './passeiosDto/AtualizaPasseios.dto';

@ApiTags('Passeios')
@Controller('passeios')
export class PasseiosController {
  constructor(private passeios: PasseiosService) {}
  @Get()
  async pegaTodosOsPasseios() {
    const todosOsPasseios = await this.passeios.pegaTodosOsPasseios();
    return todosOsPasseios;
  }

  @Get('/:id')
  async pegaPasseioPeloId(@Param('id') id: string) {
    const pegaPasseioPeloId = await this.passeios.pegaPasseioPeloId(id);
    return pegaPasseioPeloId;
  }

  @Post()
  async adicionaPasseio(@Body() DadosPasseio: PasseiosDto) {
    const salvaPasseios = await this.passeios.adicionaPasseios(DadosPasseio);
    return salvaPasseios;
  }

  @Put('/:id')
  async atualizaPasseio(
    @Param('id') id: string,
    @Body() dadosAtualizadosPasseio: AtualizaPasseioDto,
  ) {
    const atualizaPasseio = await this.passeios.atualizaPasseios(
      id,
      dadosAtualizadosPasseio,
    );
    return atualizaPasseio;
  }

  @Delete('/:id')
  async deletaPasseio(@Param('id') id: string) {
    const deletandoPasseio = await this.passeios.deletaPasseio(id)
    return deletandoPasseio;
  }
}
