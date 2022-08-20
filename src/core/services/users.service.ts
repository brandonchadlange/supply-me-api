import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findById(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
      relations: {
        defaultProject: true,
      },
    });
  }

  async findOne(emailAddress: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        emailAddress,
      },
    });
  }

  async create(request: Pick<User, 'emailAddress' | 'passwordHash'>) {
    const newUser = this.usersRepository.create({
      emailAddress: request.emailAddress,
      passwordHash: request.passwordHash,
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }

  async confirmEmail(user: User) {
    user.emailConfirmed = true;
    await this.usersRepository.save(user);
  }

  async completeOnboarding(user: User, defaultProject: Project) {
    user.defaultProject = defaultProject;
    user.onboardingComplete = true;
    await this.usersRepository.save(user);
  }
}
