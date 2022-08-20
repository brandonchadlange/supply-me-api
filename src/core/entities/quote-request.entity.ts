import { EntityBase } from 'src/base/entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class QuoteRequest extends EntityBase {
  @Column({ default: "" })
  reference: string;

  @Column({ type: 'datetime', default: () => `STRFTIME(DATETIME('now'))` }) 
  dateCreated: string

  @Column({ default: 0 })
  uniqueProducts: number;

  @Column({ default: 0 })
  uniqueSuppliers: number;
}
