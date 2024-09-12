import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class FormField {
  @Prop({ required: true })
  field_name: string;

  @Prop({ required: true })
  field_type: string;

  @Prop()
  field_label: string;

  @Prop({ default: false })
  field_nam: string;

}

@Schema()
export class Form extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [FormField], default: [] })
  form_fields: FormField[];
}

export const FormSchema = SchemaFactory.createForClass(Form);

