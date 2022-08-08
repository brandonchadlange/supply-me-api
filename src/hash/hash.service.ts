import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async createHash(value: string) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(value, saltOrRounds);
    return hash;
  }

  async isMatch(value: string, hash: string) {
    const matches = await bcrypt.compare(value, hash);
    return matches;
  }
}
