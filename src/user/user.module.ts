// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ESSENCIAL para o repositório funcionar
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // opcional, mas útil se outro módulo usar esse service
})
export class UserModule {}
