import { RolesGuard } from './roles.guard';
import { JwtGuard } from './jwt.guard';
import { AuthService } from './auth.service';
import { LocalGuard } from './local.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(LocalGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles('admin')
    @Get('admin')
    onlyAdmin(@Request() req) {
        return req.user;
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles('user')
    @Get('user')
    onlyUser(@Request() req) {
        return req.user;
    }

    @UseGuards(RolesGuard)
    @Roles()
    @Get('visitor')
    onlyVisitor(@Request() req) {
        return req.user;
    }    

}
