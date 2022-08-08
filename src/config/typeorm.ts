import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectSupplierProduct } from 'src/suppliers/entities/project-supplier-product.entity';
import { ProjectSupplierUser } from 'src/suppliers/entities/project-supplier-user.entity';
import { ProjectSupplier } from 'src/suppliers/entities/project-supplier.entity';
import { SupplierProduct } from 'src/suppliers/entities/supplier-product.entity';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { User } from 'src/users/entities/user.entity';

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
    Supplier,
    SupplierProduct,
    ProjectSupplier,
    ProjectSupplierProduct,
    ProjectSupplierUser,
  ],
  synchronize: true,
});

export default DB_MODULE;
