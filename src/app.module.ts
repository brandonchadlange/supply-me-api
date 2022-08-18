import { Module } from '@nestjs/common';
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
    CoreModule,
    AuthModule,
    HashModule,
    EmailModule,
    FormattersModule
  ]
})
export class AppModule {}
