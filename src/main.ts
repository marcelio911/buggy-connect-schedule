/* eslint-disable prettier/prettier */
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true,
      whitelist:true,
      forbidNonWhitelisted: true
    })
  )
  const config = new DocumentBuilder()
  .setTitle('Clientes')
  .setDescription('Requisição HTTP na rota /usuarios, na rota /enderecos, na rota /passeios e na rota /agendamento')
  .setVersion('1.0')
  .addTag('Usuários')
  .addTag('Endereços')
  .addTag('Passeios')
  .addTag('Agendamento de passeio')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  useContainer(app.select(AppModule), {fallbackOnErrors: true});
}


bootstrap();

