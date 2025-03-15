import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from '../../application/services/auth.service';
import { AuthController } from '../../infraestructure/controllers/auth.controller'; 
import { JwtStrategy } from '../../core/security/jwt.strategy';
import { UserRepository } from '../../infraestructure/repositories/user.mongo.repository'; // ✅ Corregida
import { User, UserSchema } from '../../core/entities/user.entity'; // ✅ Corregida
import { DatabaseModule } from '../../infraestructure/database/database.module'; // ✅ Corregida
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule, 
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
        secret: process.env.JWT_SECRET || 'super_secret_key',
        signOptions: { expiresIn: '1h' }, // Expiración del token
      }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserRepository],
  exports: [AuthService],
})
export class AuthModule {}
