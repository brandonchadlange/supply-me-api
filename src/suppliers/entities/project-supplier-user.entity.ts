import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProjectSupplier } from './project-supplier.entity';

@Entity()
export class ProjectSupplierUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => ProjectSupplier, (supplier) => supplier.id)
  supplier: ProjectSupplier;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;
}
