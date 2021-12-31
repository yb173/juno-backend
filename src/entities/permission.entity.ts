import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity({ name: 'juno.permission' })
export class Permission extends Base {
  @PrimaryGeneratedColumn()
  permission_id: number;

  @Column()
  permission_name: string;
}
