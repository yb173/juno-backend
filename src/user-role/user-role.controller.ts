import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserRole } from 'src/entities/user-role.entity';
import { DeleteResult, InsertResult } from 'typeorm';
import { CreateUserRoleDTO } from './user-role.dto';
import { UserRoleService } from './user-role.service';

@Controller('user-role')
export class UserRoleController {
  constructor(private readonly service: UserRoleService) {}

  @Post()
  async create(@Body() dto: CreateUserRoleDTO): Promise<InsertResult> {
    const userRole = new UserRole();
    userRole.user_id = dto.user_id;
    userRole.role_id = dto.role_id;
    userRole.created_by = 'juno';
    userRole.updated_by = 'juno';
    return await this.service.create(userRole);
  }

  @Get()
  async findAll(): Promise<UserRole[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserRole> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return await this.service.delete(id);
  }
}
