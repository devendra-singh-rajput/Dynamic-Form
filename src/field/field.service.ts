import { Injectable } from '@nestjs/common';
import { CreateFormDto, CreateFormFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import { Form } from './entities/field.entity';
import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
export type FormDocument = Document & Form;


@Injectable()
export class FieldService {
  
  constructor(
    @InjectModel(Form.name) private readonly fieldModel: Model<FormDocument>,
  ) {}
  async createForm(createFormDto: CreateFormDto): Promise<Form> {
    const createdForm = new this.fieldModel(createFormDto);
    const result=  await createdForm.save();
    return result
  }

  findAll() {
    return `This action returns all field`;
  }

  findOne(id: number) {
    return `This action returns a #${id} field`;
  }

  update(id: number, updateFieldDto: UpdateFieldDto) {
    return `This action updates a #${id} field`;
  }

  remove(id: number) {
    return `This action removes a #${id} field`;
  }
}
