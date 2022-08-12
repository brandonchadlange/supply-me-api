import { Project } from 'src/projects/entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ProjectSupplierProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
