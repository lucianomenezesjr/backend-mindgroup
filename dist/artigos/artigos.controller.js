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
exports.ArtigosController = void 0;
const common_1 = require("@nestjs/common");
const artigos_service_1 = require("./artigos.service");
const create_artigo_dto_1 = require("./dto/create-artigo.dto");
const update_artigo_dto_1 = require("./dto/update-artigo.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ArtigosController = class ArtigosController {
    artigosService;
    constructor(artigosService) {
        this.artigosService = artigosService;
    }
    create(dto, req) {
        return this.artigosService.create(dto, req.user);
    }
    findAll() {
        return this.artigosService.findAll();
    }
    findMe(req) {
        return this.artigosService.findByUser(req.user.id);
    }
    remove(id, req) {
        return this.artigosService.remove(+id, req.user.id);
    }
    findOne(id) {
        return this.artigosService.findOne(+id);
    }
    async update(id, updateDto, req) {
        return this.artigosService.update(id, updateDto, req.user.id);
    }
};
exports.ArtigosController = ArtigosController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artigo_dto_1.CreateArtigoDto, Object]),
    __metadata("design:returntype", void 0)
], ArtigosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArtigosController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('meus'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArtigosController.prototype, "findMe", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ArtigosController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtigosController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_artigo_dto_1.UpdateArtigoDto, Object]),
    __metadata("design:returntype", Promise)
], ArtigosController.prototype, "update", null);
exports.ArtigosController = ArtigosController = __decorate([
    (0, common_1.Controller)('artigos'),
    __metadata("design:paramtypes", [artigos_service_1.ArtigosService])
], ArtigosController);
//# sourceMappingURL=artigos.controller.js.map