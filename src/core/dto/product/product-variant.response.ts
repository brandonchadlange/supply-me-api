import { ProductVariant } from 'src/core/entities/product-variant';
import { SupplierVariantResponse } from '../supplier/supplier-varant.response';

export class ProductVariantResponse {
  id: string;
  productId: string;
  description: string;
  suppliers: SupplierVariantResponse[];

  constructor(variant: ProductVariant) {
    this.id = variant.id;
    this.productId = variant.product.id;
    this.description = variant.product.description;
    this.suppliers = variant.variantSuppliers?.map(
      (vs) => new SupplierVariantResponse(vs),
    );
  }
}
