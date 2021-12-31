import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from 'src/entities/permission.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async findAll(): Promise<Permission[]> {
    return await this.permissionRepository.find();
  }

  async findOne(id: number): Promise<Permission> {
    return await this.permissionRepository.findOne(id);
  }

  async create(permission: Permission): Promise<InsertResult> {
    return await this.permissionRepository.insert(permission);
  }

  async update(
    permissionId: number,
    permission: Partial<Permission>,
  ): Promise<UpdateResult> {
    return await this.permissionRepository.update(permissionId, permission);
  }

  async delete(permissionId: number): Promise<DeleteResult> {
    return await this.permissionRepository.delete(permissionId);
  }
}
