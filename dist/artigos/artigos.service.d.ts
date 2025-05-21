import { Repository } from 'typeorm';
import { Artigo } from './entities/artigo.entity';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { User } from '../user/user.entity';
export declare class ArtigosService {
    private readonly artigoRepo;
    constructor(artigoRepo: Repository<Artigo>);
    create(createDto: CreateArtigoDto, autor: User): Promise<Artigo>;
    findAll(): Promise<Artigo[]>;
    findOne(id: number): Promise<Artigo>;
}
