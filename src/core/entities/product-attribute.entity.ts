import { EntityBase } from 'src/base/entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { Product } from './product';

@Entity()
export class ProductAttribute extends EntityBase {
  @ManyToOne((type) => Product, (product) => product.id)
  product: Product;

  @Column()
  name: string;
}
