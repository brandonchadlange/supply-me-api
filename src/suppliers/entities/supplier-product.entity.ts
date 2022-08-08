import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Supplier } from './supplier.entity';

@Entity()
export class SupplierProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Supplier, (supplier) => supplier.id)
  supplier: Supplier;

  @Column()
  description: string;

  @Column()
  websiteUrl: string;
}
