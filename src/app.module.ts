import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FieldModule } from './field/field.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DynamicModule } from './custom_field/custom_field.module';
import { DynamicFieldModule } from './dynamic_field/dynamic_field.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/formField'),FieldModule, DynamicModule, DynamicFieldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
