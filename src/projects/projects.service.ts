import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProjectDTO } from './dto/create-project.dto';
import { ProjectUser } from './entities/project-user.entity';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(ProjectUser)
    private projectUserRepository: Repository<ProjectUser>,
  ) {}

  async getUserProjects(user: User) {
    const userProjects = await this.projectUserRepository.find({
      where: {
        user,
      },
      relations: {
        project: true,
      },
    });

    return userProjects.map((userProject) => userProject.project);
  }

  async createProject(name: string, slug: string, user: User) {
    const project = this.projectRepository.create({
      name: name,
      slug: slug,
    });

    await this.projectRepository.save(project);

    const projectUser = this.projectUserRepository.create({
      project,
      user,
    });

    await this.projectUserRepository.save(projectUser);

    return project;
  }

  async deleteProject(projectId: number) {

      await this.projectRepository.delete(projectId);
      return "Project has been deleted!";
  }
}
