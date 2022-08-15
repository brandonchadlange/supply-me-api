import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class EmailConfirmation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @Column()
  guid: string;

  @Column()
  otp: string;
}
