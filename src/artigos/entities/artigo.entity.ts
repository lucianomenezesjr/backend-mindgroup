import { User } from '../../user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

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
}
