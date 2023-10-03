import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type formDocument = HydratedDocument<form>;

@Schema({
  timestamps: true,
})
export class form {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const formSchema = SchemaFactory.createForClass(form);