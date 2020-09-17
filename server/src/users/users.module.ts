import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from './../schemas/users.schema';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  exports: [UsersService],
  providers: [UsersService]
})
export class UsersModule {}
