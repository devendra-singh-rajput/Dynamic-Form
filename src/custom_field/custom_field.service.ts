// src/services/dynamic.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DynamicDocument } from './dynamic.interface';

@Injectable()
export class DynamicService {
  constructor(
    @InjectModel('Dynamic') private readonly dynamicModel: Model<DynamicDocument>,
  ) {}

  async create(data: any): Promise<any> {
    const createdData = new this.dynamicModel(data);
    return await createdData.save();
  }

  async findAll(): Promise<any[]> {
    return await this.dynamicModel.find().exec();
  }

  async findOne(id: string): Promise<any> {
    return await this.dynamicModel.findById(id).exec();
  }

  async update(id: string, data: any): Promise<any> {
    return await this.dynamicModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.dynamicModel.findByIdAndDelete(id).exec();
  }
}
