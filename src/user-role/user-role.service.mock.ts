import { Repository } from 'typeorm';
import { MockType } from 'src/types/mock-type';
import { UserRole } from 'src/entities/user-role.entity';

export const repositoryMockFactory: () => MockType<Repository<unknown>> =
  jest.fn(() => ({
    findOne: jest.fn((entity: UserRole) => entity),
  }));
