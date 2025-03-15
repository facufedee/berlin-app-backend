import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga variables de entorno
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/berlin-db'),
  ],
})
export class DatabaseModule {}
