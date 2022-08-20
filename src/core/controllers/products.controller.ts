import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProductDTO } from '../dto/create-product.dto';
import { ProductsService } from '../services/products.service';
import { SuppliersService } from '../services/suppliers.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly suppliersService: SuppliersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async fetch() {
    return await this.productsService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findVariants() {
    return await this.productsService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Request() request, @Body() createProductDTO: CreateProductDTO) {
    return await this.productsService.quickCreate(createProductDTO.description);
  }

  @UseGuards(JwtAuthGuard)
  @Post('variant/supplier')
  async createSupplierVariant(
    @Query('variant') variantId: string,
    @Query('supplier') supplierId: string,
  ) {
    const productVariant = await this.productsService.findVariant(variantId);
    const supplier = await this.suppliersService.find(supplierId);

    return await this.productsService.createSupplierVariant(
      productVariant,
      supplier,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('variant/supplier')
  async deleteSupplierVariant(
    @Query('supplier_variant') supplierVariantId: number,
  ) {
    return await this.productsService.deleteSupplierVariant(supplierVariantId);
  }
}
