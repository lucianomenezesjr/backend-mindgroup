import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ArtigosModule } from './artigos/artigos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // config do banco (host, user, password, database, entities, etc)
      type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'sua_senha',
  database: process.env.DB_DATABASE || 'mindgroup',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // cuidado em produção
    }),
    AuthModule,
    UserModule,
    ArtigosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
