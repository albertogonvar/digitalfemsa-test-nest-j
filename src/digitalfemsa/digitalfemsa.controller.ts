import { Controller, Post, Body } from '@nestjs/common';
import { DigitalFemsaService } from './digitalfemsa.service';
import { Customer } from 'digitalfemsa';

@Controller('digitalfemsa')
export class DigitalFemsaController {
  constructor(private readonly digitalFemsaService: DigitalFemsaService) {}

  @Post('create')
  async createPayment(@Body() customer: Customer) {
    console.log({
      ...customer,
      rute: 'src/digitalfemsa/digitalfemsa.controller.ts',
    });
    return await this.digitalFemsaService.createCustomer(customer);
  }
}
