import { ArtigosService } from './artigos.service';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { UpdateArtigoDto } from './dto/update-artigo.dto';
export declare class ArtigosController {
    private readonly artigosService;
    constructor(artigosService: ArtigosService);
    create(dto: CreateArtigoDto, req: any): Promise<import("./entities/artigo.entity").Artigo>;
    findAll(): Promise<import("./entities/artigo.entity").Artigo[]>;
    findMe(req: any): Promise<import("./entities/artigo.entity").Artigo[]>;
    remove(id: string, req: any): Promise<void>;
    findOne(id: string): Promise<import("./entities/artigo.entity").Artigo>;
    update(id: number, updateDto: UpdateArtigoDto, req: any): Promise<import("./entities/artigo.entity").Artigo>;
}
