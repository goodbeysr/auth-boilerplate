import { usersProviders } from './users.providers';
import { DatabaseModule } from './../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from './../schemas/users.schema';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  imports: [
    DatabaseModule
  ],
  exports: [UsersService],
  providers: [
    UsersService,
    ...usersProviders
  ]
})
export class UsersModule {}
