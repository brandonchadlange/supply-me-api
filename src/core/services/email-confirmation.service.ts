import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailConfirmation } from '../entities/email-confirmation.entity';
import { User } from '../entities/user.entity';
import { randomUUID } from 'crypto';
import * as otp from 'otp-generator';

@Injectable()
export class EmailConfirmationService {
  constructor(
    @InjectRepository(EmailConfirmation)
    private emailConfirmationRepository: Repository<EmailConfirmation>,
  ) {}

  async find(guid: string) {
    return await this.emailConfirmationRepository.findOne({
      where: {
        guid
      },
      relations: {
        user: true
      }
    })
  }

  async create(user: User) {
    const emailConfirmation = this.emailConfirmationRepository.create({
        user,
        guid: randomUUID(),
        otp: otp.generate(6, {
          digits: true,
          upperCaseAlphabets: true,
          lowerCaseAlphabets: false,
          specialChars: false
        }),
    });

    await this.emailConfirmationRepository.save(emailConfirmation);

    return emailConfirmation;
  }

  async validate(emailConfirmation: EmailConfirmation, otp: string) {
    return emailConfirmation.otp === otp;
  }

  async delete(emailConfirmation: EmailConfirmation) {
    await this.emailConfirmationRepository.delete(emailConfirmation);
  }
}
