import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import repositories from '../repositories';

@Module({
  imports: [repositories.USER],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
