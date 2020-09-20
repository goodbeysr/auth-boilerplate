import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

  @Prop({required: true, type: String})
  firstName: string;

  @Prop({required: true, type: String})
  lastName: string;

  @Prop({required: true, type: String})
  username: string;

  @Prop({required: true, type: String})
  password: string;

  @Prop({required: true, type: String, enum: ['user','admin']})
  role: string;

}

export interface UserModel extends Document {
  
  readonly firstName: string;
  
  readonly lastName: string;

  readonly username: string;
  
  readonly password: string;

  readonly role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const USER_MODEL = Symbol('USER_MODEL');