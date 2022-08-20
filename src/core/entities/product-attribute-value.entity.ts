import { EntityBase } from 'src/base/entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { ProductAttribute } from './product-attribute.entity';

@Entity()
export class ProductAttributeValue extends EntityBase {
  @ManyToOne((type) => ProductAttribute, (attribute) => attribute.id)
  attribute: ProductAttribute;

  @Column()
  value: string;
}
