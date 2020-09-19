import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:goodbeysr73@cluster0.7n4nc.mongodb.net/gamingGG?retryWrites=true&w=majority'),
    AuthModule,
    UsersModule,
    DatabaseModule
  ]
})
export class AppModule {}
