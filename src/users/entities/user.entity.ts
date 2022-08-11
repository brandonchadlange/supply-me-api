import { Project } from 'src/projects/entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
