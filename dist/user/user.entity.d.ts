import { Artigo } from '../artigos/entities/artigo.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    nome: string;
    sobrenome: string;
    imagemPerfil: string;
    artigos: Artigo[];
}
