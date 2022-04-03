import { Repository } from 'typeorm';
import { MockType } from 'src/types/mock-type';
import { Permission } from 'src/entities/permission.entity';

export const repositoryMockFactory: () => MockType<Repository<unknown>> =
  jest.fn(() => ({
    findOne: jest.fn((entity: Permission) => entity),
  }));
