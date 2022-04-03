import { Repository } from 'typeorm';
import { MockType } from 'src/types/mock-type';
import { RolePermission } from 'src/entities/role-permission.entity';

export const repositoryMockFactory: () => MockType<Repository<unknown>> =
  jest.fn(() => ({
    findOne: jest.fn((entity: RolePermission) => entity),
  }));
