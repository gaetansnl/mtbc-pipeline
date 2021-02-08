import * as $protobuf from "protobufjs";
/** Namespace api. */
export namespace api {
    /** Represents an Api */
    class Api extends $protobuf.rpc.Service {
        /**
         * Constructs a new Api service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(
            rpcImpl: $protobuf.RPCImpl,
            requestDelimited?: boolean,
            responseDelimited?: boolean
        );

        /**
         * Creates new Api service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
            rpcImpl: $protobuf.RPCImpl,
            requestDelimited?: boolean,
            responseDelimited?: boolean
        ): Api;

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloReply
         */
        public sayHello(request: api.IHelloRequest, callback: api.Api.SayHelloCallback): void;

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @returns Promise
         */
        public sayHello(request: api.IHelloRequest): Promise<api.HelloReply>;

        /**
         * Calls Search.
         * @param request SearchRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchReply
         */
        public search(request: api.ISearchRequest, callback: api.Api.SearchCallback): void;

        /**
         * Calls Search.
         * @param request SearchRequest message or plain object
         * @returns Promise
         */
        public search(request: api.ISearchRequest): Promise<api.SearchReply>;
    }

    namespace Api {
        /**
         * Callback as used by {@link api.Api#sayHello}.
         * @param error Error, if any
         * @param [response] HelloReply
         */
        type SayHelloCallback = (error: Error | null, response?: api.HelloReply) => void;

        /**
         * Callback as used by {@link api.Api#search}.
         * @param error Error, if any
         * @param [response] SearchReply
         */
        type SearchCallback = (error: Error | null, response?: api.SearchReply) => void;
    }

    /** Properties of a HelloRequest. */
    interface IHelloRequest {
        /** HelloRequest clusteringLevel */
        clusteringLevel?: number | null;
    }

    /** Represents a HelloRequest. */
    class HelloRequest implements IHelloRequest {
        /**
         * Constructs a new HelloRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IHelloRequest);

        /** HelloRequest clusteringLevel. */
        public clusteringLevel: number;

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloRequest instance
         */
        public static create(properties?: api.IHelloRequest): api.HelloRequest;

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link api.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.IHelloRequest,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link api.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IHelloRequest,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.HelloRequest;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.HelloRequest;

        /**
         * Verifies a HelloRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloRequest
         */
        public static fromObject(object: { [k: string]: any }): api.HelloRequest;

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @param message HelloRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.HelloRequest,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this HelloRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HelloReply. */
    interface IHelloReply {
        /** HelloReply graph */
        graph?: api.IGraph | null;
    }

    /** Represents a HelloReply. */
    class HelloReply implements IHelloReply {
        /**
         * Constructs a new HelloReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IHelloReply);

        /** HelloReply graph. */
        public graph?: api.IGraph | null;

        /**
         * Creates a new HelloReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReply instance
         */
        public static create(properties?: api.IHelloReply): api.HelloReply;

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link api.HelloReply.verify|verify} messages.
         * @param message HelloReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link api.HelloReply.verify|verify} messages.
         * @param message HelloReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IHelloReply,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.HelloReply;

        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.HelloReply;

        /**
         * Verifies a HelloReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloReply
         */
        public static fromObject(object: { [k: string]: any }): api.HelloReply;

        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @param message HelloReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.HelloReply,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this HelloReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchRequest. */
    interface ISearchRequest {
        /** SearchRequest condition */
        condition?: api.IBoolStrainCondition | null;
    }

    /** Represents a SearchRequest. */
    class SearchRequest implements ISearchRequest {
        /**
         * Constructs a new SearchRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ISearchRequest);

        /** SearchRequest condition. */
        public condition?: api.IBoolStrainCondition | null;

        /**
         * Creates a new SearchRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchRequest instance
         */
        public static create(properties?: api.ISearchRequest): api.SearchRequest;

        /**
         * Encodes the specified SearchRequest message. Does not implicitly {@link api.SearchRequest.verify|verify} messages.
         * @param message SearchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.ISearchRequest,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link api.SearchRequest.verify|verify} messages.
         * @param message SearchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.ISearchRequest,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.SearchRequest;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.SearchRequest;

        /**
         * Verifies a SearchRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchRequest
         */
        public static fromObject(object: { [k: string]: any }): api.SearchRequest;

        /**
         * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
         * @param message SearchRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.SearchRequest,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SearchRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchReply. */
    interface ISearchReply {}

