import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

  @Prop({required: true, type: String})
  firstName: string;

  @Prop({required: true, type: String})
  lastName: string;

  @Prop({required: true, type: String})
  userName: string;

  @Prop({required: true, type: String})
  password: string;

  @Prop({required: true, type: String, enum: ['user','admin']})
  role: string;

}

export const UserSchema = SchemaFactory.createForClass(User);