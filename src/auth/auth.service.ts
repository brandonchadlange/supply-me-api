import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'src/hash/hash.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private hashService: HashService,
    private jwtService: JwtService,
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

  async login(user: User) {
    const payload = { sub: user.id, emailAddress: user.emailAddress };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
