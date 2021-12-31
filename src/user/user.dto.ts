import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  user_name: string;
}

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsString()
  user_name: string;
}
