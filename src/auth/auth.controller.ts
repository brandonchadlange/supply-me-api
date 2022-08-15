import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  validate(@Request() request) {
    return !!request.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() request) {
    // return this.authService.login(request.user);
  }
}
