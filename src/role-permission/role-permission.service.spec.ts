import { Test, TestingModule } from '@nestjs/testing';
import { RolePermissionService } from './role-permission.service';

describe('UserService', () => {
  let service: RolePermissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolePermissionService],
    }).compile();

    service = module.get<RolePermissionService>(RolePermissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
