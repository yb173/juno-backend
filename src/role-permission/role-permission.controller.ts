import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RolePermission } from 'src/entities/role-permission.entity';
import { DeleteResult, InsertResult } from 'typeorm';
import { CreateRolePermissionDTO } from './role-permission.dto';
import { RolePermissionService } from './role-permission.service';

@Controller('role-permission')
export class RolePermissionController {
  constructor(private readonly service: RolePermissionService) {}

  @Post()
  async create(@Body() dto: CreateRolePermissionDTO): Promise<InsertResult> {
    const rolePermission = new RolePermission();
    rolePermission.role_id = dto.role_id;
    rolePermission.permission_id = dto.permission_id;
    rolePermission.created_by = 'juno';
    rolePermission.updated_by = 'juno';
    return await this.service.create(rolePermission);
  }

  @Get()
  async findAll(): Promise<RolePermission[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RolePermission> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return await this.service.delete(id);
  }
}
