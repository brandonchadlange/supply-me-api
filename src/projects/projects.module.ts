import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import repositories from 'src/repositories';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [repositories.PROJECT, repositories.PROJECT_USER, UsersModule],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
