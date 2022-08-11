import { Project } from 'src/projects/entities/project.entity';

export class CreateSupplierDTO {
  name: string;
  websiteUrl: string;
  domain: string;
  project: Project;
}
