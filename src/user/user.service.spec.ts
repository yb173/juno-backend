import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MockType } from 'src/types/mock-type';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { repositoryMockFactory } from './user.service.mock';

describe('UserService', () => {
  let service: UserService;
  let repositoryMock: MockType<Repository<User>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    service = module.get<UserService>(UserService);
    repositoryMock = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find a user', async () => {
    const user: User = {
      user_id: 1,
      user_name: 'test',
      created_by: 'test',
      updated_by: 'test',
      created_at: new Date('2022-01-01T00:00:00+09:00'),
      updated_at: new Date('2022-01-01T00:00:00+09:00'),
    };

    repositoryMock.findOne.mockReturnValue(user);
    expect(await service.findOne(user.user_id)).toEqual(user);
    expect(repositoryMock.findOne).toHaveBeenCalledWith(user.user_id);
  });
});
