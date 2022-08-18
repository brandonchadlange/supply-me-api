import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailConfirmation } from './core/entities/email-confirmation.entity';
import { Product } from './core/entities/product';
import { ProductVariant } from './core/entities/product-variant';
import { ProductVariantSupplier } from './core/entities/product-variant-supplier.entity';
import { ProjectUser } from './core/entities/project-user.entity';
import { Project } from './core/entities/project.entity';
import { QuoteRequestSupplierVariant } from './core/entities/quote-request-supplier-variant.entity';
import { QuoteRequestSupplier } from './core/entities/quote-request-supplier.entity';
import { QuoteRequest } from './core/entities/quote-request.entity';
import { Supplier } from './core/entities/supplier.entity';
import { User } from './core/entities/user.entity';

const { NODE_ENV, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } =
  process.env;

const DB_TYPE = NODE_ENV === 'production' ? 'mysql' : 'sqlite';

const DB_MODULE = TypeOrmModule.forRoot({
  type: DB_TYPE,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: parseInt(DB_PORT),
  entities: [
    User,
    EmailConfirmation,
    Project,
    ProjectUser,
    Supplier,
    Product,
    ProductVariant,
    ProductVariantSupplier,
    QuoteRequest,
    QuoteRequestSupplier,
    QuoteRequestSupplierVariant
  ],
  synchronize: true,
});

export default DB_MODULE;
