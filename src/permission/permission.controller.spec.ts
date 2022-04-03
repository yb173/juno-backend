import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// import { MockType } from 'src/types/mock-type';
import { Permission } from 'src/entities/permission.entity';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { repositoryMockFactory } from './permission.service.mock';

describe('PermissionController', () => {
  let controller: PermissionController;
  // let repositoryMock: MockType<Repository<User>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissionController],
      providers: [
        PermissionService,
        {
          provide: getRepositoryToken(Permission),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    controller = module.get<PermissionController>(PermissionController);
    // repositoryMock = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
