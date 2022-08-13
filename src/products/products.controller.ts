import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProjectsService } from 'src/projects/projects.service';
import { CreateProductRequest } from './dto/create-product.request';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly projectsService: ProjectsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProducts(@Query('project') projectId: number) {
    const project = await this.projectsService.findOneById(projectId);
    return await this.productsService.find(project);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createProduct(@Body() request: CreateProductRequest) {
    const project = await this.projectsService.findOneById(request.projectId);
    const product = await this.productsService.create(
      request.description,
      project,
    );
    return product;
  }
}
