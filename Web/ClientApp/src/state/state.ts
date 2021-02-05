import { ApiPromiseClient } from "./grpc/api_grpc_web_pb";
export const client = new ApiPromiseClient("http://localhost:5000");
