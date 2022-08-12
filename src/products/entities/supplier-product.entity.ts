import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class SupplierProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  websiteUrl: string;
}
