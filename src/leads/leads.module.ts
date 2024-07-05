import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
// import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [LeadsController],
  providers: [LeadsService],
})
export class LeadsModule {}
