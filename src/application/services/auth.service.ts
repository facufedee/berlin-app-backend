import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserRepository } from '../../infraestructure/repositories/user.mongo.repository';
import { JwtService } from '@nestjs/jwt'; // ✅ Importamos JwtService

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService, // ✅ Inyectamos JwtService
  ) {}

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userRepository.createUser(email, hashedPassword);
  }

  async login(email: string, password: string) {
    console.log("entro a login");
    const user = await this.userRepository.findByEmail(email);
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return { access_token: this.jwtService.sign({ email: user.email }) }; // ✅ Generamos el token correctamente
  }
}
