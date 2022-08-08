import { Project } from 'src/projects/entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ProjectSupplier {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Project, (project) => project.id)
  project: Project;

  @Column()
  name: string;

  @Column()
  websiteUrl: string;

  @Column()
  domain: string;
}
