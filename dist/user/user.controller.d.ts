import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(body: {
        email: string;
        password: string;
    }): Promise<Omit<import("./user.entity").User, "password">>;
    login(body: {
        email: string;
        password: string;
    }): Promise<Omit<import("./user.entity").User, "password">>;
}
