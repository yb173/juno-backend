import { Repository } from 'typeorm';
import { MockType } from 'src/types/mock-type';
import { Role } from 'src/entities/role.entity';

export const repositoryMockFactory: () => MockType<Repository<unknown>> =
  jest.fn(() => ({
    findOne: jest.fn((entity: Role) => entity),
  }));
