import { Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';

@Injectable()
export class SocketsProvider {
  @WebSocketServer() server: any;

  constructor() {
    this.init();
  }

  init() {}
}
