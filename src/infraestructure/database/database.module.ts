import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from '../../core/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/berlin-db'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // 🔹 Se registra UserModel
  ],
  exports: [MongooseModule], // 🔹 Exportamos para que otros módulos puedan usarlo
})
export class DatabaseModule {}
