import { Module } from '@nestjs/common';
import { OnboardingController } from './onboarding.controller';
import { UsersModule } from 'src/users/users.module';
import { ProjectsModule } from 'src/projects/projects.module';
import { FormattersModule } from 'src/formatters/formatters.module';

@Module({
  imports: [UsersModule, ProjectsModule, FormattersModule],
  controllers: [OnboardingController],
})
export class OnboardingModule {}
