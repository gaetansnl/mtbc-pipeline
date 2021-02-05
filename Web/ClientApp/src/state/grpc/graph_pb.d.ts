import * as jspb from 'google-protobuf'



export class Graph extends jspb.Message {
  getNodesList(): Array<Node>;
  setNodesList(value: Array<Node>): Graph;
  clearNodesList(): Graph;
  addNodes(value?: Node, index?: number): Node;

  getEdgesList(): Array<Edge>;
  setEdgesList(value: Array<Edge>): Graph;
  clearEdgesList(): Graph;
  addEdges(value?: Edge, index?: number): Edge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Graph.AsObject;
  static toObject(includeInstance: boolean, msg: Graph): Graph.AsObject;
  static serializeBinaryToWriter(message: Graph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Graph;
  static deserializeBinaryFromReader(message: Graph, reader: jspb.BinaryReader): Graph;
}

export namespace Graph {
  export type AsObject = {
    nodesList: Array<Node.AsObject>,
    edgesList: Array<Edge.AsObject>,
  }
}

export class Node extends jspb.Message {
  getId(): number;
  setId(value: number): Node;

  getPositionx(): number;
  setPositionx(value: number): Node;

  getPositiony(): number;
  setPositiony(value: number): Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    id: number,
    positionx: number,
    positiony: number,
  }
}

export class Edge extends jspb.Message {
  getId(): number;
  setId(value: number): Edge;

  getFirstnode(): number;
  setFirstnode(value: number): Edge;

  getSecondnode(): number;
  setSecondnode(value: number): Edge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Edge.AsObject;
  static toObject(includeInstance: boolean, msg: Edge): Edge.AsObject;
  static serializeBinaryToWriter(message: Edge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Edge;
  static deserializeBinaryFromReader(message: Edge, reader: jspb.BinaryReader): Edge;
}

export namespace Edge {
  export type AsObject = {
    id: number,
    firstnode: number,
    secondnode: number,
  }
}

