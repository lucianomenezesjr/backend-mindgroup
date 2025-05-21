import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(body: {
        email: string;
        password: string;
    }): Promise<{
        id: number;
        email: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<import("./user.entity").User | null>;
    updateProfile(req: any, updateUserDto: UpdateUserDto): Promise<import("./user.entity").User | null>;
}
