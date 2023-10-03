import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type usersDocument = HydratedDocument<users>;

@Schema({
    timestamps : true
})
export class users {
  @Prop({
    required: true,
  })
  username: string;

  @Prop()
  email?: string;

  @Prop({
    required: true,
  })
  password: string;
}

export const userSchema = SchemaFactory.createForClass(users);
