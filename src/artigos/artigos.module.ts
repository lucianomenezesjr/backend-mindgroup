// src/artigos/artigos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtigosService } from './artigos.service';
import { ArtigosController } from './artigos.controller';
import { Artigo } from './entities/artigo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artigo])],
  controllers: [ArtigosController],
  providers: [ArtigosService],
})
export class ArtigosModule {}
