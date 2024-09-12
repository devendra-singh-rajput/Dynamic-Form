import { IsString, IsBoolean, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFormFieldDto {
  @IsString()
  field_name: string;

  @IsString()
  field_type: string;

  @IsString()
  @IsOptional()
  field_label?: string;

  @IsBoolean()
  field_typde: string;}

export class CreateFormDto {
  @IsString()
  name: string;

  @ValidateNested({ each: true })
  @Type(() => CreateFormFieldDto)
  @IsArray()
  form_fields: CreateFormFieldDto[];
}