import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// import { MockType } from 'src/types/mock-type';
import { Permission } from 'src/entities/permission.entity';
import { PermissionService } from './permission.service';
import { repositoryMockFactory } from './permission.service.mock';

describe('PermissionService', () => {
  let service: PermissionService;
  // let repositoryMock: MockType<Repository<UserRole>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PermissionService,
        {
          provide: getRepositoryToken(Permission),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    service = module.get<PermissionService>(PermissionService);
    // repositoryMock = module.get(getRepositoryToken(UserRole));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
