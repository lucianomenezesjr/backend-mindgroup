import { ArtigosService } from './artigos.service';
import { CreateArtigoDto } from './dto/create-artigo.dto';
export declare class ArtigosController {
    private readonly artigosService;
    constructor(artigosService: ArtigosService);
    create(dto: CreateArtigoDto, req: any): Promise<import("./entities/artigo.entity").Artigo>;
    findAll(): Promise<import("./entities/artigo.entity").Artigo[]>;
    findOne(id: string): Promise<import("./entities/artigo.entity").Artigo>;
}
