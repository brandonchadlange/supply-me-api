import { Product } from '../entities/product';
import { ProductVariantSupplier } from '../entities/product-variant-supplier.entity';
import { Supplier } from '../entities/supplier.entity';

export class QuoteRequestCreatedEvent {
  constructor(
    public readonly suppliers: Supplier[],
    public readonly productVariantSuppliers: ProductVariantSupplier[],
  ) {}
}