    /** Represents a SearchReply. */
    class SearchReply implements ISearchReply {
        /**
         * Constructs a new SearchReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ISearchReply);

        /**
         * Creates a new SearchReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchReply instance
         */
        public static create(properties?: api.ISearchReply): api.SearchReply;

        /**
         * Encodes the specified SearchReply message. Does not implicitly {@link api.SearchReply.verify|verify} messages.
         * @param message SearchReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.ISearchReply,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified SearchReply message, length delimited. Does not implicitly {@link api.SearchReply.verify|verify} messages.
         * @param message SearchReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.ISearchReply,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SearchReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.SearchReply;

        /**
         * Decodes a SearchReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.SearchReply;

        /**
         * Verifies a SearchReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a SearchReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchReply
         */
        public static fromObject(object: { [k: string]: any }): api.SearchReply;

        /**
         * Creates a plain object from a SearchReply message. Also converts values to other types if specified.
         * @param message SearchReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.SearchReply,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SearchReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Graph. */
    interface IGraph {
        /** Graph nodes */
        nodes?: api.INode[] | null;

        /** Graph edges */
        edges?: api.IEdge[] | null;
    }

    /** Represents a Graph. */
    class Graph implements IGraph {
        /**
         * Constructs a new Graph.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IGraph);

        /** Graph nodes. */
        public nodes: api.INode[];

        /** Graph edges. */
        public edges: api.IEdge[];

        /**
         * Creates a new Graph instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Graph instance
         */
        public static create(properties?: api.IGraph): api.Graph;

        /**
         * Encodes the specified Graph message. Does not implicitly {@link api.Graph.verify|verify} messages.
         * @param message Graph message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IGraph, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Graph message, length delimited. Does not implicitly {@link api.Graph.verify|verify} messages.
         * @param message Graph message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IGraph,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Graph message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Graph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): api.Graph;

        /**
         * Decodes a Graph message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Graph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.Graph;

        /**
         * Verifies a Graph message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a Graph message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Graph
         */
        public static fromObject(object: { [k: string]: any }): api.Graph;

        /**
         * Creates a plain object from a Graph message. Also converts values to other types if specified.
         * @param message Graph
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.Graph,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Graph to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Node. */
    interface INode {
        /** Node id */
        id?: number | null;

        /** Node positionX */
        positionX?: number | null;

        /** Node positionY */
        positionY?: number | null;
    }

    /** Represents a Node. */
    class Node implements INode {
        /**
         * Constructs a new Node.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.INode);

        /** Node id. */
        public id: number;

        /** Node positionX. */
        public positionX: number;

        /** Node positionY. */
        public positionY: number;

        /**
         * Creates a new Node instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Node instance
         */
        public static create(properties?: api.INode): api.Node;

        /**
         * Encodes the specified Node message. Does not implicitly {@link api.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link api.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.INode,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): api.Node;

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.Node;

        /**
         * Verifies a Node message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Node
         */
        public static fromObject(object: { [k: string]: any }): api.Node;

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @param message Node
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.Node,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Node to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Edge. */
    interface IEdge {
        /** Edge id */
        id?: number | null;

        /** Edge firstNode */
        firstNode?: number | null;

        /** Edge secondNode */
        secondNode?: number | null;
    }

    /** Represents an Edge. */
    class Edge implements IEdge {
        /**
         * Constructs a new Edge.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IEdge);

        /** Edge id. */
        public id: number;

        /** Edge firstNode. */
        public firstNode: number;

        /** Edge secondNode. */
        public secondNode: number;

        /**
         * Creates a new Edge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Edge instance
         */
        public static create(properties?: api.IEdge): api.Edge;

        /**
         * Encodes the specified Edge message. Does not implicitly {@link api.Edge.verify|verify} messages.
         * @param message Edge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IEdge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Edge message, length delimited. Does not implicitly {@link api.Edge.verify|verify} messages.
         * @param message Edge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IEdge,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Edge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Edge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): api.Edge;

        /**
         * Decodes an Edge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Edge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.Edge;

        /**
         * Verifies an Edge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an Edge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Edge
         */
        public static fromObject(object: { [k: string]: any }): api.Edge;

        /**
         * Creates a plain object from an Edge message. Also converts values to other types if specified.
         * @param message Edge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.Edge,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Edge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BoolOperator enum. */
    enum BoolOperator {
        OR = 0,
        AND = 1,
    }

    /** Properties of a StrainCondition. */
    interface IStrainCondition {
        /** StrainCondition negate */
        negate?: boolean | null;

        /** StrainCondition accession */
        accession?: api.IAccessionCondition | null;

        /** StrainCondition biosample */
        biosample?: api.IBiosampleCondition | null;

