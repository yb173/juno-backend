import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePermissionDTO {
  @IsNotEmpty()
  @IsString()
  permission_name: string;
}

export class UpdatePermissionDTO {
  @IsNotEmpty()
  @IsString()
  permission_name: string;
}
