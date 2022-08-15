import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HashModule } from './hash/hash.module';
import { EmailModule } from './email/email.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { FormattersModule } from './formatters/formatters.module';
import { CoreModule } from './core/core.module';

import CONFIG_MODULE from './dotenv';
import DB_MODULE from './typeorm';

@Module({
  imports: [
    CONFIG_MODULE,
    DB_MODULE,
    EventEmitterModule.forRoot(),
    AuthModule,
    HashModule,
    EmailModule,
    FormattersModule,
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
