import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProjectsService } from '../services/projects.service';

@Injectable()
export class ProjectInjectorMiddleware implements NestMiddleware {
  constructor(private readonly projectsService: ProjectsService) {}

  async use(req: any, res: any, next: (error?: any) => void) {
    const projectIdHeader = req.headers['x-projectid'];

    if (!projectIdHeader) {
      // console.log('project header not present on route: ' + req.originalUrl);
      return next();
    }

    req.project = await this.projectsService.find(projectIdHeader);

    next();
  }
}
