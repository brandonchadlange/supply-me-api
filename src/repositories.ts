import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectUser } from './projects/entities/project-user.entity';
import { Project } from './projects/entities/project.entity';
import { ProjectSupplierProduct } from './products/entities/project-supplier-product.entity';
import { Product } from './products/entities/product.entity';
import { EmailConfirmation } from './users/entities/email-confirmation.entity';
import { User } from './users/entities/user.entity';

export default {
  USER: TypeOrmModule.forFeature([User]),
  EMAIL_CONFIRMATION: TypeOrmModule.forFeature([EmailConfirmation]),
  SUPPLIER_PRODUCT: TypeOrmModule.forFeature([Product]),
  PROJECT: TypeOrmModule.forFeature([Project]),
  PROJECT_USER: TypeOrmModule.forFeature([ProjectUser]),
  PROJECT_SUPPLIER_PRODUCT: TypeOrmModule.forFeature([ProjectSupplierProduct]),
};
