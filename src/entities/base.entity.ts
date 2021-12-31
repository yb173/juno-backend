import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class Base {
  @CreateDateColumn()
  created_at: Date;

  @Column()
  created_by: string;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  updated_by: string;
}
