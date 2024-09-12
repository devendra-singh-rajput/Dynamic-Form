import { Module } from '@nestjs/common';
import { DynamicFieldService } from './dynamic_field.service';
import { DynamicFieldController } from './dynamic_field.controller';

@Module({
  controllers: [DynamicFieldController],
  providers: [DynamicFieldService],
})
export class DynamicFieldModule {}
