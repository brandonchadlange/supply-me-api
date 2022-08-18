import { User } from './user.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Project } from './project.entity';
import { EntityBase } from 'src/base/entity';

@Entity()
export class ProjectUser extends EntityBase {
  @ManyToOne((type) => Project, (project) => project.id)
  project: Project;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;
}
