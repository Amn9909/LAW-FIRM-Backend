import { Module } from '@nestjs/common';
import { FormDataService } from './form-data.service';
import { FormDataController } from './form-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { form, formSchema } from './schemas/formdata.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: form.name, schema: formSchema }]),
  ],
  controllers: [FormDataController],
  providers: [FormDataService],
})
export class FormDataModule {}
