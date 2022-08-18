import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormattersService } from 'src/formatters/formatters.service';
import { Repository } from 'typeorm';
import { ProjectUser } from '../entities/project-user.entity';
import { Project } from '../entities/project.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
    @InjectRepository(ProjectUser)
    private projectUsersRepository: Repository<ProjectUser>,
    private readonly formattersService: FormattersService
  ) {}

  async create(name: string, createdByUser: User) {
    const project = this.projectsRepository.create({
        name,
        slug: this.formattersService.slug(name)
    })

    await this.projectsRepository.save(project);

    const defaultProjectUser = await this.projectUsersRepository.create({
        project,
        user: createdByUser
    })

    await this.projectUsersRepository.save(defaultProjectUser);

    return project;
  }
}
