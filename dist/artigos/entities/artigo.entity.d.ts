import { User } from '../../user/user.entity';
export declare class Artigo {
    id: number;
    titulo: string;
    conteudo: string;
    imagemBanner: string;
    autor: User;
    autorId: number;
}
