import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

import { UserRole } from 'src/entities/user-role.entity';
import { UserRoleService } from 'src/user-role/user-role.service';
// import { MockType } from 'src/types/mock-type';
import { repositoryMockFactory } from './role-permission.service.mock';

describe('RolePermissionService', () => {
  let service: UserRoleService;
  // let repositoryMock: MockType<Repository<UserRole>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRoleService,
        {
          provide: getRepositoryToken(UserRole),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    service = module.get<UserRoleService>(UserRoleService);
    // repositoryMock = module.get(getRepositoryToken(UserRole));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
