// src/modules/dynamic.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DynamicSchema } from './entities/custom_field.entity';
import { DynamicService } from './custom_field.service';
import { DynamicController } from './custom_field.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'custom', schema: DynamicSchema }])],
  providers: [DynamicService],
  controllers: [DynamicController],
})
export class DynamicModule {}
