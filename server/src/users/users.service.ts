import { User } from './../schemas/users.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    private readonly users: User[];

  constructor(@InjectModel(User.name) private usersModel: Model<User>) {

  }

  async findOne(userName: string): Promise<User | undefined> {
    return this.usersModel.findOne({userName}).exec();
  }
}
