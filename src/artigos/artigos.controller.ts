// src/artigos/artigos.controller.ts
import { Controller, Get, Post, Body, Param, Request, UseGuards } from '@nestjs/common';
import { ArtigosService } from './artigos.service';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('artigos')
export class ArtigosController {
  constructor(private readonly artigosService: ArtigosService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateArtigoDto, @Request() req) {
    return this.artigosService.create(dto, req.user);
  }

  @Get()
  findAll() {
    return this.artigosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artigosService.findOne(+id);
  }
}
