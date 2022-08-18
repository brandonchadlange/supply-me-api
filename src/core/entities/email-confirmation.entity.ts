import { EntityBase } from 'src/base/entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class EmailConfirmation extends EntityBase {
  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @Column()
  guid: string;

  @Column()
  otp: string;
}
