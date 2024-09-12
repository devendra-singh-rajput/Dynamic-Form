// form.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Form extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'FormField' }] })
  form_fields: FormField[];
}

export const FormSchema = SchemaFactory.createForClass(Form);
