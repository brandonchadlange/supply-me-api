import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuoteResponse } from '../dto/quote/quote.response';
import { ProductVariantSupplier } from '../entities/product-variant-supplier.entity';
import { QuoteRequestSupplierVariant } from '../entities/quote-request-supplier-variant.entity';
import { QuoteRequestSupplier } from '../entities/quote-request-supplier.entity';
import { QuoteRequest } from '../entities/quote-request.entity';
import { Supplier } from '../entities/supplier.entity';

@Injectable()
export class QuoteRequestsService {
  constructor(
    @InjectRepository(QuoteRequest)
    private quoteRequestRepository: Repository<QuoteRequest>,
    @InjectRepository(QuoteRequestSupplier)
    private quoteRequestSupplierRepository: Repository<QuoteRequestSupplier>,
    @InjectRepository(QuoteRequestSupplierVariant)
    private quoteRequestSupplierVariantRepository: Repository<QuoteRequestSupplierVariant>,
  ) {}

  async list() {
    const quotes = await this.quoteRequestRepository.find();
    return quotes.map(quote => new QuoteResponse(quote)) 
  }

  async create(reference: string) {
    const quoteRequest = await this.quoteRequestRepository.create({
      reference
    });
    await this.quoteRequestRepository.save(quoteRequest);
    return quoteRequest;
  }

  async update(quoteRequest: QuoteRequest) {
    await this.quoteRequestRepository.update(quoteRequest.id, quoteRequest);
  }

  async createQuoteSupplier(quoteRequest: QuoteRequest, supplier: Supplier) {
    let supplierLink = await this.quoteRequestSupplierRepository.findOne({
      where: {
        quoteRequest,
        supplier,
      },
    });

    if (!supplierLink) {
      supplierLink = this.quoteRequestSupplierRepository.create({
        quoteRequest,
        supplier,
      });

      await this.quoteRequestSupplierRepository.save(supplierLink);
    }

    return supplierLink;
  }

  async addVariantToSupplier(
    quoteRequestSupplier: QuoteRequestSupplier,
    productVariantSupplier: ProductVariantSupplier,
  ) {
    const quoteRequestSupplierVariant =
      this.quoteRequestSupplierVariantRepository.create({
        productVariantSupplier,
        quoteRequestSupplier,
      });

    await this.quoteRequestSupplierVariantRepository.save(
      quoteRequestSupplierVariant,
    );

    return quoteRequestSupplierVariant;
  }
}
