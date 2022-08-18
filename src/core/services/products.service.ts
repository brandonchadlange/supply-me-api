import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormattersService } from 'src/formatters/formatters.service';
import { Repository } from 'typeorm';
import { ProductVariantResponse } from '../dto/product/product-variant.response';
import { SupplierVariantResponse } from '../dto/supplier/supplier-varant.response';
import { Product } from '../entities/product';
import { ProductVariant } from '../entities/product-variant';
import { ProductVariantSupplier } from '../entities/product-variant-supplier.entity';
import { Supplier } from '../entities/supplier.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(ProductVariant)
    private productVariantsRepository: Repository<ProductVariant>,
    @InjectRepository(ProductVariantSupplier)
    private productVariantSupplierRepository: Repository<ProductVariantSupplier>,
    private readonly formattersService: FormattersService,
  ) {}

  async list() {
    const variants = await this.productVariantsRepository.find({
      relations: {
        product: true,
        variantSuppliers: {
          supplier: true,
        },
      },
    });

    return variants.map((variant) => new ProductVariantResponse(variant));
  }

  async findVariant(variantId: string) {
    return await this.productVariantsRepository.findOne({
      where: {
        id: variantId,
      },
    });
  }

  async findSupplierVariant(variantSupplierId: string) {
    return await this.productVariantSupplierRepository.findOne({
      where: {
        id: variantSupplierId,
      },
      relations: {
        supplier: true,
      },
    });
  }

  async create(description: string) {
    const product = this.productsRepository.create({
      description,
      slug: this.formattersService.slug(description),
    });

    await this.productsRepository.save(product);

    return product;
  }

  async quickCreate(description) {
    const product = await this.create(description);

    const variant = this.productVariantsRepository.create({
      product,
    });

    await this.productVariantsRepository.save(variant);

    return new ProductVariantResponse(variant);
  }

  async createSupplierVariant(
    productVariant: ProductVariant,
    supplier: Supplier,
  ) {
    const supplierVariant = this.productVariantSupplierRepository.create({
      productVariant,
      supplier,
    });

    await this.productVariantSupplierRepository.save(supplierVariant);

    return new SupplierVariantResponse(supplierVariant);
  }

  async deleteSupplierVariant(id: number) {
    await this.productVariantSupplierRepository.delete(id);
  }
}
