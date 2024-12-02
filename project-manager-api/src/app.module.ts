import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';
import { User } from './entities/user.entity';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { AuthController } from 'auth/auth.controller';
import { AuthModule } from 'auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'db',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Category, Product , AuthController],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    CategoryModule,
    ProductModule,
    AuthModule
  ],
})
export class AppModule {}
