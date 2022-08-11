import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FormattersService } from 'src/formatters/formatters.service';
import { ProjectsService } from 'src/projects/projects.service';
import { UsersService } from 'src/users/users.service';
import { OnboardingDTO } from './dto/onboarding.dto';

@Controller('onboarding')
export class OnboardingController {
  constructor(
    private readonly usersService: UsersService,
    private readonly projectsService: ProjectsService,
    private readonly formattersService: FormattersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async completeOnboarding(
    @Request() request,
    @Body() onboardingDTO: OnboardingDTO,
  ) {
    const userId = request.user.userId;
    const user = await this.usersService.findById(userId);

    const defaultProject = await this.projectsService.createProject(
      onboardingDTO.companyName,
      this.formattersService.slug(onboardingDTO.companyName),
      user,
    );

    user.firstName = onboardingDTO.firstName;
    user.lastName = onboardingDTO.lastName;
    user.onboardingComplete = true;

    await this.usersService.update(user);

    return defaultProject;
  }
}
