import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { AtualizaEnderecoDto } from './usuarioDto/AtualizaEndereco.dto';

@ApiTags('Endereços')
@Controller('/enderecos')
export class enderecoController {
  constructor(private enderecoService: EnderecoService) {}

  @Get()
  async pegaEnderecos() {
    const enderecos = await this.enderecoService.pegaTodosOsEnderecos();
    return enderecos;
  }

  @Get('/:id')
  async pegaEnderecoPeloId(@Param('id') id: string) {
    const enderecos = await this.enderecoService.pegaEnderecoPeloId(id);
    return enderecos;
  }

  @Put('/:id')
  async AtualizaEndereco(
    @Param('id') id: string,
    @Body() enderecoAtualizado: AtualizaEnderecoDto,
  ) {
    const atualizaEndereco = await this.enderecoService.atualizaEndereco(
      id,
      enderecoAtualizado,
    );
    return atualizaEndereco;
  }
}
