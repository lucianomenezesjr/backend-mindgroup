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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artigo = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/user.entity");
let Artigo = class Artigo {
    id;
    titulo;
    conteudo;
    imagemBanner;
    autor;
    autorId;
    createdAt;
};
exports.Artigo = Artigo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Artigo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Artigo.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Artigo.prototype, "conteudo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Artigo.prototype, "imagemBanner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.artigos, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'autorId' }),
    __metadata("design:type", user_entity_1.User)
], Artigo.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Artigo.prototype, "autorId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Artigo.prototype, "createdAt", void 0);
exports.Artigo = Artigo = __decorate([
    (0, typeorm_1.Entity)()
], Artigo);
//# sourceMappingURL=artigo.entity.js.map