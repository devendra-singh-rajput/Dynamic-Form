import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldController } from './field.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Form, FormSchema } from './entities/field.entity';
// import { DynaminModule } from './dynamin/dynamin.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]), ],
  controllers: [FieldController],
  providers: [FieldService],
})
export class FieldModule {}
