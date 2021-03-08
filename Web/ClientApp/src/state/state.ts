import { RPCImpl } from "protobufjs";
import { ChunkParser, ChunkType } from "./ChunkParser";
import { api } from "./grpc";
const serverUrl = `//${window.location.host}`;

/* Hack to use grpc-web format https://github.com/grpc/grpc-web/issues/80*/

const rpcImpl = function (method, requestData, callback) {
    const url = `${serverUrl}/api.Api/${method.name}`;
    const headers = new Headers();
    headers.set("Content-Type", "application/grpc-web+proto");
    headers.set("X-Grpc-Web", "1");
    headers.set("X-User-Agent", "grpc-web-javascript/0.1");
    fetch(url, {
        method: "POST",
        body: frameRequest(requestData),
        headers,
    })
        .then((response) => {
            return response.arrayBuffer();
        })
        .then((v) => {
            const chunk = parseChunk(v);
            callback(null, chunk && chunk.data ? new Uint8Array(chunk.data) : null);
        })
        .catch((err) => {
            callback(err);
        });
} as RPCImpl;

function parseChunk(buffer: ArrayBuffer) {
    return new ChunkParser()
        .parse(new Uint8Array(buffer))
        .find((chunk) => chunk.chunkType === ChunkType.MESSAGE);
}

function frameRequest(bytes: Uint8Array) {
    const frame = new ArrayBuffer(bytes.byteLength + 5);
    new DataView(frame, 1, 4).setUint32(0, bytes.length, false);
    new Uint8Array(frame, 5).set(bytes);
    return new Uint8Array(frame);
}

export const client = new api.Api(rpcImpl);
