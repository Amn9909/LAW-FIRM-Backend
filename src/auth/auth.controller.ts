import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { loginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async checkHealth(){
    return "health is ok !"
  }

  @Post()
  async create(@Body() user_data: CreateAuthDto) {
    console.log("inside create new user")
    const result = await this.authService.create(user_data)
    return result
  }

  @Post("login")
  async login(@Body() login_data: loginDTO) {
    console.log("inside login check")
    const result = await this.authService.checkUser(login_data)
    return result
  }

  @Post('reset/pass/:id')
  async resetPass(@Param("id") id : any ,@Body() body : any){
    const result = await this.authService.resetPassword(id,body)
  }

}
