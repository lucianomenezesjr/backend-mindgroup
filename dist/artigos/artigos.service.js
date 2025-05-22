"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtigosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const artigo_entity_1 = require("./entities/artigo.entity");
let ArtigosService = class ArtigosService {
    artigoRepo;
    constructor(artigoRepo) {
        this.artigoRepo = artigoRepo;
    }
    async create(createDto, autor) {
        const artigo = this.artigoRepo.create({ ...createDto, autor });
        return this.artigoRepo.save(artigo);
    }
    async findAll() {
        return this.artigoRepo.find({
            relations: ['autor'],
        });
    }
    async findByUser(userId) {
        return this.artigoRepo.find({
            where: { autor: { id: userId } },
            relations: ['autor'],
            order: { id: 'DESC' },
        });
    }
    async findOne(id) {
        const artigo = await this.artigoRepo.findOne({
            where: { id },
            relations: ['autor'],
        });
        if (!artigo) {
            throw new common_1.NotFoundException(`Artigo com ID ${id} não encontrado.`);
        }
        return artigo;
    }
    async remove(id, userId) {
        const artigo = await this.artigoRepo.findOne({
            where: { id },
            relations: ['autor'],
        });
        if (!artigo) {
            throw new common_1.NotFoundException('Artigo não encontrado');
        }
        if (artigo.autor.id !== userId) {
            throw new common_1.ForbiddenException('Você não tem permissão para deletar este artigo.');
        }
        await this.artigoRepo.remove(artigo);
    }
    async update(id, updateDto, userId) {
        const artigo = await this.artigoRepo.findOne({
            where: { id },
            relations: ['autor'],
        });
        if (!artigo) {
            throw new common_1.NotFoundException('Artigo não encontrado');
        }
        if (artigo.autor.id !== userId) {
            throw new common_1.ForbiddenException('Você não tem permissão para editar este artigo.');
        }
        Object.assign(artigo, updateDto);
        return this.artigoRepo.save(artigo);
    }
};
exports.ArtigosService = ArtigosService;
exports.ArtigosService = ArtigosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(artigo_entity_1.Artigo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArtigosService);
//# sourceMappingURL=artigos.service.js.map