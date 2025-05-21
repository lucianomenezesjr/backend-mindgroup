import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { Artigo } from './artigos/entities/artigo.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'sua_senha',
  database: process.env.DB_DATABASE || 'mindgroup',
  entities: [User, Artigo], // melhor usar as entidades diretamente aqui
  migrations: [__dirname + '/migrations/*{.ts,.js}'], // ajustado para pastas corretas
  synchronize: false,
});
