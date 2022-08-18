export class SupplierQuoteItem {
  createNew: boolean;
  id?: number;
  description?: string;
}

export class SupplierQuote {
  createNew: boolean;
  id?: number;
  name?: string;
  products: SupplierQuoteItem[];
}

export class QuoteRequestItemSupplier {
  createNew: boolean;
  id?: number;
  name?: string;
}

class QuoteRequestItem {
  createNew: boolean;
  id?: number;
  description?: string;
  suppliers: QuoteRequestItemSupplier[];
}

export class QuoteRequestDTO {
  products: QuoteRequestItem[];
}
