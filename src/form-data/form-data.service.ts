import { Injectable } from '@nestjs/common';
import { CreateFormDatumDto } from './dto/create-form-datum.dto';
import { UpdateFormDatumDto } from './dto/update-form-datum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { form, formDocument } from './schemas/formdata.schema';
import { Model } from 'mongoose';

@Injectable()
export class FormDataService {
  constructor(
    @InjectModel(form.name) private readonly formRepo: Model<formDocument>,
  ) {}

  async create(createFormDatumDto: CreateFormDatumDto) {
    const response = await this.formRepo.create(createFormDatumDto);
    return response;
  }

  async findAll() {
    return await this.formRepo.find();
  }
}
