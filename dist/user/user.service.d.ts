import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly jwtService;
    private readonly userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<User>);
    create(email: string, password: string): Promise<{
        id: number;
        email: string;
    }>;
    validateUser(email: string, password: string): Promise<User | null>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
    findByEmail(email: string): Promise<User | null>;
    update(userId: number, updateUserDto: Partial<User>): Promise<User | null>;
}
