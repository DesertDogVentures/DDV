import { Injectable } from '@nestjs/common';
import { Message } from '@ddv/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
