import * as grpcWeb from 'grpc-web';

import * as api_pb from './api_pb';


export class ApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: api_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_pb.HelloReply) => void
  ): grpcWeb.ClientReadableStream<api_pb.HelloReply>;

  search(
    request: api_pb.SearchRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_pb.SearchReply) => void
  ): grpcWeb.ClientReadableStream<api_pb.SearchReply>;

}

export class ApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: api_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_pb.HelloReply>;

  search(
    request: api_pb.SearchRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_pb.SearchReply>;

}

