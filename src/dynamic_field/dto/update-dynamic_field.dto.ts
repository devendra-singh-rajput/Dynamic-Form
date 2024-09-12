import { PartialType } from '@nestjs/mapped-types';
import { CreateDynamicFieldDto } from './create-dynamic_field.dto';

export class UpdateDynamicFieldDto extends PartialType(CreateDynamicFieldDto) {}
