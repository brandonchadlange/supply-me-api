import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductRequest } from './dto/create-product.request';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts() {}

  @Post()
  async createProduct(@Body() request: CreateProductRequest) {}
}
