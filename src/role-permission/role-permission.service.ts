import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolePermission } from 'src/entities/role-permission.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class RolePermissionService {
  constructor(
    @InjectRepository(RolePermission)
    private readonly rolePermissionRepository: Repository<RolePermission>,
  ) {}

  async create(rolePermission: RolePermission): Promise<InsertResult> {
    return await this.rolePermissionRepository.insert(rolePermission);
  }

  async findAll(): Promise<RolePermission[]> {
    return await this.rolePermissionRepository.find();
  }

  async findOne(id: number): Promise<RolePermission> {
    return await this.rolePermissionRepository.findOne(id);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.rolePermissionRepository.delete(id);
  }
}
