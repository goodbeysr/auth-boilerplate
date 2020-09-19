import { User, UserModel, USER_MODEL } from './../schemas/users.schema';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    private readonly users: User[];

  constructor(@Inject(USER_MODEL) private usersModel: Model<UserModel>) {

  }

  async findOne(userName: string): Promise<UserModel | undefined> {
    return this.usersModel.findOne({userName}).exec();
  }
}
