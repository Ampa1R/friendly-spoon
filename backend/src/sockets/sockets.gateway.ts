import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

@WebSocketGateway(3005, {
  cors: {
    origin: '*',
  },
})
export class SocketsGateway {
  @WebSocketServer() server: any;

  constructor() {
    // console.log('bruh', this.server);
    // setInterval(() => {
    //   console.log('bruh', this.server);
    // }, 1000);
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): WsResponse<unknown> {
    console.log({ type: 'events', data });
    return { event: 'events', data };
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): WsResponse<unknown> {
    console.log({ type: 'message', data });
    return { event: 'message', data };
  }

  @SubscribeMessage('random')
  handleRandom(@MessageBody() data: string): any {
    console.log({ type: 'message', data });
    return { event: 'random', data: data };
  }
}
