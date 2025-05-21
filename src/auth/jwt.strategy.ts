import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Extrai o token do header Authorization, tipo Bearer
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Chave secreta para validar o token - deve ser igual à usada para gerar
      secretOrKey: process.env.JWT_SECRET || 'minha_chave_secreta',
    });
  }

  // payload é o conteúdo decodificado do token JWT
  async validate(payload: any) {
    // Pode retornar o usuário com as infos que quiser
    // O resultado é anexado ao request.user
    return { userId: payload.sub, email: payload.email };
  }
}
