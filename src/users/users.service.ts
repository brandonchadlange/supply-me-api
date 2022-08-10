import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        id,
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

  async create(request: Omit<User, 'id' | 'emailConfirmed'>) {
    const newUser = this.usersRepository.create({
      emailAddress: request.emailAddress,
      passwordHash: request.passwordHash,
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }

  async update(user: User) {
    return await this.usersRepository.update(user.id, user);
  }
}
