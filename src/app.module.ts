import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DigitalfemsaModule } from './digitalfemsa/digitalfemsa.module';

@Module({
  imports: [DigitalfemsaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
