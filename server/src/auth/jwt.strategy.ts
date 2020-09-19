import { pick } from 'lodash';
import { jwtConstants } from './../constants';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: jwtConstants.secret,
        });
      }
    
      async validate(user: any) {
        return pick(user, ['firstName', 'lastName', 'userName', 'role', '_id'])
      }
}