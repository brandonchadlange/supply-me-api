import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emailAddress: string;

  @Column()
  passwordHash: string;

  @Column({
    default: false,
  })
  emailConfirmed: boolean;
}
