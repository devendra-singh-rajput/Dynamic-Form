// src/controllers/dynamic.controller.ts

import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { DynamicService } from './custom_field.service';

@Controller('dynamic')
export class DynamicController {
  constructor(private readonly dynamicService: DynamicService) {}

  @Post()
  async create(@Body() data: any) {
    return this.dynamicService.create(data);
  }

  @Get()
  async findAll() {
    return this.dynamicService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.dynamicService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.dynamicService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.dynamicService.delete(id);
  }
}
