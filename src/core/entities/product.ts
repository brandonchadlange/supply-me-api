import { EntityBase } from 'src/base/entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { ProductVariant } from './product-variant';

@Entity()
export class Product extends EntityBase {
  @Column()
  description: string;

  @Column()
  slug: string;

  @OneToMany((type) => ProductVariant, (variant) => variant.product)
  variants: ProductVariant[];
}
