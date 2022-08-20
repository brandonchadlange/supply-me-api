import { EntityBase } from 'src/base/entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class User extends EntityBase {
  @Column()
  emailAddress: string;

  @Column()
  passwordHash: string;

  @Column({
    default: '',
  })
  firstName: string;

  @Column({
    default: '',
  })
  lastName: string;

  @Column({
    default: false,
  })
  emailConfirmed: boolean;

  @Column({
    default: false,
  })
  onboardingComplete: boolean;

  @ManyToOne((type) => Project, (project) => project.id)
  defaultProject?: Project;
}
