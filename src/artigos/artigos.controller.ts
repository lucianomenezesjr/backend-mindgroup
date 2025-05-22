// src/artigos/artigos.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  UseGuards,
  Delete,
  Put,
  Req,
  ParseIntPipe,
} from '@nestjs/common';
import { ArtigosService } from './artigos.service';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { UpdateArtigoDto } from './dto/update-artigo.dto';
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

  @UseGuards(JwtAuthGuard)
  @Get('meus')
  findMe(@Request() req) {
    return this.artigosService.findByUser(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.artigosService.remove(+id, req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artigosService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateArtigoDto,
    @Req() req,
  ) {
    return this.artigosService.update(id, updateDto, req.user.id);
  }
}
