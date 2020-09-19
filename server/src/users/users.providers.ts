import { DB } from './../database/database.providers';
import { UserSchema, USER_MODEL } from './../schemas/users.schema';
import { Connection } from 'mongoose';

export const usersProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: [DB],
  },
];