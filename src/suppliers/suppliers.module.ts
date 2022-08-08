import { Module } from '@nestjs/common';
import repositories from 'src/repositories';

@Module({
  imports: [
    repositories.SUPPLIER,
    repositories.SUPPLIER_PRODUCT,
    repositories.PROJECT_SUPPLIER,
    repositories.PROJECT_SUPPLIER_PRODUCT,
    repositories.PROJECT_SUPPLIER_USER,
  ],
})
export class SuppliersModule {}
