import { ProductVariant } from 'src/core/entities/product-variant';
import { ProductVariantSupplier } from 'src/core/entities/product-variant-supplier.entity';

export class SupplierVariantResponse {
  id: string;
  supplierId: string;
  name: string;

  constructor(variant: ProductVariantSupplier) {
    this.id = variant.id;
    this.supplierId = variant.supplier.id;
    this.name = variant.supplier.name;
  }
}
