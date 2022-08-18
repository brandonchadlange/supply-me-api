import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { HashModule } from 'src/hash/hash.module';
import { EmailConfirmation } from './entities/email-confirmation.entity';
import { EmailConfirmationService } from './services/email-confirmation.service';
import { Project } from './entities/project.entity';
import { ProjectUser } from './entities/project-user.entity';
import { ProjectsService } from './services/projects.service';
import { FormattersModule } from 'src/formatters/formatters.module';
import { QuoteRequestsService } from './services/quote-request.service';
import { QuoteRequestsController } from './controllers/quote-request.controller';
import { QuoteRequest } from './entities/quote-request.entity';
import { QuoteRequestSupplier } from './entities/quote-request-supplier.entity';
import { QuoteRequestSupplierVariant } from './entities/quote-request-supplier-variant.entity';
import { SuppliersService } from './services/suppliers.service';
import { Supplier } from './entities/supplier.entity';
import { ProductsService } from './services/products.service';
import { Product } from './entities/product';
import { ProductVariant } from './entities/product-variant';
import { ProductVariantSupplier } from './entities/product-variant-supplier.entity';
import { SuppliersController } from './controllers/suppliers.controller';
import { ProductsController } from './controllers/products.controller';
import { ProjectInjectorMiddleware } from './middleware/project-injector.middleware';

@Module({
  imports: [
    HashModule,
    FormattersModule,
    TypeOrmModule.forFeature([
      User,
      EmailConfirmation,
      Project,
      ProjectUser,
      Product,
      ProductVariant,
      ProductVariantSupplier,
      Supplier,
      QuoteRequest,
      QuoteRequestSupplier,
      QuoteRequestSupplierVariant,
    ]),
  ],
  controllers: [
    UsersController,
    ProductsController,
    SuppliersController,
    QuoteRequestsController,
  ],
  providers: [
    UsersService,
    EmailConfirmationService,
    ProjectsService,
    SuppliersService,
    ProductsService,
    QuoteRequestsService,
  ],
  exports: [UsersService],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProjectInjectorMiddleware).forRoutes('suppliers');
  }
}
