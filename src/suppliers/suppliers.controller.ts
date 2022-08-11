import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FormattersService } from 'src/formatters/formatters.service';
import { ProjectsService } from 'src/projects/projects.service';
import { UsersService } from 'src/users/users.service';
import { CreateSupplierRequest } from './dto/create-supplier.request';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(
    private readonly suppliersService: SuppliersService,
    private readonly usersService: UsersService,
    private readonly projectsService: ProjectsService,
    private readonly formattersService: FormattersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProjectSuppliers(
    @Request() request,
    @Query('project') projectSlug: string,
  ) {
    const userId = request.user.userId;
    const user = await this.usersService.findById(userId);
    const project = await this.projectsService.getUserProjectBySlug(
      user,
      projectSlug,
    );

    const suppliers = await this.suppliersService.fetchByProject(project);

    return suppliers;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createSupplier(
    @Body() createSupplierRequest: CreateSupplierRequest,
    @Request() request,
    @Query('project') projectSlug: string,
  ) {
    const userId = request.user.userId;
    const user = await this.usersService.findById(userId);
    const project = await this.projectsService.getUserProjectBySlug(
      user,
      projectSlug,
    );

    const supplier = await this.suppliersService.create({
      name: createSupplierRequest.name,
      websiteUrl: createSupplierRequest.websiteUrl,
      domain: this.formattersService.domainFromURL(
        createSupplierRequest.websiteUrl,
      ),
      project,
    });

    return supplier;
  }
}
