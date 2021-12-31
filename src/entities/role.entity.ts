import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity({ name: 'juno.role' })
export class Role extends Base {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column()
  role_name: string;
}
