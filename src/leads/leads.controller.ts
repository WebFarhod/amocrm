import { Controller, Get, Query } from '@nestjs/common';
import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get()
  async getLeads(@Query('query') query?: string) {
    console.log('====================================');
    console.log('test');
    console.log('====================================');
    return this.leadsService.getLeads(query);
  }
}
