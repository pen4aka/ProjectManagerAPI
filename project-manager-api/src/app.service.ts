import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  HelloToAPI(): string {
    return 'Welcome to the API!';
  }
}
