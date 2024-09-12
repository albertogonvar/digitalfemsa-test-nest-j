import { Module } from '@nestjs/common';
import { DigitalFemsaController } from './digitalfemsa.controller';
import { DigitalFemsaService } from './digitalfemsa.service';

@Module({
  controllers: [DigitalFemsaController],
  providers: [DigitalFemsaService],
})
export class DigitalFemsaModule {}
