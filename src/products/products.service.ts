import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectSupplierProduct } from './entities/project-supplier-product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProjectSupplierProduct)
    private p_productRepository: Repository<ProjectSupplierProduct>,
  ) {}
}
