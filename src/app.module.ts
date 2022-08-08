import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import CONFIG_MODULE from './config/dotenv';
import DB_MODULE from './config/typeorm';

@Module({
  imports: [CONFIG_MODULE, DB_MODULE, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
