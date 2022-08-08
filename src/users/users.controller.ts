import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { HashService } from 'src/hash/hash.service';
import { CreateRequest } from './dto/create.request';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly hashService: HashService,
  ) {}

  @Post('register')
  async register(@Body() request: CreateRequest) {
    const userExists = await this.usersService.findOne(request.username);

    if (userExists) {
      throw new HttpException(
        'A user has already been registered with that username.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const passwordHash = await this.hashService.createHash(request.password);

    await this.usersService.create({
      emailAddress: request.username,
      passwordHash,
    });

    // TODO: send email confirmation (user registered event)
  }
}
