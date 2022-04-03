import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// import { MockType } from 'src/types/mock-type';
import { RolePermission } from 'src/entities/role-permission.entity';
import { RolePermissionController } from './role-permission.controller';
import { RolePermissionService } from './role-permission.service';

import { repositoryMockFactory } from './role-permission.service.mock';

describe('UserController', () => {
  let controller: RolePermissionController;
  // let repositoryMock: MockType<Repository<User>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolePermissionController],
      providers: [
        RolePermissionService,
        {
          provide: getRepositoryToken(RolePermission),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    controller = module.get<RolePermissionController>(RolePermissionController);
    // repositoryMock = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
