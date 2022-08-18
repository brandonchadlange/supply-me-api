import { EntityBase } from 'src/base/entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Supplier extends EntityBase {
  @Column()
  name: string;

  @Column()
  slug: string;
}
