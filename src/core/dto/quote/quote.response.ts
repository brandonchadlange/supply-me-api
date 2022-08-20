import { QuoteRequest } from "src/core/entities/quote-request.entity";
import { DateTime } from 'luxon';

export class QuoteResponse {
  id: string;
  reference: string;
  dateCreated: string;
  uniqueProducts: number;
  uniqueSuppliers: number;

  constructor(quote: QuoteRequest) {
    this.id = quote.id;
    this.reference = quote.reference;
    this.dateCreated = DateTime.fromJSDate(new Date(quote.dateCreated)).toLocaleString();
    this.uniqueProducts = quote.uniqueProducts;
    this.uniqueSuppliers = quote.uniqueSuppliers;
  }
}
