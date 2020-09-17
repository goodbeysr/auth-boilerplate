import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:goodbeysr73@cluster0.7n4nc.mongodb.net/gamingGG?retryWrites=true&w=majority'),
    AuthModule,
    UsersModule
  ]
})
export class AppModule {}
