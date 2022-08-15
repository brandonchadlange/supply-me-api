import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { HashModule } from 'src/hash/hash.module';
import JWT_MODULE from './jwt.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule, HashModule, JWT_MODULE],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
