import { UsersService } from '../../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { pick } from 'lodash';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = (await this.usersService.findOne(username));

        if (user && user.password === pass) {
          return pick(user, ['firstName', 'lastName', 'username', 'role', '_id'])
        }
        return null;
    }

    async login(user: any) {
        const rest = pick(user, ['firstName', 'lastName', 'username', 'role', '_id']);
        return {
          ...rest,
          token: this.jwtService.sign(rest),
        };
      }
}
