import { EntityBase } from 'src/base/entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class QuoteRequest extends EntityBase {
  @Column({ default: 'GT-0001' })
  reference: string;
}
