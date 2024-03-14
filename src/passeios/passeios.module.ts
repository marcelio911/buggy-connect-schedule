import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PasseiosService } from './passeios.service';
import { PasseiosController } from './passseios.controller';
import { Passeios, passseiosSchema } from './passeiosSchema/passeios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Passeios.name, schema: passseiosSchema },
    ]),
  ],
  controllers: [PasseiosController],
  providers: [PasseiosService],
})
export class PasseiosModule {}
