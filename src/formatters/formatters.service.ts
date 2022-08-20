import { Injectable } from '@nestjs/common';

@Injectable()
export class FormattersService {
  slug(text: string) {
    return text
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  }

  domainFromURL(url: string) {
    return new URL(url).hostname.replace('www.', '');
  }
}
