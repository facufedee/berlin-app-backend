import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
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

  @Get('me')  // ✅ Cambiar de @Post a @Get si quieres que coincida con la solicitud de Postman
  @UseGuards(JwtAuthGuard)  // ✅ Protegida con JWT
  async getProfile(@Request() req) {
    return req.user;  // ✅ Devuelve el usuario autenticado
  }
}
