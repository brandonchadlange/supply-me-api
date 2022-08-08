import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import repositories from '../repositories';
import { HashModule } from 'src/hash/hash.module';

@Module({
  imports: [repositories.USER, HashModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
