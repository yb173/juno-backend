import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MockType } from 'src/types/mock-type';
import { User } from 'src/entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { repositoryMockFactory } from './user.service.mock';

describe('UserController', () => {
  let controller: UserController;
  let repositoryMock: MockType<Repository<User>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    controller = module.get<UserController>(UserController);
    repositoryMock = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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
    expect(await controller.findOne(user.user_id)).toEqual(user);
    expect(repositoryMock.findOne).toHaveBeenCalledWith(user.user_id);
  });
});
