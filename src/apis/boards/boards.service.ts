import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  getHello() {
    return 'hello NestJS';
  }
}
