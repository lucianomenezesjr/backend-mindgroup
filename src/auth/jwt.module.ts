import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';


@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'minha_chave_secreta',
      signOptions: { expiresIn: '1h' },
    }),
    // outros imports...
  ],
  providers: [UserService, /* outros providers */],
  controllers: [UserController],
})
export class UserModule {}
