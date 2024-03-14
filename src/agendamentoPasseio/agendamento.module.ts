import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Agendamento,
  agendamentoSchema,
} from './agendamentoSchema/agendamento.schema';
import { AgendamentoPasseioController } from './agendamento.controller';
import { AgendamentoPasseioService } from './agendamento.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Agendamento.name, schema: agendamentoSchema },
    ]),
  ],
  controllers: [AgendamentoPasseioController],
  providers: [AgendamentoPasseioService],
})
export class AgendamentoPasseioModule {}
