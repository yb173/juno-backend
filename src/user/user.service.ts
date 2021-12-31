import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<InsertResult> {
    return await this.userRepository.insert(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async update(userId: number, user: Partial<User>): Promise<UpdateResult> {
    return await this.userRepository.update(userId, user);
  }

  async delete(userId: number): Promise<DeleteResult> {
    return await this.userRepository.delete(userId);
  }
}
