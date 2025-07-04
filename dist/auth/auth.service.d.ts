import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        nome: string;
        sobrenome: string;
        imagemPerfil: string;
        artigos: import("../artigos/entities/artigo.entity").Artigo[];
    }>;
    generateToken(user: Partial<User>): {
        access_token: string;
    };
}
