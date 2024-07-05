import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LeadsModule } from './leads/leads.module';

@Module({
  imports: [ConfigModule.forRoot(), LeadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
