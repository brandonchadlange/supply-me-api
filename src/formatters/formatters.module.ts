import { Module } from '@nestjs/common';
import { FormattersService } from './formatters.service';

@Module({
  providers: [FormattersService],
  exports: [FormattersService],
})
export class FormattersModule {}