        /** StrainCondition country */
        country?: api.ICountryCondition | null;

        /** StrainCondition date */
        date?: api.IDateCondition | null;

        /** StrainCondition gene */
        gene?: api.IGeneStrainCondition | null;

        /** StrainCondition lineage */
        lineage?: api.ILineageStrainCondition | null;

        /** StrainCondition bool */
        bool?: api.IBoolStrainCondition | null;
    }

    /** Represents a StrainCondition. */
    class StrainCondition implements IStrainCondition {
        /**
         * Constructs a new StrainCondition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IStrainCondition);

        /** StrainCondition negate. */
        public negate: boolean;

        /** StrainCondition accession. */
        public accession?: api.IAccessionCondition | null;

        /** StrainCondition biosample. */
        public biosample?: api.IBiosampleCondition | null;

        /** StrainCondition country. */
        public country?: api.ICountryCondition | null;

        /** StrainCondition date. */
        public date?: api.IDateCondition | null;

        /** StrainCondition gene. */
        public gene?: api.IGeneStrainCondition | null;

        /** StrainCondition lineage. */
        public lineage?: api.ILineageStrainCondition | null;

        /** StrainCondition bool. */
        public bool?: api.IBoolStrainCondition | null;

        /** StrainCondition condition. */
        public condition?:
            | "accession"
            | "biosample"
            | "country"
            | "date"
            | "gene"
            | "lineage"
            | "bool";

        /**
         * Creates a new StrainCondition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StrainCondition instance
         */
        public static create(properties?: api.IStrainCondition): api.StrainCondition;

        /**
         * Encodes the specified StrainCondition message. Does not implicitly {@link api.StrainCondition.verify|verify} messages.
         * @param message StrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.IStrainCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified StrainCondition message, length delimited. Does not implicitly {@link api.StrainCondition.verify|verify} messages.
         * @param message StrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IStrainCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a StrainCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.StrainCondition;

        /**
         * Decodes a StrainCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.StrainCondition;

        /**
         * Verifies a StrainCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a StrainCondition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StrainCondition
         */
        public static fromObject(object: { [k: string]: any }): api.StrainCondition;

        /**
         * Creates a plain object from a StrainCondition message. Also converts values to other types if specified.
         * @param message StrainCondition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.StrainCondition,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this StrainCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BoolStrainCondition. */
    interface IBoolStrainCondition {
        /** BoolStrainCondition operator */
        operator?: api.BoolOperator | null;

        /** BoolStrainCondition conditions */
        conditions?: api.IStrainCondition[] | null;
    }

    /** Represents a BoolStrainCondition. */
    class BoolStrainCondition implements IBoolStrainCondition {
        /**
         * Constructs a new BoolStrainCondition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IBoolStrainCondition);

        /** BoolStrainCondition operator. */
        public operator: api.BoolOperator;

        /** BoolStrainCondition conditions. */
        public conditions: api.IStrainCondition[];

        /**
         * Creates a new BoolStrainCondition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BoolStrainCondition instance
         */
        public static create(properties?: api.IBoolStrainCondition): api.BoolStrainCondition;

        /**
         * Encodes the specified BoolStrainCondition message. Does not implicitly {@link api.BoolStrainCondition.verify|verify} messages.
         * @param message BoolStrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.IBoolStrainCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified BoolStrainCondition message, length delimited. Does not implicitly {@link api.BoolStrainCondition.verify|verify} messages.
         * @param message BoolStrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IBoolStrainCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a BoolStrainCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoolStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.BoolStrainCondition;

        /**
         * Decodes a BoolStrainCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BoolStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
        ): api.BoolStrainCondition;

        /**
         * Verifies a BoolStrainCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a BoolStrainCondition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BoolStrainCondition
         */
        public static fromObject(object: { [k: string]: any }): api.BoolStrainCondition;

        /**
         * Creates a plain object from a BoolStrainCondition message. Also converts values to other types if specified.
         * @param message BoolStrainCondition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.BoolStrainCondition,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this BoolStrainCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DateCondition. */
    interface IDateCondition {
        /** DateCondition from */
        from?: google.protobuf.ITimestamp | null;

        /** DateCondition to */
        to?: google.protobuf.ITimestamp | null;
    }

    /** Represents a DateCondition. */
    class DateCondition implements IDateCondition {
        /**
         * Constructs a new DateCondition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IDateCondition);

        /** DateCondition from. */
        public from?: google.protobuf.ITimestamp | null;

        /** DateCondition to. */
        public to?: google.protobuf.ITimestamp | null;

