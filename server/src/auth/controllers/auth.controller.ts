import { RolesGuard } from '../guards/roles.guard';
import { JwtGuard } from '../guards/jwt.guard';
import { AuthService } from '../services/auth.service';
import { LocalGuard } from '../guards/local.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';

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

}
