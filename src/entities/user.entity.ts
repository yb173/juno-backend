import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity({ name: 'juno.user' })
export class User extends Base {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;
}
