import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// import { MockType } from 'src/types/mock-type';
import { Role } from 'src/entities/role.entity';
import { RoleService } from './role.service';
import { repositoryMockFactory } from './role.service.mock';

describe('RoleService', () => {
  let service: RoleService;
  // let repositoryMock: MockType<Repository<UserRole>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoleService,
        {
          provide: getRepositoryToken(Role),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    service = module.get<RoleService>(RoleService);
    // repositoryMock = module.get(getRepositoryToken(UserRole));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
