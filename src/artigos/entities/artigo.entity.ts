import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../../user/user.entity';

@Entity()
export class Artigo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column('text')
  conteudo: string;

  @Column({ nullable: true })
  imagemBanner: string;

  @ManyToOne(() => User, user => user.artigos, { eager: true })
  @JoinColumn({ name: 'autorId' })
  autor: User;

  @Column()
  autorId: number;

  @CreateDateColumn()
  createdAt: Date; // <-- Aqui está o campo de data de criação
}
