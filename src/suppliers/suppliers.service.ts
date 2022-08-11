import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';
import { CreateSupplierDTO } from './dto/create-supplier.dto';
import { ProjectSupplier } from './entities/project-supplier.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(ProjectSupplier)
    private p_supplierRepository: Repository<ProjectSupplier>,
  ) {}

  async fetchByProject(project: Project) {
    return await this.p_supplierRepository.find({
      where: {
        project,
      },
    });
  }

  async create(createSupplierDTO: CreateSupplierDTO) {
    const supplier = this.p_supplierRepository.create({
      name: createSupplierDTO.name,
      domain: createSupplierDTO.domain,
      websiteUrl: createSupplierDTO.websiteUrl,
      project: createSupplierDTO.project,
    });

    await this.p_supplierRepository.save(supplier);

    return supplier;
  }
}
