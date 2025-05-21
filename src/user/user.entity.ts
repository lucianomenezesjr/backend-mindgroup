import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Artigo } from '../artigos/entities/artigo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true })
  sobrenome: string;

  @Column({ nullable: true })
  imagemPerfil: string;

  @OneToMany(() => Artigo, artigo => artigo.autor)
  artigos: Artigo[];
}
