import { Repository } from 'typeorm';
import { Artigo } from './entities/artigo.entity';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { User } from '../user/user.entity';
import { UpdateArtigoDto } from './dto/update-artigo.dto';
export declare class ArtigosService {
    private readonly artigoRepo;
    constructor(artigoRepo: Repository<Artigo>);
    create(createDto: CreateArtigoDto, autor: User): Promise<Artigo>;
    findAll(): Promise<Artigo[]>;
    findByUser(userId: number): Promise<Artigo[]>;
    findOne(id: number): Promise<Artigo>;
    remove(id: number, userId: number): Promise<void>;
    update(id: number, updateDto: UpdateArtigoDto, userId: number): Promise<Artigo>;
}
