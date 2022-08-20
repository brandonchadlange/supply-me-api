import { ProductVariantSupplier } from "../entities/product-variant-supplier.entity";

export class QuoteRequestDTO {
  reference: string;
  productSupplierVariants: string[];
}