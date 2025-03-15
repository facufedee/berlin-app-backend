import { Module } from '@nestjs/common';
import { DatabaseModule } from './infraestructure/database/database.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [DatabaseModule, ProductsModule],
})
export class AppModule {}
