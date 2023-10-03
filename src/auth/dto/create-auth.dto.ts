import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @MinLength(2)
  @MaxLength(6)
  username: string;

  @IsEmail()
  @MinLength(6)
  @MaxLength(16)
  email?: string;

  @IsStrongPassword()
  @MinLength(4)
  @MaxLength(12)
  password: string;
}
