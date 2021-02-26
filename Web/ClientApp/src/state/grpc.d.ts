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
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Api service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Api;

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

        /**
         * Calls ListSnp.
         * @param request ListSnpRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListSnpReply
         */
        public listSnp(request: api.IListSnpRequest, callback: api.Api.ListSnpCallback): void;

        /**
         * Calls ListSnp.
         * @param request ListSnpRequest message or plain object
         * @returns Promise
         */
        public listSnp(request: api.IListSnpRequest): Promise<api.ListSnpReply>;

        /**
         * Calls GetStrain.
         * @param request GetStrainRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetStrainReply
         */
        public getStrain(request: api.IGetStrainRequest, callback: api.Api.GetStrainCallback): void;

        /**
         * Calls GetStrain.
         * @param request GetStrainRequest message or plain object
         * @returns Promise
         */
        public getStrain(request: api.IGetStrainRequest): Promise<api.GetStrainReply>;
    }

    namespace Api {

        /**
         * Callback as used by {@link api.Api#sayHello}.
         * @param error Error, if any
         * @param [response] HelloReply
         */
        type SayHelloCallback = (error: (Error|null), response?: api.HelloReply) => void;

        /**
         * Callback as used by {@link api.Api#search}.
         * @param error Error, if any
         * @param [response] SearchReply
         */
        type SearchCallback = (error: (Error|null), response?: api.SearchReply) => void;

        /**
         * Callback as used by {@link api.Api#listSnp}.
         * @param error Error, if any
         * @param [response] ListSnpReply
         */
        type ListSnpCallback = (error: (Error|null), response?: api.ListSnpReply) => void;

        /**
         * Callback as used by {@link api.Api#getStrain}.
         * @param error Error, if any
         * @param [response] GetStrainReply
         */
        type GetStrainCallback = (error: (Error|null), response?: api.GetStrainReply) => void;
    }

    /** Properties of a HelloRequest. */
    interface IHelloRequest {

        /** HelloRequest clusteringLevel */
        clusteringLevel?: (number|null);
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
        public static encode(message: api.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link api.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.HelloRequest;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.HelloRequest;

        /**
         * Verifies a HelloRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.HelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HelloReply. */
    interface IHelloReply {

        /** HelloReply graph */
        graph?: (api.IGraph|null);
    }

    /** Represents a HelloReply. */
    class HelloReply implements IHelloReply {

        /**
         * Constructs a new HelloReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IHelloReply);

        /** HelloReply graph. */
        public graph?: (api.IGraph|null);

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
        public static encodeDelimited(message: api.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.HelloReply;

        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.HelloReply;

        /**
         * Verifies a HelloReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.HelloReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListSnpRequest. */
    interface IListSnpRequest {

        /** ListSnpRequest page */
        page?: (number|null);
    }

    /** Represents a ListSnpRequest. */
    class ListSnpRequest implements IListSnpRequest {

        /**
         * Constructs a new ListSnpRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IListSnpRequest);

        /** ListSnpRequest page. */
        public page: number;

        /**
         * Creates a new ListSnpRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListSnpRequest instance
         */
        public static create(properties?: api.IListSnpRequest): api.ListSnpRequest;

        /**
         * Encodes the specified ListSnpRequest message. Does not implicitly {@link api.ListSnpRequest.verify|verify} messages.
         * @param message ListSnpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IListSnpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListSnpRequest message, length delimited. Does not implicitly {@link api.ListSnpRequest.verify|verify} messages.
         * @param message ListSnpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IListSnpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListSnpRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListSnpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ListSnpRequest;

        /**
         * Decodes a ListSnpRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListSnpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ListSnpRequest;

        /**
         * Verifies a ListSnpRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListSnpRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListSnpRequest
         */
        public static fromObject(object: { [k: string]: any }): api.ListSnpRequest;

        /**
         * Creates a plain object from a ListSnpRequest message. Also converts values to other types if specified.
         * @param message ListSnpRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ListSnpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListSnpRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListSnpReply. */
    interface IListSnpReply {

        /** ListSnpReply snps */
        snps?: (api.ISnp[]|null);
    }

    /** Represents a ListSnpReply. */
    class ListSnpReply implements IListSnpReply {

        /**
         * Constructs a new ListSnpReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IListSnpReply);

        /** ListSnpReply snps. */
        public snps: api.ISnp[];

        /**
         * Creates a new ListSnpReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListSnpReply instance
         */
        public static create(properties?: api.IListSnpReply): api.ListSnpReply;

        /**
         * Encodes the specified ListSnpReply message. Does not implicitly {@link api.ListSnpReply.verify|verify} messages.
         * @param message ListSnpReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IListSnpReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListSnpReply message, length delimited. Does not implicitly {@link api.ListSnpReply.verify|verify} messages.
         * @param message ListSnpReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IListSnpReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListSnpReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListSnpReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.ListSnpReply;

        /**
         * Decodes a ListSnpReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListSnpReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.ListSnpReply;

        /**
         * Verifies a ListSnpReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListSnpReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListSnpReply
         */
        public static fromObject(object: { [k: string]: any }): api.ListSnpReply;

        /**
         * Creates a plain object from a ListSnpReply message. Also converts values to other types if specified.
         * @param message ListSnpReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.ListSnpReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListSnpReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStrainRequest. */
    interface IGetStrainRequest {

        /** GetStrainRequest id */
        id?: (string|null);
    }

    /** Represents a GetStrainRequest. */
    class GetStrainRequest implements IGetStrainRequest {

        /**
         * Constructs a new GetStrainRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IGetStrainRequest);

        /** GetStrainRequest id. */
        public id: string;

        /**
         * Creates a new GetStrainRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStrainRequest instance
         */
        public static create(properties?: api.IGetStrainRequest): api.GetStrainRequest;

        /**
         * Encodes the specified GetStrainRequest message. Does not implicitly {@link api.GetStrainRequest.verify|verify} messages.
         * @param message GetStrainRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IGetStrainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStrainRequest message, length delimited. Does not implicitly {@link api.GetStrainRequest.verify|verify} messages.
         * @param message GetStrainRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IGetStrainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStrainRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStrainRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.GetStrainRequest;

        /**
         * Decodes a GetStrainRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStrainRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.GetStrainRequest;

        /**
         * Verifies a GetStrainRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStrainRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStrainRequest
         */
        public static fromObject(object: { [k: string]: any }): api.GetStrainRequest;

        /**
         * Creates a plain object from a GetStrainRequest message. Also converts values to other types if specified.
         * @param message GetStrainRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.GetStrainRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStrainRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStrainReply. */
    interface IGetStrainReply {

        /** GetStrainReply result */
        result?: (api.IStrainResult|null);
    }

    /** Represents a GetStrainReply. */
    class GetStrainReply implements IGetStrainReply {

        /**
         * Constructs a new GetStrainReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IGetStrainReply);

        /** GetStrainReply result. */
        public result?: (api.IStrainResult|null);

        /**
         * Creates a new GetStrainReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStrainReply instance
         */
        public static create(properties?: api.IGetStrainReply): api.GetStrainReply;

        /**
         * Encodes the specified GetStrainReply message. Does not implicitly {@link api.GetStrainReply.verify|verify} messages.
         * @param message GetStrainReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IGetStrainReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStrainReply message, length delimited. Does not implicitly {@link api.GetStrainReply.verify|verify} messages.
         * @param message GetStrainReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IGetStrainReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStrainReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStrainReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.GetStrainReply;

        /**
         * Decodes a GetStrainReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStrainReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.GetStrainReply;

        /**
         * Verifies a GetStrainReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStrainReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStrainReply
         */
        public static fromObject(object: { [k: string]: any }): api.GetStrainReply;

        /**
         * Creates a plain object from a GetStrainReply message. Also converts values to other types if specified.
         * @param message GetStrainReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.GetStrainReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStrainReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchRequest. */
    interface ISearchRequest {

        /** SearchRequest condition */
        condition?: (api.IBoolStrainCondition|null);
    }

    /** Represents a SearchRequest. */
    class SearchRequest implements ISearchRequest {

        /**
         * Constructs a new SearchRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ISearchRequest);

        /** SearchRequest condition. */
        public condition?: (api.IBoolStrainCondition|null);

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
        public static encode(message: api.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link api.SearchRequest.verify|verify} messages.
         * @param message SearchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.SearchRequest;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.SearchRequest;

        /**
         * Verifies a SearchRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchReply. */
    interface ISearchReply {
    }

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
        public static encode(message: api.ISearchReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchReply message, length delimited. Does not implicitly {@link api.SearchReply.verify|verify} messages.
         * @param message SearchReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ISearchReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.SearchReply;

        /**
         * Decodes a SearchReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.SearchReply;

        /**
         * Verifies a SearchReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.SearchReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Graph. */
    interface IGraph {

        /** Graph nodes */
        nodes?: (api.INode[]|null);

        /** Graph edges */
        edges?: (api.IEdge[]|null);
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
        public static encodeDelimited(message: api.IGraph, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Graph message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Graph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Graph;

        /**
         * Decodes a Graph message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Graph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Graph;

        /**
         * Verifies a Graph message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.Graph, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Graph to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Node. */
    interface INode {

        /** Node id */
        id?: (number|null);

        /** Node name */
        name?: (string|null);

        /** Node positionX */
        positionX?: (number|null);

        /** Node positionY */
        positionY?: (number|null);
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

        /** Node name. */
        public name: string;

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
        public static encodeDelimited(message: api.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Node;

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Node;

        /**
         * Verifies a Node message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Node to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Edge. */
    interface IEdge {

        /** Edge id */
        id?: (number|null);

        /** Edge firstNode */
        firstNode?: (number|null);

        /** Edge secondNode */
        secondNode?: (number|null);
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
        public static encodeDelimited(message: api.IEdge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Edge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Edge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Edge;

        /**
         * Decodes an Edge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Edge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Edge;

        /**
         * Verifies an Edge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.Edge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Edge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BoolOperator enum. */
    enum BoolOperator {
        OR = 0,
        AND = 1
    }

    /** Properties of a StrainCondition. */
    interface IStrainCondition {

        /** StrainCondition negate */
        negate?: (boolean|null);

        /** StrainCondition accession */
        accession?: (api.IAccessionCondition|null);

        /** StrainCondition biosample */
        biosample?: (api.IBiosampleCondition|null);

        /** StrainCondition country */
        country?: (api.ICountryCondition|null);

        /** StrainCondition date */
        date?: (api.IDateCondition|null);

        /** StrainCondition gene */
        gene?: (api.IGeneStrainCondition|null);

        /** StrainCondition lineage */
        lineage?: (api.ILineageStrainCondition|null);

        /** StrainCondition bool */
        bool?: (api.IBoolStrainCondition|null);
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
        public accession?: (api.IAccessionCondition|null);

        /** StrainCondition biosample. */
        public biosample?: (api.IBiosampleCondition|null);

        /** StrainCondition country. */
        public country?: (api.ICountryCondition|null);

        /** StrainCondition date. */
        public date?: (api.IDateCondition|null);

        /** StrainCondition gene. */
        public gene?: (api.IGeneStrainCondition|null);

        /** StrainCondition lineage. */
        public lineage?: (api.ILineageStrainCondition|null);

        /** StrainCondition bool. */
        public bool?: (api.IBoolStrainCondition|null);

        /** StrainCondition condition. */
        public condition?: ("accession"|"biosample"|"country"|"date"|"gene"|"lineage"|"bool");

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
        public static encode(message: api.IStrainCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StrainCondition message, length delimited. Does not implicitly {@link api.StrainCondition.verify|verify} messages.
         * @param message StrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IStrainCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StrainCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.StrainCondition;

        /**
         * Decodes a StrainCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.StrainCondition;

        /**
         * Verifies a StrainCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.StrainCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StrainCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BoolStrainCondition. */
    interface IBoolStrainCondition {

        /** BoolStrainCondition operator */
        operator?: (api.BoolOperator|null);

        /** BoolStrainCondition conditions */
        conditions?: (api.IStrainCondition[]|null);
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
        public static encode(message: api.IBoolStrainCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BoolStrainCondition message, length delimited. Does not implicitly {@link api.BoolStrainCondition.verify|verify} messages.
         * @param message BoolStrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IBoolStrainCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BoolStrainCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoolStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.BoolStrainCondition;

        /**
         * Decodes a BoolStrainCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BoolStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.BoolStrainCondition;

        /**
         * Verifies a BoolStrainCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.BoolStrainCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BoolStrainCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DateCondition. */
    interface IDateCondition {

        /** DateCondition from */
        from?: (google.protobuf.ITimestamp|null);

        /** DateCondition to */
        to?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a DateCondition. */
    class DateCondition implements IDateCondition {

        /**
         * Constructs a new DateCondition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IDateCondition);

        /** DateCondition from. */
        public from?: (google.protobuf.ITimestamp|null);

        /** DateCondition to. */
        public to?: (google.protobuf.ITimestamp|null);

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
        public static encode(message: api.IDateCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DateCondition message, length delimited. Does not implicitly {@link api.DateCondition.verify|verify} messages.
         * @param message DateCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IDateCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DateCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DateCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DateCondition;

        /**
         * Decodes a DateCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DateCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DateCondition;

        /**
         * Verifies a DateCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.DateCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DateCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CountryCondition. */
    interface ICountryCondition {

        /** CountryCondition isoCodes */
        isoCodes?: (string[]|null);
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
        public static encode(message: api.ICountryCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CountryCondition message, length delimited. Does not implicitly {@link api.CountryCondition.verify|verify} messages.
         * @param message CountryCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ICountryCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CountryCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CountryCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.CountryCondition;

        /**
         * Decodes a CountryCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CountryCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.CountryCondition;

        /**
         * Verifies a CountryCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.CountryCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CountryCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccessionCondition. */
    interface IAccessionCondition {

        /** AccessionCondition accessionNumbers */
        accessionNumbers?: (string[]|null);
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
        public static encode(message: api.IAccessionCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccessionCondition message, length delimited. Does not implicitly {@link api.AccessionCondition.verify|verify} messages.
         * @param message AccessionCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IAccessionCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccessionCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccessionCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.AccessionCondition;

        /**
         * Decodes an AccessionCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccessionCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.AccessionCondition;

        /**
         * Verifies an AccessionCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.AccessionCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccessionCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BiosampleCondition. */
    interface IBiosampleCondition {

        /** BiosampleCondition accessionNumbers */
        accessionNumbers?: (string[]|null);
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
        public static encode(message: api.IBiosampleCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BiosampleCondition message, length delimited. Does not implicitly {@link api.BiosampleCondition.verify|verify} messages.
         * @param message BiosampleCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IBiosampleCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BiosampleCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BiosampleCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.BiosampleCondition;

        /**
         * Decodes a BiosampleCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BiosampleCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.BiosampleCondition;

        /**
         * Verifies a BiosampleCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.BiosampleCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BiosampleCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GeneStrainCondition. */
    interface IGeneStrainCondition {

        /** GeneStrainCondition accessionNumbers */
        accessionNumbers?: (string[]|null);
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
        public static encode(message: api.IGeneStrainCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GeneStrainCondition message, length delimited. Does not implicitly {@link api.GeneStrainCondition.verify|verify} messages.
         * @param message GeneStrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IGeneStrainCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GeneStrainCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GeneStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.GeneStrainCondition;

        /**
         * Decodes a GeneStrainCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GeneStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.GeneStrainCondition;

        /**
         * Verifies a GeneStrainCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.GeneStrainCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeneStrainCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LineageStrainCondition. */
    interface ILineageStrainCondition {

        /** LineageStrainCondition classificationName */
        classificationName?: (string|null);

        /** LineageStrainCondition name */
        name?: (string|null);
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
        public static encode(message: api.ILineageStrainCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LineageStrainCondition message, length delimited. Does not implicitly {@link api.LineageStrainCondition.verify|verify} messages.
         * @param message LineageStrainCondition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ILineageStrainCondition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LineageStrainCondition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LineageStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.LineageStrainCondition;

        /**
         * Decodes a LineageStrainCondition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LineageStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.LineageStrainCondition;

        /**
         * Verifies a LineageStrainCondition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

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
        public static toObject(message: api.LineageStrainCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LineageStrainCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Snp. */
    interface ISnp {

        /** Snp id */
        id?: (string|null);

        /** Snp sequenceId */
        sequenceId?: (string|null);

        /** Snp position */
        position?: (number|null);

        /** Snp reference */
        reference?: (string|null);

        /** Snp insertion */
        insertion?: (string|null);

        /** Snp ncbiUrl */
        ncbiUrl?: (string|null);

        /** Snp annotations */
        annotations?: (api.ISnpAnnotation[]|null);
    }

    /** Represents a Snp. */
    class Snp implements ISnp {

        /**
         * Constructs a new Snp.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ISnp);

        /** Snp id. */
        public id: string;

        /** Snp sequenceId. */
        public sequenceId: string;

        /** Snp position. */
        public position: number;

        /** Snp reference. */
        public reference: string;

        /** Snp insertion. */
        public insertion: string;

        /** Snp ncbiUrl. */
        public ncbiUrl: string;

        /** Snp annotations. */
        public annotations: api.ISnpAnnotation[];

        /**
         * Creates a new Snp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Snp instance
         */
        public static create(properties?: api.ISnp): api.Snp;

        /**
         * Encodes the specified Snp message. Does not implicitly {@link api.Snp.verify|verify} messages.
         * @param message Snp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ISnp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Snp message, length delimited. Does not implicitly {@link api.Snp.verify|verify} messages.
         * @param message Snp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ISnp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Snp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Snp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Snp;

        /**
         * Decodes a Snp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Snp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Snp;

        /**
         * Verifies a Snp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Snp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Snp
         */
        public static fromObject(object: { [k: string]: any }): api.Snp;

        /**
         * Creates a plain object from a Snp message. Also converts values to other types if specified.
         * @param message Snp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Snp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Snp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Gene. */
    interface IGene {

        /** Gene id */
        id?: (string|null);

        /** Gene sequenceId */
        sequenceId?: (string|null);

        /** Gene symbol */
        symbol?: (google.protobuf.IStringValue|null);

        /** Gene description */
        description?: (google.protobuf.IStringValue|null);

        /** Gene locusTag */
        locusTag?: (string|null);
    }

    /** Represents a Gene. */
    class Gene implements IGene {

        /**
         * Constructs a new Gene.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IGene);

        /** Gene id. */
        public id: string;

        /** Gene sequenceId. */
        public sequenceId: string;

        /** Gene symbol. */
        public symbol?: (google.protobuf.IStringValue|null);

        /** Gene description. */
        public description?: (google.protobuf.IStringValue|null);

        /** Gene locusTag. */
        public locusTag: string;

        /**
         * Creates a new Gene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gene instance
         */
        public static create(properties?: api.IGene): api.Gene;

        /**
         * Encodes the specified Gene message. Does not implicitly {@link api.Gene.verify|verify} messages.
         * @param message Gene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IGene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Gene message, length delimited. Does not implicitly {@link api.Gene.verify|verify} messages.
         * @param message Gene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IGene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Gene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Gene;

        /**
         * Decodes a Gene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Gene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Gene;

        /**
         * Verifies a Gene message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Gene message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Gene
         */
        public static fromObject(object: { [k: string]: any }): api.Gene;

        /**
         * Creates a plain object from a Gene message. Also converts values to other types if specified.
         * @param message Gene
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Gene, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Gene to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SnpAnnotation. */
    interface ISnpAnnotation {

        /** SnpAnnotation study */
        study?: (api.IStudy|null);

        /** SnpAnnotation lineage */
        lineage?: (google.protobuf.IStringValue|null);
    }

    /** Represents a SnpAnnotation. */
    class SnpAnnotation implements ISnpAnnotation {

        /**
         * Constructs a new SnpAnnotation.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ISnpAnnotation);

        /** SnpAnnotation study. */
        public study?: (api.IStudy|null);

        /** SnpAnnotation lineage. */
        public lineage?: (google.protobuf.IStringValue|null);

        /**
         * Creates a new SnpAnnotation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SnpAnnotation instance
         */
        public static create(properties?: api.ISnpAnnotation): api.SnpAnnotation;

        /**
         * Encodes the specified SnpAnnotation message. Does not implicitly {@link api.SnpAnnotation.verify|verify} messages.
         * @param message SnpAnnotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ISnpAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SnpAnnotation message, length delimited. Does not implicitly {@link api.SnpAnnotation.verify|verify} messages.
         * @param message SnpAnnotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ISnpAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SnpAnnotation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SnpAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.SnpAnnotation;

        /**
         * Decodes a SnpAnnotation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SnpAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.SnpAnnotation;

        /**
         * Verifies a SnpAnnotation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SnpAnnotation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SnpAnnotation
         */
        public static fromObject(object: { [k: string]: any }): api.SnpAnnotation;

        /**
         * Creates a plain object from a SnpAnnotation message. Also converts values to other types if specified.
         * @param message SnpAnnotation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.SnpAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SnpAnnotation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Study. */
    interface IStudy {

        /** Study title */
        title?: (string|null);

        /** Study publisher */
        publisher?: (string|null);

        /** Study doi */
        doi?: (string|null);

        /** Study url */
        url?: (string|null);

        /** Study primaryAuthors */
        primaryAuthors?: (api.IAuthor[]|null);

        /** Study mainAuthor */
        mainAuthor?: (api.IAuthor|null);
    }

    /** Represents a Study. */
    class Study implements IStudy {

        /**
         * Constructs a new Study.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IStudy);

        /** Study title. */
        public title: string;

        /** Study publisher. */
        public publisher: string;

        /** Study doi. */
        public doi: string;

        /** Study url. */
        public url: string;

        /** Study primaryAuthors. */
        public primaryAuthors: api.IAuthor[];

        /** Study mainAuthor. */
        public mainAuthor?: (api.IAuthor|null);

        /**
         * Creates a new Study instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Study instance
         */
        public static create(properties?: api.IStudy): api.Study;

        /**
         * Encodes the specified Study message. Does not implicitly {@link api.Study.verify|verify} messages.
         * @param message Study message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IStudy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Study message, length delimited. Does not implicitly {@link api.Study.verify|verify} messages.
         * @param message Study message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IStudy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Study message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Study
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Study;

        /**
         * Decodes a Study message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Study
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Study;

        /**
         * Verifies a Study message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Study message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Study
         */
        public static fromObject(object: { [k: string]: any }): api.Study;

        /**
         * Creates a plain object from a Study message. Also converts values to other types if specified.
         * @param message Study
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Study, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Study to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Author. */
    interface IAuthor {

        /** Author given */
        given?: (string|null);

        /** Author family */
        family?: (string|null);

        /** Author fullName */
        fullName?: (string|null);
    }

    /** Represents an Author. */
    class Author implements IAuthor {

        /**
         * Constructs a new Author.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IAuthor);

        /** Author given. */
        public given: string;

        /** Author family. */
        public family: string;

        /** Author fullName. */
        public fullName: string;

        /**
         * Creates a new Author instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Author instance
         */
        public static create(properties?: api.IAuthor): api.Author;

        /**
         * Encodes the specified Author message. Does not implicitly {@link api.Author.verify|verify} messages.
         * @param message Author message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IAuthor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Author message, length delimited. Does not implicitly {@link api.Author.verify|verify} messages.
         * @param message Author message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IAuthor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Author message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Author;

        /**
         * Decodes an Author message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Author;

        /**
         * Verifies an Author message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Author message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Author
         */
        public static fromObject(object: { [k: string]: any }): api.Author;

        /**
         * Creates a plain object from an Author message. Also converts values to other types if specified.
         * @param message Author
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Author, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Author to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InsertionSequencePosition. */
    interface IInsertionSequencePosition {

        /** InsertionSequencePosition position */
        position?: (number|null);

        /** InsertionSequencePosition prefix */
        prefix?: (string|null);
    }

    /** Represents an InsertionSequencePosition. */
    class InsertionSequencePosition implements IInsertionSequencePosition {

        /**
         * Constructs a new InsertionSequencePosition.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IInsertionSequencePosition);

        /** InsertionSequencePosition position. */
        public position: number;

        /** InsertionSequencePosition prefix. */
        public prefix: string;

        /**
         * Creates a new InsertionSequencePosition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InsertionSequencePosition instance
         */
        public static create(properties?: api.IInsertionSequencePosition): api.InsertionSequencePosition;

        /**
         * Encodes the specified InsertionSequencePosition message. Does not implicitly {@link api.InsertionSequencePosition.verify|verify} messages.
         * @param message InsertionSequencePosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IInsertionSequencePosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InsertionSequencePosition message, length delimited. Does not implicitly {@link api.InsertionSequencePosition.verify|verify} messages.
         * @param message InsertionSequencePosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IInsertionSequencePosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InsertionSequencePosition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InsertionSequencePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.InsertionSequencePosition;

        /**
         * Decodes an InsertionSequencePosition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InsertionSequencePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.InsertionSequencePosition;

        /**
         * Verifies an InsertionSequencePosition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InsertionSequencePosition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InsertionSequencePosition
         */
        public static fromObject(object: { [k: string]: any }): api.InsertionSequencePosition;

        /**
         * Creates a plain object from an InsertionSequencePosition message. Also converts values to other types if specified.
         * @param message InsertionSequencePosition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.InsertionSequencePosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InsertionSequencePosition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InsertionSequence. */
    interface IInsertionSequence {

        /** InsertionSequence name */
        name?: (string|null);

        /** InsertionSequence positions */
        positions?: (api.IInsertionSequencePosition[]|null);
    }

    /** Represents an InsertionSequence. */
    class InsertionSequence implements IInsertionSequence {

        /**
         * Constructs a new InsertionSequence.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IInsertionSequence);

        /** InsertionSequence name. */
        public name: string;

        /** InsertionSequence positions. */
        public positions: api.IInsertionSequencePosition[];

        /**
         * Creates a new InsertionSequence instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InsertionSequence instance
         */
        public static create(properties?: api.IInsertionSequence): api.InsertionSequence;

        /**
         * Encodes the specified InsertionSequence message. Does not implicitly {@link api.InsertionSequence.verify|verify} messages.
         * @param message InsertionSequence message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IInsertionSequence, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InsertionSequence message, length delimited. Does not implicitly {@link api.InsertionSequence.verify|verify} messages.
         * @param message InsertionSequence message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IInsertionSequence, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InsertionSequence message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InsertionSequence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.InsertionSequence;

        /**
         * Decodes an InsertionSequence message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InsertionSequence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.InsertionSequence;

        /**
         * Verifies an InsertionSequence message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InsertionSequence message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InsertionSequence
         */
        public static fromObject(object: { [k: string]: any }): api.InsertionSequence;

        /**
         * Creates a plain object from an InsertionSequence message. Also converts values to other types if specified.
         * @param message InsertionSequence
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.InsertionSequence, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InsertionSequence to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CrisprPart. */
    interface ICrisprPart {

        /** CrisprPart directRepeat */
        directRepeat?: (api.IDirectRepeatCrisprPart|null);

        /** CrisprPart spacer */
        spacer?: (api.ISpacerCrisprPart|null);

        /** CrisprPart insertionSequence */
        insertionSequence?: (api.IInsertionSequenceCrisprPart|null);

        /** CrisprPart namedSequence */
        namedSequence?: (api.INamedSequenceCrisprPart|null);

        /** CrisprPart sequence */
        sequence?: (api.ISequenceCrisprPart|null);

        /** CrisprPart gene */
        gene?: (api.IGeneCrisprPart|null);
    }

    /** Represents a CrisprPart. */
    class CrisprPart implements ICrisprPart {

        /**
         * Constructs a new CrisprPart.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ICrisprPart);

        /** CrisprPart directRepeat. */
        public directRepeat?: (api.IDirectRepeatCrisprPart|null);

        /** CrisprPart spacer. */
        public spacer?: (api.ISpacerCrisprPart|null);

        /** CrisprPart insertionSequence. */
        public insertionSequence?: (api.IInsertionSequenceCrisprPart|null);

        /** CrisprPart namedSequence. */
        public namedSequence?: (api.INamedSequenceCrisprPart|null);

        /** CrisprPart sequence. */
        public sequence?: (api.ISequenceCrisprPart|null);

        /** CrisprPart gene. */
        public gene?: (api.IGeneCrisprPart|null);

        /** CrisprPart part. */
        public part?: ("directRepeat"|"spacer"|"insertionSequence"|"namedSequence"|"sequence"|"gene");

        /**
         * Creates a new CrisprPart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrisprPart instance
         */
        public static create(properties?: api.ICrisprPart): api.CrisprPart;

        /**
         * Encodes the specified CrisprPart message. Does not implicitly {@link api.CrisprPart.verify|verify} messages.
         * @param message CrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ICrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrisprPart message, length delimited. Does not implicitly {@link api.CrisprPart.verify|verify} messages.
         * @param message CrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ICrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrisprPart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.CrisprPart;

        /**
         * Decodes a CrisprPart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.CrisprPart;

        /**
         * Verifies a CrisprPart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrisprPart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrisprPart
         */
        public static fromObject(object: { [k: string]: any }): api.CrisprPart;

        /**
         * Creates a plain object from a CrisprPart message. Also converts values to other types if specified.
         * @param message CrisprPart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.CrisprPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrisprPart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GeneCrisprPart. */
    interface IGeneCrisprPart {

        /** GeneCrisprPart name */
        name?: (string|null);

        /** GeneCrisprPart gene */
        gene?: (api.IGene|null);
    }

    /** Represents a GeneCrisprPart. */
    class GeneCrisprPart implements IGeneCrisprPart {

        /**
         * Constructs a new GeneCrisprPart.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IGeneCrisprPart);

        /** GeneCrisprPart name. */
        public name: string;

        /** GeneCrisprPart gene. */
        public gene?: (api.IGene|null);

        /**
         * Creates a new GeneCrisprPart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GeneCrisprPart instance
         */
        public static create(properties?: api.IGeneCrisprPart): api.GeneCrisprPart;

        /**
         * Encodes the specified GeneCrisprPart message. Does not implicitly {@link api.GeneCrisprPart.verify|verify} messages.
         * @param message GeneCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IGeneCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GeneCrisprPart message, length delimited. Does not implicitly {@link api.GeneCrisprPart.verify|verify} messages.
         * @param message GeneCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IGeneCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GeneCrisprPart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GeneCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.GeneCrisprPart;

        /**
         * Decodes a GeneCrisprPart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GeneCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.GeneCrisprPart;

        /**
         * Verifies a GeneCrisprPart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GeneCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeneCrisprPart
         */
        public static fromObject(object: { [k: string]: any }): api.GeneCrisprPart;

        /**
         * Creates a plain object from a GeneCrisprPart message. Also converts values to other types if specified.
         * @param message GeneCrisprPart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.GeneCrisprPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeneCrisprPart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DirectRepeatCrisprPart. */
    interface IDirectRepeatCrisprPart {

        /** DirectRepeatCrisprPart name */
        name?: (string|null);

        /** DirectRepeatCrisprPart version */
        version?: (number|null);

        /** DirectRepeatCrisprPart range */
        range?: (api.IRange|null);
    }

    /** Represents a DirectRepeatCrisprPart. */
    class DirectRepeatCrisprPart implements IDirectRepeatCrisprPart {

        /**
         * Constructs a new DirectRepeatCrisprPart.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IDirectRepeatCrisprPart);

        /** DirectRepeatCrisprPart name. */
        public name: string;

        /** DirectRepeatCrisprPart version. */
        public version: number;

        /** DirectRepeatCrisprPart range. */
        public range?: (api.IRange|null);

        /**
         * Creates a new DirectRepeatCrisprPart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DirectRepeatCrisprPart instance
         */
        public static create(properties?: api.IDirectRepeatCrisprPart): api.DirectRepeatCrisprPart;

        /**
         * Encodes the specified DirectRepeatCrisprPart message. Does not implicitly {@link api.DirectRepeatCrisprPart.verify|verify} messages.
         * @param message DirectRepeatCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IDirectRepeatCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DirectRepeatCrisprPart message, length delimited. Does not implicitly {@link api.DirectRepeatCrisprPart.verify|verify} messages.
         * @param message DirectRepeatCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IDirectRepeatCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DirectRepeatCrisprPart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DirectRepeatCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.DirectRepeatCrisprPart;

        /**
         * Decodes a DirectRepeatCrisprPart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DirectRepeatCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.DirectRepeatCrisprPart;

        /**
         * Verifies a DirectRepeatCrisprPart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DirectRepeatCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DirectRepeatCrisprPart
         */
        public static fromObject(object: { [k: string]: any }): api.DirectRepeatCrisprPart;

        /**
         * Creates a plain object from a DirectRepeatCrisprPart message. Also converts values to other types if specified.
         * @param message DirectRepeatCrisprPart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.DirectRepeatCrisprPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DirectRepeatCrisprPart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpacerCrisprPart. */
    interface ISpacerCrisprPart {

        /** SpacerCrisprPart id */
        id?: (number|null);

        /** SpacerCrisprPart version */
        version?: (number|null);

        /** SpacerCrisprPart range */
        range?: (api.IRange|null);
    }

    /** Represents a SpacerCrisprPart. */
    class SpacerCrisprPart implements ISpacerCrisprPart {

        /**
         * Constructs a new SpacerCrisprPart.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ISpacerCrisprPart);

        /** SpacerCrisprPart id. */
        public id: number;

        /** SpacerCrisprPart version. */
        public version: number;

        /** SpacerCrisprPart range. */
        public range?: (api.IRange|null);

        /**
         * Creates a new SpacerCrisprPart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpacerCrisprPart instance
         */
        public static create(properties?: api.ISpacerCrisprPart): api.SpacerCrisprPart;

        /**
         * Encodes the specified SpacerCrisprPart message. Does not implicitly {@link api.SpacerCrisprPart.verify|verify} messages.
         * @param message SpacerCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ISpacerCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpacerCrisprPart message, length delimited. Does not implicitly {@link api.SpacerCrisprPart.verify|verify} messages.
         * @param message SpacerCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ISpacerCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpacerCrisprPart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpacerCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.SpacerCrisprPart;

        /**
         * Decodes a SpacerCrisprPart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpacerCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.SpacerCrisprPart;

        /**
         * Verifies a SpacerCrisprPart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpacerCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpacerCrisprPart
         */
        public static fromObject(object: { [k: string]: any }): api.SpacerCrisprPart;

        /**
         * Creates a plain object from a SpacerCrisprPart message. Also converts values to other types if specified.
         * @param message SpacerCrisprPart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.SpacerCrisprPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpacerCrisprPart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InsertionSequenceCrisprPart. */
    interface IInsertionSequenceCrisprPart {

        /** InsertionSequenceCrisprPart name */
        name?: (string|null);

        /** InsertionSequenceCrisprPart isReverse */
        isReverse?: (boolean|null);

        /** InsertionSequenceCrisprPart range */
        range?: (api.IRange|null);
    }

    /** Represents an InsertionSequenceCrisprPart. */
    class InsertionSequenceCrisprPart implements IInsertionSequenceCrisprPart {

        /**
         * Constructs a new InsertionSequenceCrisprPart.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IInsertionSequenceCrisprPart);

        /** InsertionSequenceCrisprPart name. */
        public name: string;

        /** InsertionSequenceCrisprPart isReverse. */
        public isReverse: boolean;

        /** InsertionSequenceCrisprPart range. */
        public range?: (api.IRange|null);

        /**
         * Creates a new InsertionSequenceCrisprPart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InsertionSequenceCrisprPart instance
         */
        public static create(properties?: api.IInsertionSequenceCrisprPart): api.InsertionSequenceCrisprPart;

        /**
         * Encodes the specified InsertionSequenceCrisprPart message. Does not implicitly {@link api.InsertionSequenceCrisprPart.verify|verify} messages.
         * @param message InsertionSequenceCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IInsertionSequenceCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InsertionSequenceCrisprPart message, length delimited. Does not implicitly {@link api.InsertionSequenceCrisprPart.verify|verify} messages.
         * @param message InsertionSequenceCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IInsertionSequenceCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InsertionSequenceCrisprPart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InsertionSequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.InsertionSequenceCrisprPart;

        /**
         * Decodes an InsertionSequenceCrisprPart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InsertionSequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.InsertionSequenceCrisprPart;

        /**
         * Verifies an InsertionSequenceCrisprPart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InsertionSequenceCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InsertionSequenceCrisprPart
         */
        public static fromObject(object: { [k: string]: any }): api.InsertionSequenceCrisprPart;

        /**
         * Creates a plain object from an InsertionSequenceCrisprPart message. Also converts values to other types if specified.
         * @param message InsertionSequenceCrisprPart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.InsertionSequenceCrisprPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InsertionSequenceCrisprPart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NamedSequenceCrisprPart. */
    interface INamedSequenceCrisprPart {

        /** NamedSequenceCrisprPart name */
        name?: (string|null);
    }

    /** Represents a NamedSequenceCrisprPart. */
    class NamedSequenceCrisprPart implements INamedSequenceCrisprPart {

        /**
         * Constructs a new NamedSequenceCrisprPart.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.INamedSequenceCrisprPart);

        /** NamedSequenceCrisprPart name. */
        public name: string;

        /**
         * Creates a new NamedSequenceCrisprPart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NamedSequenceCrisprPart instance
         */
        public static create(properties?: api.INamedSequenceCrisprPart): api.NamedSequenceCrisprPart;

        /**
         * Encodes the specified NamedSequenceCrisprPart message. Does not implicitly {@link api.NamedSequenceCrisprPart.verify|verify} messages.
         * @param message NamedSequenceCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.INamedSequenceCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NamedSequenceCrisprPart message, length delimited. Does not implicitly {@link api.NamedSequenceCrisprPart.verify|verify} messages.
         * @param message NamedSequenceCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.INamedSequenceCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NamedSequenceCrisprPart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NamedSequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.NamedSequenceCrisprPart;

        /**
         * Decodes a NamedSequenceCrisprPart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NamedSequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.NamedSequenceCrisprPart;

        /**
         * Verifies a NamedSequenceCrisprPart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NamedSequenceCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NamedSequenceCrisprPart
         */
        public static fromObject(object: { [k: string]: any }): api.NamedSequenceCrisprPart;

        /**
         * Creates a plain object from a NamedSequenceCrisprPart message. Also converts values to other types if specified.
         * @param message NamedSequenceCrisprPart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.NamedSequenceCrisprPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NamedSequenceCrisprPart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SequenceCrisprPart. */
    interface ISequenceCrisprPart {

        /** SequenceCrisprPart value */
        value?: (string|null);
    }

    /** Represents a SequenceCrisprPart. */
    class SequenceCrisprPart implements ISequenceCrisprPart {

        /**
         * Constructs a new SequenceCrisprPart.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ISequenceCrisprPart);

        /** SequenceCrisprPart value. */
        public value: string;

        /**
         * Creates a new SequenceCrisprPart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SequenceCrisprPart instance
         */
        public static create(properties?: api.ISequenceCrisprPart): api.SequenceCrisprPart;

        /**
         * Encodes the specified SequenceCrisprPart message. Does not implicitly {@link api.SequenceCrisprPart.verify|verify} messages.
         * @param message SequenceCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ISequenceCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SequenceCrisprPart message, length delimited. Does not implicitly {@link api.SequenceCrisprPart.verify|verify} messages.
         * @param message SequenceCrisprPart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ISequenceCrisprPart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SequenceCrisprPart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.SequenceCrisprPart;

        /**
         * Decodes a SequenceCrisprPart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.SequenceCrisprPart;

        /**
         * Verifies a SequenceCrisprPart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SequenceCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SequenceCrisprPart
         */
        public static fromObject(object: { [k: string]: any }): api.SequenceCrisprPart;

        /**
         * Creates a plain object from a SequenceCrisprPart message. Also converts values to other types if specified.
         * @param message SequenceCrisprPart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.SequenceCrisprPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SequenceCrisprPart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Range. */
    interface IRange {

        /** Range from */
        from?: (number|null);

        /** Range to */
        to?: (number|null);
    }

    /** Represents a Range. */
    class Range implements IRange {

        /**
         * Constructs a new Range.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IRange);

        /** Range from. */
        public from: number;

        /** Range to. */
        public to: number;

        /**
         * Creates a new Range instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Range instance
         */
        public static create(properties?: api.IRange): api.Range;

        /**
         * Encodes the specified Range message. Does not implicitly {@link api.Range.verify|verify} messages.
         * @param message Range message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Range message, length delimited. Does not implicitly {@link api.Range.verify|verify} messages.
         * @param message Range message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Range message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Range;

        /**
         * Decodes a Range message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Range;

        /**
         * Verifies a Range message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Range message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Range
         */
        public static fromObject(object: { [k: string]: any }): api.Range;

        /**
         * Creates a plain object from a Range message. Also converts values to other types if specified.
         * @param message Range
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Range to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StrainResult. */
    interface IStrainResult {

        /** StrainResult strainId */
        strainId?: (string|null);

        /** StrainResult missingGenes */
        missingGenes?: (api.IGene[]|null);

        /** StrainResult insertionSequences */
        insertionSequences?: (api.IInsertionSequence[]|null);

        /** StrainResult spoligotype43Blast */
        spoligotype43Blast?: (boolean[]|null);

        /** StrainResult spoligotype98Blast */
        spoligotype98Blast?: (boolean[]|null);

        /** StrainResult spoligotype43Crispr */
        spoligotype43Crispr?: (boolean[]|null);

        /** StrainResult spoligotype98Crispr */
        spoligotype98Crispr?: (boolean[]|null);

        /** StrainResult spoligotype43MatchBlast */
        spoligotype43MatchBlast?: (boolean|null);

        /** StrainResult spoligotype98MatchBlast */
        spoligotype98MatchBlast?: (boolean|null);

        /** StrainResult spoligotypeBloinBlast */
        spoligotypeBloinBlast?: (boolean[]|null);

        /** StrainResult crispr */
        crispr?: (api.ICrisprPart[]|null);

        /** StrainResult snp */
        snp?: (api.ISnp[]|null);
    }

    /** Represents a StrainResult. */
    class StrainResult implements IStrainResult {

        /**
         * Constructs a new StrainResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IStrainResult);

        /** StrainResult strainId. */
        public strainId: string;

        /** StrainResult missingGenes. */
        public missingGenes: api.IGene[];

        /** StrainResult insertionSequences. */
        public insertionSequences: api.IInsertionSequence[];

        /** StrainResult spoligotype43Blast. */
        public spoligotype43Blast: boolean[];

        /** StrainResult spoligotype98Blast. */
        public spoligotype98Blast: boolean[];

        /** StrainResult spoligotype43Crispr. */
        public spoligotype43Crispr: boolean[];

        /** StrainResult spoligotype98Crispr. */
        public spoligotype98Crispr: boolean[];

        /** StrainResult spoligotype43MatchBlast. */
        public spoligotype43MatchBlast: boolean;

        /** StrainResult spoligotype98MatchBlast. */
        public spoligotype98MatchBlast: boolean;

        /** StrainResult spoligotypeBloinBlast. */
        public spoligotypeBloinBlast: boolean[];

        /** StrainResult crispr. */
        public crispr: api.ICrisprPart[];

        /** StrainResult snp. */
        public snp: api.ISnp[];

        /**
         * Creates a new StrainResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StrainResult instance
         */
        public static create(properties?: api.IStrainResult): api.StrainResult;

        /**
         * Encodes the specified StrainResult message. Does not implicitly {@link api.StrainResult.verify|verify} messages.
         * @param message StrainResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IStrainResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StrainResult message, length delimited. Does not implicitly {@link api.StrainResult.verify|verify} messages.
         * @param message StrainResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IStrainResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StrainResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrainResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.StrainResult;

        /**
         * Decodes a StrainResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrainResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.StrainResult;

        /**
         * Verifies a StrainResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StrainResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StrainResult
         */
        public static fromObject(object: { [k: string]: any }): api.StrainResult;

        /**
         * Creates a plain object from a StrainResult message. Also converts values to other types if specified.
         * @param message StrainResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.StrainResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StrainResult to JSON.
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
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
