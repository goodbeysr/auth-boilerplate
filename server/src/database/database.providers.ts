import * as mongoose from 'mongoose';

export const DB = Symbol('DB_CONNECTION');

export const databaseProviders = [
  {
    provide: DB,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://admin:goodbeysr73@cluster0.7n4nc.mongodb.net/gamingGG?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
  },
];