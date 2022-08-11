import { Module } from '@nestjs/common';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import repositories from 'src/repositories';
import { FormattersModule } from 'src/formatters/formatters.module';
import { ProjectsModule } from 'src/projects/projects.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    repositories.SUPPLIER,
    repositories.SUPPLIER_PRODUCT,
    repositories.PROJECT_SUPPLIER,
    repositories.PROJECT_SUPPLIER_PRODUCT,
    ProjectsModule,
    UsersModule,
    FormattersModule,
  ],
  controllers: [SuppliersController],
  providers: [SuppliersService],
})
export class SuppliersModule {}
