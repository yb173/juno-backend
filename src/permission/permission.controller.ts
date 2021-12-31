import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Permission } from 'src/entities/permission.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreatePermissionDTO, UpdatePermissionDTO } from './permission.dto';
import { PermissionService } from './permission.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly service: PermissionService) {}

  @Post()
  async create(@Body() dto: CreatePermissionDTO): Promise<InsertResult> {
    const permission = new Permission();
    permission.permission_name = dto.permission_name;
    permission.created_by = 'juno';
    permission.updated_by = 'juno';
    return await this.service.create(permission);
  }

  @Get()
  async findAll(): Promise<Permission[]> {
    return await this.service.findAll();
  }

  @Get(':permissionId')
  async findOne(
    @Param('permissionId') permissionId: number,
  ): Promise<Permission> {
    return await this.service.findOne(permissionId);
  }

  @Put(':permissionId')
  async update(
    @Param('permissionId') permissionId: number,
    @Body() dto: UpdatePermissionDTO,
  ): Promise<UpdateResult> {
    return await this.service.update(permissionId, dto);
  }

  @Delete(':permissionId')
  async delete(
    @Param('permissionId') permissionId: number,
  ): Promise<DeleteResult> {
    return await this.service.delete(permissionId);
  }
}
