import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FormDataModule } from './form-data/form-data.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/LAW-FIRM"), AuthModule, FormDataModule],
})
export class AppModule {}
