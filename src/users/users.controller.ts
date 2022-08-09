import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Get,
  Param
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { HashService } from 'src/hash/hash.service';
import { CreateRequest } from './dto/create.request';
import { UserRegisteredEvent } from './events/user-registered.event';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly hashService: HashService,
    private eventEmitter: EventEmitter2,
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

    const user = await this.usersService.create({
      emailAddress: request.username,
      passwordHash,
    });

    this.eventEmitter.emit(
      'user.registered',
      new UserRegisteredEvent(user.emailAddress),
    );
  }
  @Get('/findUsersByEmail/:userEmail')
  async findUsersByEmail(@Param() params) {
        return await this.usersService.findOne(params.userEmail);
  }

}
