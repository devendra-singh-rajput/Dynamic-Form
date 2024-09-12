import { PartialType } from '@nestjs/mapped-types';
import { CreateFormFieldDto } from './create-field.dto';

export class UpdateFieldDto extends PartialType(CreateFormFieldDto) {}
