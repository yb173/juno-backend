import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDTO): Promise<InsertResult> {
    const user = new User();
    user.user_name = dto.user_name;
    user.created_by = 'juno';
    user.updated_by = 'juno';
    return await this.service.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.service.findAll();
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: number): Promise<User> {
    return await this.service.findOne(userId);
  }

  @Put(':userId')
  async update(
    @Param('userId') userId: number,
    @Body() dto: UpdateUserDTO,
  ): Promise<UpdateResult> {
    return await this.service.update(userId, dto);
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: number): Promise<DeleteResult> {
    return await this.service.delete(userId);
  }
}
