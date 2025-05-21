// src/artigos/dto/create-artigo.dto.ts
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateArtigoDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsOptional()
  @IsString()
  imagemBanner?: string;
}
