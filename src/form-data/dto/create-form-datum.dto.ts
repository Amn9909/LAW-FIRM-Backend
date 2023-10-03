import { IsNumber, IsString, MaxLength, MinLength, minLength } from 'class-validator';

export class CreateFormDatumDto {
  @IsString()
  @MinLength(2)
  @MaxLength(16)
  name: string;

  @IsString()
  @MinLength(12)
  description: string;

  @IsNumber()
  price: number;
}
