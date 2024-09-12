import { Injectable } from '@nestjs/common';
import { CreateDynamicFieldDto } from './dto/create-dynamic_field.dto';
import { UpdateDynamicFieldDto } from './dto/update-dynamic_field.dto';

@Injectable()
export class DynamicFieldService {
  create(createDynamicFieldDto: CreateDynamicFieldDto) {
    return 'This action adds a new dynamicField';
  }

  findAll() {
    return `This action returns all dynamicField`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dynamicField`;
  }

  update(id: number, updateDynamicFieldDto: UpdateDynamicFieldDto) {
    return `This action updates a #${id} dynamicField`;
  }

  remove(id: number) {
    return `This action removes a #${id} dynamicField`;
  }
}
