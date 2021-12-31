import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from 'src/entities/user-role.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
  ) {}

  async create(userRole: UserRole): Promise<InsertResult> {
    return await this.userRoleRepository.insert(userRole);
  }

  async findAll(): Promise<UserRole[]> {
    return await this.userRoleRepository.find();
  }

  async findOne(id: number): Promise<UserRole> {
    return await this.userRoleRepository.findOne(id);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userRoleRepository.delete(id);
  }
}
