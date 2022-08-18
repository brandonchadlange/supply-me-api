import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() productSupplierVariants: string[]) {
    const quoteRequest = await this.quoteRequestsService.create();

    for await (const productSupplierVariantId of productSupplierVariants) {
      const productVariantSupplier =
        await this.productsService.findSupplierVariant(
          productSupplierVariantId,
        );

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
  }
}
