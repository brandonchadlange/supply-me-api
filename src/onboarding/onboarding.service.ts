import { Injectable } from '@nestjs/common';
import { ProjectsService } from 'src/projects/projects.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class OnboardingService {
  constructor() {}

  async completeOnboarding() {}
}
