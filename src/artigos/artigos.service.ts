// src/artigos/artigos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artigo } from './entities/artigo.entity';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { User } from '../user/user.entity';

@Injectable()
export class ArtigosService {
  constructor(
    @InjectRepository(Artigo)
    private readonly artigoRepo: Repository<Artigo>,
  ) {}

  async create(createDto: CreateArtigoDto, autor: User): Promise<Artigo> {
    const artigo = this.artigoRepo.create({ ...createDto, autor });
    return this.artigoRepo.save(artigo);
  }

  async findAll(): Promise<Artigo[]> {
    return this.artigoRepo.find({
      relations: ['autor'],
    });
  }

  async findOne(id: number): Promise<Artigo> {
    const artigo = await this.artigoRepo.findOne({
      where: { id },
      relations: ['autor'],
    });
    if (!artigo) {
      throw new NotFoundException(`Artigo com ID ${id} não encontrado.`);
    }
    return artigo;
  }
}
