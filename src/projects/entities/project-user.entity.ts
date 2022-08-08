import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class ProjectUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Project, (project) => project.id)
  project: Project;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;
}
