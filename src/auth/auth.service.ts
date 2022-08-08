import { Injectable } from '@nestjs/common';
import { HashService } from 'src/hash/hash.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private hashService: HashService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (!user) return null;

    const passwordMatchesHash = await this.hashService.isMatch(
      password,
      user.passwordHash,
    );

    if (!passwordMatchesHash) return null;

    const { passwordHash, ...result } = user;

    return result;
  }
}
