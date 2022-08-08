import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProjectSupplier } from './project-supplier.entity';

@Entity()
export class ProjectSupplierProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => ProjectSupplier, (supplier) => supplier.id)
  supplier: ProjectSupplier;

  @Column()
  description: string;

  @Column()
  websiteUrl: string;
}
