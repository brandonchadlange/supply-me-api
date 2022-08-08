import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectUser } from './projects/entities/project-user.entity';
import { Project } from './projects/entities/project.entity';
import { ProjectSupplierProduct } from './suppliers/entities/project-supplier-product.entity';
import { ProjectSupplier } from './suppliers/entities/project-supplier.entity';
import { SupplierProduct } from './suppliers/entities/supplier-product.entity';
import { Supplier } from './suppliers/entities/supplier.entity';
import { User } from './users/entities/user.entity';

export default {
  USER: TypeOrmModule.forFeature([User]),
  SUPPLIER: TypeOrmModule.forFeature([Supplier]),
  SUPPLIER_PRODUCT: TypeOrmModule.forFeature([SupplierProduct]),
  PROJECT: TypeOrmModule.forFeature([Project]),
  PROJECT_USER: TypeOrmModule.forFeature([ProjectUser]),
  PROJECT_SUPPLIER: TypeOrmModule.forFeature([ProjectSupplier]),
  PROJECT_SUPPLIER_PRODUCT: TypeOrmModule.forFeature([ProjectSupplierProduct]),
};
