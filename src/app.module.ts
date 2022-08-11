import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HashModule } from './hash/hash.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { ProjectsModule } from './projects/projects.module';
import { EmailModule } from './email/email.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { FormattersModule } from './formatters/formatters.module';
import { OnboardingModule } from './onboarding/onboarding.module';

import CONFIG_MODULE from './config/dotenv';
import DB_MODULE from './config/typeorm';

@Module({
  imports: [
    CONFIG_MODULE,
    DB_MODULE,
    EventEmitterModule.forRoot(),
    UsersModule,
    AuthModule,
    HashModule,
    SuppliersModule,
    ProjectsModule,
    EmailModule,
    FormattersModule,
    OnboardingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
