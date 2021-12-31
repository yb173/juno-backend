import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Role } from 'src/entities/role.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateRoleDTO, UpdateRoleDTO } from './role.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @Post()
  async create(@Body() dto: CreateRoleDTO): Promise<InsertResult> {
    const role = new Role();
    role.role_name = dto.role_name;
    role.created_by = 'juno';
    role.updated_by = 'juno';
    return await this.service.create(role);
  }

  @Get()
  async findAll(): Promise<Role[]> {
    return await this.service.findAll();
  }

  @Get(':roleId')
  async findOne(@Param('roleId') roleId: string): Promise<Role> {
    return await this.service.findOne(roleId);
  }

  @Put(':roleId')
  async update(
    @Param('roleId') roleId: number,
    @Body() dto: UpdateRoleDTO,
  ): Promise<UpdateResult> {
    return await this.service.update(roleId, dto);
  }

  @Delete(':roleId')
  async delete(@Param('roleId') roleId: number): Promise<DeleteResult> {
    return await this.service.delete(roleId);
  }
}
