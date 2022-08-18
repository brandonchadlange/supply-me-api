import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSupplierDTO } from '../dto/create-supplier.dto';
import { SuppliersService } from '../services/suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async fetch() {
    return await this.suppliersService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Request() request,
    @Body() createSupplierDTO: CreateSupplierDTO,
  ) {
    return await this.suppliersService.create(createSupplierDTO.name);
  }
}
