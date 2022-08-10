import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailConfirmation } from './entities/email-confirmation.entity';
import { User } from './entities/user.entity';
const { randomUUID } = require('crypto');
import * as otpGenerator from 'otp-generator';

@Injectable()
export class EmailConfirmationService {
  constructor(
    @InjectRepository(EmailConfirmation)
    private emailConfirmationRepository: Repository<EmailConfirmation>,
  ) {}

  async findByGuid(guid: string) {
    return this.emailConfirmationRepository.findOne({
      where: {
        guid,
      },
      relations: {
        user: true,
      },
    });
  }

  async create(user: User) {
    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      specialChars: false,
      upperCaseAlphabets: true,
    });

    const emailConfirmation = this.emailConfirmationRepository.create({
      user,
      guid: randomUUID(),
      otp: otp,
    });

    await this.emailConfirmationRepository.save(emailConfirmation);

    return emailConfirmation;
  }

  async validate(emailConfirmation: EmailConfirmation, otp: string) {
    return emailConfirmation.otp === otp;
  }

  async delete(id: number) {
    return await this.emailConfirmationRepository.delete(id);
  }
}
