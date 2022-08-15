import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import * as sgMail from '@sendgrid/mail';

interface MailMessage {
  to: string;
  from: string;
  subject: string;
  html: string;
}

interface TemplateMailMessage {
  to: string;
  from: string;
  subject: string;
  templateData: object;
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

  private async sendTemplate(templateId: string, message: TemplateMailMessage) {
    const retval = {
      success: true,
    };

    if (!this.canSend) {
      console.log('Mock send mail!');
      return retval;
    }

    try {
      const mailResponse = await sgMail.send({
        templateId,
        from: message.from,
        to: message.to,
        subject: message.subject,
        dynamicTemplateData: message.templateData,
      });
    } catch (err) {
      retval.success = false;
    }

    return retval;
  }

  // @OnEvent('user.registered')
  // async sendPasswordConfirmationMail(event: UserRegisteredEvent) {
  //   const msg: TemplateMailMessage = {
  //     to: event.emailAddress,
  //     from: 'brandonlostboy@gmail.com',
  //     subject: 'Confirm your email',
  //     templateData: {
  //       otp: event.otp,
  //     },
  //   };

  //   const mailResponse = await this.sendTemplate(
  //     'd-0d4643bf5c3d4a50b42953f47b3c75ae',
  //     msg,
  //   );

  //   if (!mailResponse.success) {
  //     console.error(
  //       'There was an issue sending the password confirmation mail',
  //     );
  //   }
  // }
}
