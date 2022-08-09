import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import * as sgMail from '@sendgrid/mail';
import { UserRegisteredEvent } from 'src/users/events/user-registered.event';

interface MailMessage {
  to: string;
  from: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private canSend: boolean = false;

  constructor() {
    if (process.env.SENDGRID_API_KEY !== '') {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      this.canSend = true;
    }
  }

  private async send(message: MailMessage) {
    const retval = {
      success: true,
    };

    if (!this.canSend) {
      console.log('Mock send mail!');
      return retval;
    }

    try {
      const mailResponse = await sgMail.send(message);
    } catch (err) {
      retval.success = false;
    }

    return retval;
  }

  @OnEvent('user.registered')
  async sendPasswordConfirmationMail(event: UserRegisteredEvent) {
    const msg = {
      to: event.emailAddress,
      from: 'brandonlostboy@gmail.com',
      subject: 'Confirm your email',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    const mailResponse = await this.send(msg);

    if (!mailResponse.success) {
      console.error(
        'There was an issue sending the password confirmation mail',
      );
    }
  }
}
