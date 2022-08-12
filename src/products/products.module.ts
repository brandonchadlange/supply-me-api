import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import repositories from 'src/repositories';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  imports: [
    repositories.SUPPLIER_PRODUCT,
    repositories.PROJECT_SUPPLIER_PRODUCT,
    ProjectsModule,
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
