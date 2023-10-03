import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormDataService } from './form-data.service';
import { CreateFormDatumDto } from './dto/create-form-datum.dto';
import { UpdateFormDatumDto } from './dto/update-form-datum.dto';

@Controller('form-data')
export class FormDataController {
  constructor(private readonly formDataService: FormDataService) {}

  @Post()
  async create(@Body() createFormDatumDto: CreateFormDatumDto) {
    const result = await this.formDataService.create(createFormDatumDto);
    return result
  }

  @Get()
  findAll() {
    return this.formDataService.findAll();
  }
}
