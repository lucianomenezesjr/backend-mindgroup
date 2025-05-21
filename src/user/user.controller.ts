import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // user.controller.ts
    @Post()
    async create(@Body() body: { email: string; password: string }) {
    return this.userService.create(body.email, body.password);
    }

     @Post('login')
    async login(@Body() body: { email: string; password: string }) {
    return this.userService.login(body.email, body.password);
  }
}
