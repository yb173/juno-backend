import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// import { MockType } from 'src/types/mock-type';
import { UserRole } from 'src/entities/user-role.entity';
import { UserRoleController } from './user-role.controller';
import { UserRoleService } from './user-role.service';
import { repositoryMockFactory } from './user-role.service.mock';

describe('UserController', () => {
  let controller: UserRoleController;
  // let repositoryMock: MockType<Repository<User>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRoleController],
      providers: [
        UserRoleService,
        {
          provide: getRepositoryToken(UserRole),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    controller = module.get<UserRoleController>(UserRoleController);
    // repositoryMock = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
