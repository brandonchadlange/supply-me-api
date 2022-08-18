import { EntityBase } from 'src/base/entity';
import { Entity, ManyToOne } from 'typeorm';
import { ProductVariant } from './product-variant';
import { Supplier } from './supplier.entity';

@Entity()
export class ProductVariantSupplier extends EntityBase {
  @ManyToOne(
    (type) => ProductVariant,
    (productVariant) => productVariant.variantSuppliers,
  )
  productVariant: ProductVariant;

  @ManyToOne((type) => Supplier, (supplier) => supplier.id)
  supplier: Supplier;
}
