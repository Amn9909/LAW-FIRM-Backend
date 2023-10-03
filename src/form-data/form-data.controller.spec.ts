import { Test, TestingModule } from '@nestjs/testing';
import { FormDataController } from './form-data.controller';
import { FormDataService } from './form-data.service';

describe('FormDataController', () => {
  let controller: FormDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormDataController],
      providers: [FormDataService],
    }).compile();

    controller = module.get<FormDataController>(FormDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
