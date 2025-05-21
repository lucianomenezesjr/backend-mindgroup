import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(email: string, password: string): Promise<Omit<User, 'password'>>;
    login(email: string, password: string): Promise<Omit<User, 'password'>>;
    findByEmail(email: string): Promise<User | null>;
}
