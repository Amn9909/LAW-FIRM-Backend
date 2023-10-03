import { PartialType } from '@nestjs/mapped-types';
import { CreateFormDatumDto } from './create-form-datum.dto';

export class UpdateFormDatumDto extends PartialType(CreateFormDatumDto) {}
