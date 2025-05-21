import { Controller, Post, Body, Get, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: { email: string; password: string }) {
    return this.userService.create(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.userService.login(body.email, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Req() req) {
    console.log('req.user:', req.user); // Para debug, veja se id e email estão aqui
    return this.userService.findByEmail(req.user.email);
  }

  @UseGuards(JwtAuthGuard)
  @Put('me')
  async updateProfile(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    // Usa req.user.id, que foi definido na JwtStrategy
    return this.userService.update(req.user.id, updateUserDto);
  }
}
