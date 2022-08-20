import { EntityBase } from 'src/base/entity';
import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { Product } from './product';
import { ProductVariantSupplier } from './product-variant-supplier.entity';

@Entity()
export class ProductVariant extends EntityBase {
  @ManyToOne((type) => Product, (product) => product.variants)
  product: Product;

  @OneToMany(
    (type) => ProductVariantSupplier,
    (variantSupplier) => variantSupplier.productVariant,
  )
  variantSuppliers: ProductVariantSupplier[];
}
