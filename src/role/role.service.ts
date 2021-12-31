import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';

import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(role: Role): Promise<InsertResult> {
    return await this.roleRepository.insert(role);
  }

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async findOne(id: string): Promise<Role> {
    return await this.roleRepository.findOne(id);
  }

  async update(roleId: number, role: Partial<Role>): Promise<UpdateResult> {
    return await this.roleRepository.update(roleId, role);
  }

  async delete(roleId: number): Promise<DeleteResult> {
    return await this.roleRepository.delete(roleId);
  }
}
