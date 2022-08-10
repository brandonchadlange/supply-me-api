import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import repositories from '../repositories';
import { HashModule } from 'src/hash/hash.module';
import { EmailConfirmationService } from './email-confirmation.service';

@Module({
  imports: [repositories.USER, repositories.EMAIL_CONFIRMATION, HashModule],
  providers: [UsersService, EmailConfirmationService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
