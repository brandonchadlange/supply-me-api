import { EntityBase } from 'src/base/entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Supplier extends EntityBase {
  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({
    default: '',
  })
  websiteUrl: string;

  @Column()
  contactName: string;

  @Column()
  contactEmail: string;
}
