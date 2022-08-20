import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import * as sgMail from '@sendgrid/mail';
import { QuoteRequestCreatedEvent } from 'src/core/events/quote-request-created.event';
import { UserRegisteredEvent } from 'src/core/events/user-registered.event';

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

  @OnEvent('user.registered')
  async sendPasswordConfirmationMail(event: UserRegisteredEvent) {
    const msg: TemplateMailMessage = {
      to: event.emailAddress,
      from: 'brandonlostboy@gmail.com',
      subject: 'Confirm your email',
      templateData: {
        otp: event.otp,
      },
    };

    const mailResponse = await this.sendTemplate(
      'd-0d4643bf5c3d4a50b42953f47b3c75ae',
      msg,
    );

    if (!mailResponse.success) {
      console.error(
        'There was an issue sending the password confirmation mail',
      );
    }
  }

  @OnEvent('quote-request.created')
  async quoteRequestCreated(event: QuoteRequestCreatedEvent) {
    for await (const supplier of event.suppliers) {
      const productsForSupplier = event.productVariantSuppliers.filter(
        (e) => e.supplier.id === supplier.id,
      );
      const products = productsForSupplier.map((e) => e.productVariant.product);

      const msg: MailMessage = {
        to: 'brandonlostboy@gmail.com',
        from: 'brandonlostboy@gmail.com',
        subject: 'Quote request',
        html: `
        Hi there ${supplier.contactName},
        Could you please send me a quote for the following products:
        <ul>
          ${products.map((e) => `<li>${e.description}</li>`).join('')}
        </ul>
        <br>
        Thanks in advance!
        `,
      };

      const mailResponse = await this.send(msg);

      if (!mailResponse.success) {
        console.error(
          'There was an issue sending the password confirmation mail',
        );
      }
    }
  }
}
