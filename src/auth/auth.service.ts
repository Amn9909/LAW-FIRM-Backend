import { HttpException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { users, usersDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(users.name) private readonly user_repo: Model<usersDocument>,
  ) {}
  async create(user_data: CreateAuthDto) {
    console.log('this is user data ', user_data);
    const result = await this.user_repo.create(user_data);
    return result;
  }

  async checkUser(login_data) {
    const result = await this.user_repo.findOne({
      username: login_data.username,
    });
    if (result) {
      return 'valid user';
    } else {
      throw new HttpException('invalid user', 400);
    }
  }

  async resetPassword(id, body) {
    const response = await this.user_repo.findByIdAndUpdate(id, {
      password: body.password,
    });
    return response;
  }
}
