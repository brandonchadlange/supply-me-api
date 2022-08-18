import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProductVariantSupplier } from '../entities/product-variant-supplier.entity';
import { QuoteRequestCreatedEvent } from '../events/quote-request-created.event';
import { ProductsService } from '../services/products.service';
import { QuoteRequestsService } from '../services/quote-request.service';
import { SuppliersService } from '../services/suppliers.service';
import { UsersService } from '../services/users.service';

@Controller('quote-request')
export class QuoteRequestsController {
  constructor(
    private readonly usersService: UsersService,
    private readonly quoteRequestsService: QuoteRequestsService,
    private readonly suppliersService: SuppliersService,
    private readonly productsService: ProductsService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() productSupplierVariants: string[]) {
    const productVariantSuppliers: ProductVariantSupplier[] = [];
    const quoteRequest = await this.quoteRequestsService.create();

    for await (const productSupplierVariantId of productSupplierVariants) {
      const productVariantSupplier =
        await this.productsService.findSupplierVariant(
          productSupplierVariantId,
        );

      productVariantSuppliers.push(productVariantSupplier);

      const quoteRequestSupplier =
        await this.quoteRequestsService.createQuoteSupplier(
          quoteRequest,
          productVariantSupplier.supplier,
        );

      await this.quoteRequestsService.addVariantToSupplier(
        quoteRequestSupplier,
        productVariantSupplier,
      );
    }

    const products = productVariantSuppliers.map(
      (e) => e.productVariant.product,
    );

    const suppliers = productVariantSuppliers.map((e) => e.supplier);
    const supplierMap = suppliers.map((e) => e.id);
    const uniqueSuppliers = [];

    supplierMap.forEach((item) => {
      if (!uniqueSuppliers.includes(item)) {
        uniqueSuppliers.push(item);
      }
    });

    const suppliersFull = uniqueSuppliers.map((e) =>
      suppliers.find((s) => s.id === e),
    );

    this.eventEmitter.emit(
      'quote-request.created',
      new QuoteRequestCreatedEvent(suppliersFull, productVariantSuppliers),
    );
  }
}
