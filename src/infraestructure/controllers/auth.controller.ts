import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';
import { JwtAuthGuard } from '../../core/security/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() { email, password }: { email: string, password: string }) {
    return this.authService.register(email, password);
  }

  @Post('login')
  async login(@Body() { email, password }: { email: string, password: string }) {
    return this.authService.login(email, password);
  }

  @Post('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    return req.user;
  }
}
