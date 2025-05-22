// src/artigos/dto/update-artigo.dto.ts

import { IsOptional, IsString } from 'class-validator';

export class UpdateArtigoDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  conteudo?: string;

  @IsOptional()
  @IsString()
  imagemBanner?: string;
}