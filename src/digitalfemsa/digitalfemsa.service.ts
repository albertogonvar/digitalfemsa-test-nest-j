import { Injectable } from '@nestjs/common';
import {
  CustomersApi,
  Configuration,
  Customer,
  CustomerResponse,
} from 'digitalfemsa';

@Injectable()
export class DigitalFemsaService {
  constructor(
    private apikey: string,
    private config: Configuration,
    private client: CustomersApi,
  ) {
    this.apikey = 'key_xxxxx';
    this.config = new Configuration({ accessToken: this.apikey });
    this.client = new CustomersApi(this.config);
  }

  public async createCustomer(customer: Customer) {
    try {
      const customerResponse = await this.client.createCustomer(customer);
      const customerData = customerResponse.data as CustomerResponse;
      /*
      // Ejemplo de respuesta
      {
        "livemode": false,
        "name": "Juan Perez",
        "email": "juan.perez@mail.com",
        "id": "cus_2neG7CYEdeda9BBGU",
        "object": "customer",
        "created_at": 1588684774,
        "corporate": false,
        "custom_reference": ""
      }
      */
      console.log({ customerData });
    } catch (error) {
      console.error('here', error);
    }
  }

  public async createPaymentOrder() {
    try {
      // this.client.getCustomers()
    } catch (error) {}

    return new Promise(() => {});
  }
}

/*
import { Injectable } from '@nestjs/common';
import * as DigitalFemsa from 'digitalfemsa';

@Injectable()
export class PaymentsService {
  private digitalFemsaClient: any;

  constructor() {
    this.digitalFemsaClient = new DigitalFemsa({
      apiKey: 'tu_api_key',
      apiSecret: 'tu_api_secret',
    });
  }

  async createPaymentOrder(amount: number, customerData: any): Promise<any> {
    try {
      const paymentOrder = await this.digitalFemsaClient.createOrder({
        amount, // Monto de la orden
        currency: 'MXN', // Moneda
        customer: customerData, // Datos del cliente
        description: 'Pago de servicio',
      });
      return paymentOrder;
    } catch (error) {
      throw new Error('Error al crear la orden de pago: ' + error.message);
    }
  }
}
*/

/*
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DigitalFemsaService {
  private baseUrl: string = 'https://api.digitalfemsa.io/v1'; // URL base de la API

  async makePayment(): Promise<any> {
    const body = {
      // Aquí debes colocar el payload según la documentación de DigitalFemsa
      transactionId: '12345',
      amount: 1000,
      currency: 'MXN',
      // Otros campos requeridos por la API
    };

    try {
      const response = await axios.post(`${this.baseUrl}/payments`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Coloca el token de autenticación adecuado
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response ? error.response.data : 'Error en la petición',
        error.response
          ? error.response.status
          : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
*/
