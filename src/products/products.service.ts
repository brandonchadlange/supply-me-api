import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProjectSupplierProduct } from './entities/project-supplier-product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRespository: Repository<Product>,
  ) {}

  async find(project: Project) {
    return await this.productRespository.find({
      where: {
        project,
      },
    });
  }

  async create(description: string, project: Project) {
    const product = this.productRespository.create({
      description,
      project,
    });

    await this.productRespository.save(product);

    return product;
  }
}
