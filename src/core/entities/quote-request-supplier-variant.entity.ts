import { EntityBase } from 'src/base/entity';
import { Entity, ManyToOne } from 'typeorm';
import { ProductVariantSupplier } from './product-variant-supplier.entity';
import { QuoteRequestSupplier } from './quote-request-supplier.entity';

@Entity()
export class QuoteRequestSupplierVariant extends EntityBase {
  @ManyToOne(
    (type) => QuoteRequestSupplier,
    (quoteRequestSupplier) => quoteRequestSupplier.id,
  )
  quoteRequestSupplier: QuoteRequestSupplier;

  @ManyToOne(
    (type) => ProductVariantSupplier,
    (productVariantSupplier) => productVariantSupplier.id,
  )
  productVariantSupplier: ProductVariantSupplier;
}
