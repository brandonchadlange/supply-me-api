import { EntityBase } from 'src/base/entity';
import { Entity, ManyToOne } from 'typeorm';
import { QuoteRequest } from './quote-request.entity';
import { Supplier } from './supplier.entity';

@Entity()
export class QuoteRequestSupplier extends EntityBase {
  @ManyToOne((type) => QuoteRequest, (quoteRequest) => quoteRequest.id)
  quoteRequest: QuoteRequest;

  @ManyToOne((type) => Supplier, (supplier) => supplier.id)
  supplier: Supplier;
}
