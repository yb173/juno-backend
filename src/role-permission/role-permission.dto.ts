import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRolePermissionDTO {
  @IsNotEmpty()
  @IsNumber()
  role_id: number;

  @IsNotEmpty()
  @IsNumber()
  permission_id: number;
}
