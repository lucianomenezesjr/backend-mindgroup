// src/artigos/artigos.service.ts
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artigo } from './entities/artigo.entity';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { User } from '../user/user.entity';
import { UpdateArtigoDto } from './dto/update-artigo.dto';

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

  async findByUser(userId: number): Promise<Artigo[]> {
    return this.artigoRepo.find({
      where: { autor: { id: userId } },
      relations: ['autor'],
      order: { id: 'DESC' },
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

  async remove(id: number, userId: number): Promise<void> {
    const artigo = await this.artigoRepo.findOne({
      where: { id },
      relations: ['autor'],
    });

    if (!artigo) {
      throw new NotFoundException('Artigo não encontrado');
    }

    if (artigo.autor.id !== userId) {
      throw new ForbiddenException(
        'Você não tem permissão para deletar este artigo.',
      );
    }

    await this.artigoRepo.remove(artigo);
  }

  async update(
  id: number,
  updateDto: UpdateArtigoDto,
  userId: number,
): Promise<Artigo> {
  const artigo = await this.artigoRepo.findOne({
    where: { id },
    relations: ['autor'],
  });

  if (!artigo) {
    throw new NotFoundException('Artigo não encontrado');
  }

  if (artigo.autor.id !== userId) {
    throw new ForbiddenException(
      'Você não tem permissão para editar este artigo.',
    );
  }

  Object.assign(artigo, updateDto);
  return this.artigoRepo.save(artigo);
}

}
