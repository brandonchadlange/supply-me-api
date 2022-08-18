import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormattersService } from 'src/formatters/formatters.service';
import { Repository } from 'typeorm';
import { Supplier } from '../entities/supplier.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private suppliersRepository: Repository<Supplier>,
    private readonly formattersService: FormattersService,
  ) {}

  async list() {
    return await this.suppliersRepository.find();
  }

  async find(id: string) {
    return await this.suppliersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(name: string) {
    const supplier = this.suppliersRepository.create({
      name,
      slug: this.formattersService.slug(name),
    });

    await this.suppliersRepository.save(supplier);

    return supplier;
  }
}