        /**
         * Creates a new DateCondition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DateCondition instance
         */
        public static create(properties?: api.IDateCondition): api.DateCondition;

        /**
         * Encodes the specified DateCondition message. Does not implicitly {@link api.DateCondition.verify|verify} messages.
         * @param message DateCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.IDateCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified DateCondition message, length delimited. Does not implicitly {@link api.DateCondition.verify|verify} messages.
         * @param message DateCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IDateCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DateCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DateCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.DateCondition;

        /**
         * Decodes a DateCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DateCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.DateCondition;

        /**
         * Verifies a DateCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a DateCondition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DateCondition
         */
        public static fromObject(object: { [k: string]: any }): api.DateCondition;

        /**
         * Creates a plain object from a DateCondition message. Also converts values to other types if specified.
         * @param message DateCondition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.DateCondition,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DateCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CountryCondition. */
    interface ICountryCondition {
        /** CountryCondition isoCodes */
        isoCodes?: string[] | null;
    }

    /** Represents a CountryCondition. */
    class CountryCondition implements ICountryCondition {
        /**
         * Constructs a new CountryCondition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ICountryCondition);

        /** CountryCondition isoCodes. */
        public isoCodes: string[];

        /**
         * Creates a new CountryCondition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CountryCondition instance
         */
        public static create(properties?: api.ICountryCondition): api.CountryCondition;

        /**
         * Encodes the specified CountryCondition message. Does not implicitly {@link api.CountryCondition.verify|verify} messages.
         * @param message CountryCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.ICountryCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified CountryCondition message, length delimited. Does not implicitly {@link api.CountryCondition.verify|verify} messages.
         * @param message CountryCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.ICountryCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CountryCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CountryCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.CountryCondition;

        /**
         * Decodes a CountryCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CountryCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): api.CountryCondition;

        /**
         * Verifies a CountryCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a CountryCondition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CountryCondition
         */
        public static fromObject(object: { [k: string]: any }): api.CountryCondition;

        /**
         * Creates a plain object from a CountryCondition message. Also converts values to other types if specified.
         * @param message CountryCondition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.CountryCondition,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CountryCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccessionCondition. */
    interface IAccessionCondition {
        /** AccessionCondition accessionNumbers */
        accessionNumbers?: string[] | null;
    }

    /** Represents an AccessionCondition. */
    class AccessionCondition implements IAccessionCondition {
        /**
         * Constructs a new AccessionCondition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IAccessionCondition);

        /** AccessionCondition accessionNumbers. */
        public accessionNumbers: string[];

        /**
         * Creates a new AccessionCondition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccessionCondition instance
         */
        public static create(properties?: api.IAccessionCondition): api.AccessionCondition;

        /**
         * Encodes the specified AccessionCondition message. Does not implicitly {@link api.AccessionCondition.verify|verify} messages.
         * @param message AccessionCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.IAccessionCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified AccessionCondition message, length delimited. Does not implicitly {@link api.AccessionCondition.verify|verify} messages.
         * @param message AccessionCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IAccessionCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AccessionCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccessionCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.AccessionCondition;

        /**
         * Decodes an AccessionCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccessionCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
        ): api.AccessionCondition;

        /**
         * Verifies an AccessionCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an AccessionCondition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccessionCondition
         */
        public static fromObject(object: { [k: string]: any }): api.AccessionCondition;

        /**
         * Creates a plain object from an AccessionCondition message. Also converts values to other types if specified.
         * @param message AccessionCondition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.AccessionCondition,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AccessionCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BiosampleCondition. */
    interface IBiosampleCondition {
        /** BiosampleCondition accessionNumbers */
        accessionNumbers?: string[] | null;
    }

    /** Represents a BiosampleCondition. */
    class BiosampleCondition implements IBiosampleCondition {
        /**
         * Constructs a new BiosampleCondition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IBiosampleCondition);

        /** BiosampleCondition accessionNumbers. */
        public accessionNumbers: string[];

        /**
         * Creates a new BiosampleCondition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BiosampleCondition instance
         */
        public static create(properties?: api.IBiosampleCondition): api.BiosampleCondition;

        /**
         * Encodes the specified BiosampleCondition message. Does not implicitly {@link api.BiosampleCondition.verify|verify} messages.
         * @param message BiosampleCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.IBiosampleCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified BiosampleCondition message, length delimited. Does not implicitly {@link api.BiosampleCondition.verify|verify} messages.
         * @param message BiosampleCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IBiosampleCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a BiosampleCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BiosampleCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.BiosampleCondition;

        /**
         * Decodes a BiosampleCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BiosampleCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
        ): api.BiosampleCondition;

        /**
         * Verifies a BiosampleCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a BiosampleCondition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BiosampleCondition
         */
        public static fromObject(object: { [k: string]: any }): api.BiosampleCondition;

