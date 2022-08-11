import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import repositories from 'src/repositories';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [repositories.PROJECT, repositories.PROJECT_USER, UsersModule],
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [ProjectsService],
})
export class ProjectsModule {}
