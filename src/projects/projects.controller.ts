import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Delete,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { CreateProjectDTO } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserProjects(@Request() request) {
    const userId = request.user.userId;
    const user = await this.usersService.findById(userId);
    const projects = await this.projectsService.getUserProjects(user);
    return projects;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createProject(
    @Request() request,
    @Body() createProjectDTO: CreateProjectDTO,
  ) {
    const userId = request.user.userId;
    const user = await this.usersService.findById(userId);
    const project = await this.projectsService.createProject(
      createProjectDTO.name,
      createProjectDTO.name,
      user,
    );
    return project;
  }

  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteProject(@Param() params) {
   return await this.projectsService.deleteProject(params.id);
  }
}
