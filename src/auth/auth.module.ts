import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { HashModule } from 'src/hash/hash.module';
import JWT_MODULE from './jwt.module';

@Module({
  imports: [UsersModule, PassportModule, HashModule, JWT_MODULE],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
