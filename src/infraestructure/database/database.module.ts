import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from '../../core/entities/user.entity';
import { Auto, AutoSchema } from './schemas/auto.schema'; // ✅ Importa AutoSchema

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/berlin-db'),

    // 🔥 Registra los modelos en MongoDB
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Auto.name, schema: AutoSchema } // ✅ Agrega AutoSchema
    ]),
  ],
  exports: [MongooseModule], // 🔹 Exportamos para que otros módulos puedan usarlo
})
export class DatabaseModule {}
