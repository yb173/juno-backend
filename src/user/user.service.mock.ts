import { User } from 'src/entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { MockType } from '../types/mock-type';

export const repositoryMockFactory: () => MockType<Repository<unknown>> =
  jest.fn(() => ({
    findOne: jest.fn((entity: User) => entity),
    update: jest.fn((id: number, user: Partial<User>) => {
      const expectedUser: User = {
        user_id: user.user_id,
        user_name: user.user_name,
        created_by: 'test',
        updated_by: user.updated_by,
        created_at: new Date('2022-01-01T00:00:00+09:00'),
        updated_at: user.updated_at,
      };
      const result: UpdateResult = {
        raw: [],
        generatedMaps: [expectedUser],
        affected: 1,
      };

      return result;
    }),
  }));