        /**
         * Creates a plain object from a BiosampleCondition message. Also converts values to other types if specified.
         * @param message BiosampleCondition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.BiosampleCondition,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this BiosampleCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GeneStrainCondition. */
    interface IGeneStrainCondition {
        /** GeneStrainCondition accessionNumbers */
        accessionNumbers?: string[] | null;
    }

    /** Represents a GeneStrainCondition. */
    class GeneStrainCondition implements IGeneStrainCondition {
        /**
         * Constructs a new GeneStrainCondition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IGeneStrainCondition);

        /** GeneStrainCondition accessionNumbers. */
        public accessionNumbers: string[];

        /**
         * Creates a new GeneStrainCondition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GeneStrainCondition instance
         */
        public static create(properties?: api.IGeneStrainCondition): api.GeneStrainCondition;

        /**
         * Encodes the specified GeneStrainCondition message. Does not implicitly {@link api.GeneStrainCondition.verify|verify} messages.
         * @param message GeneStrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.IGeneStrainCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified GeneStrainCondition message, length delimited. Does not implicitly {@link api.GeneStrainCondition.verify|verify} messages.
         * @param message GeneStrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.IGeneStrainCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GeneStrainCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GeneStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.GeneStrainCondition;

        /**
         * Decodes a GeneStrainCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GeneStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
        ): api.GeneStrainCondition;

        /**
         * Verifies a GeneStrainCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a GeneStrainCondition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeneStrainCondition
         */
        public static fromObject(object: { [k: string]: any }): api.GeneStrainCondition;

        /**
         * Creates a plain object from a GeneStrainCondition message. Also converts values to other types if specified.
         * @param message GeneStrainCondition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.GeneStrainCondition,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GeneStrainCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LineageStrainCondition. */
    interface ILineageStrainCondition {
        /** LineageStrainCondition classificationName */
        classificationName?: string | null;

        /** LineageStrainCondition name */
        name?: string | null;
    }

    /** Represents a LineageStrainCondition. */
    class LineageStrainCondition implements ILineageStrainCondition {
        /**
         * Constructs a new LineageStrainCondition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ILineageStrainCondition);

        /** LineageStrainCondition classificationName. */
        public classificationName: string;

        /** LineageStrainCondition name. */
        public name: string;

        /**
         * Creates a new LineageStrainCondition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LineageStrainCondition instance
         */
        public static create(properties?: api.ILineageStrainCondition): api.LineageStrainCondition;

        /**
         * Encodes the specified LineageStrainCondition message. Does not implicitly {@link api.LineageStrainCondition.verify|verify} messages.
         * @param message LineageStrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
            message: api.ILineageStrainCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified LineageStrainCondition message, length delimited. Does not implicitly {@link api.LineageStrainCondition.verify|verify} messages.
         * @param message LineageStrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
            message: api.ILineageStrainCondition,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a LineageStrainCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LineageStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
        ): api.LineageStrainCondition;

        /**
         * Decodes a LineageStrainCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LineageStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
        ): api.LineageStrainCondition;

        /**
         * Verifies a LineageStrainCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a LineageStrainCondition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LineageStrainCondition
         */
        public static fromObject(object: { [k: string]: any }): api.LineageStrainCondition;

        /**
         * Creates a plain object from a LineageStrainCondition message. Also converts values to other types if specified.
         * @param message LineageStrainCondition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
            message: api.LineageStrainCondition,
            options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this LineageStrainCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {
    /** Namespace protobuf. */
    namespace protobuf {
        /** Properties of a Timestamp. */
        interface ITimestamp {
            /** Timestamp seconds */
            seconds?: number | Long | null;

            /** Timestamp nanos */
            nanos?: number | null;
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {
            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: number | Long;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(
                properties?: google.protobuf.ITimestamp
            ): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(
                message: google.protobuf.ITimestamp,
                writer?: $protobuf.Writer
            ): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(
                message: google.protobuf.ITimestamp,
                writer?: $protobuf.Writer
            ): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(
                reader: $protobuf.Reader | Uint8Array,
                length?: number
            ): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(
                reader: $protobuf.Reader | Uint8Array
            ): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null;

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(
                message: google.protobuf.Timestamp,
                options?: $protobuf.IConversionOptions
            ): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
