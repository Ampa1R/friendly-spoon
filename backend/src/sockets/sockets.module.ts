import { Module } from '@nestjs/common';
import { SocketsGateway } from './sockets.gateway';
import { SocketsProvider } from './sockets.provider';

@Module({
  providers: [SocketsGateway, SocketsProvider],
})
export class SocketsModule {}
