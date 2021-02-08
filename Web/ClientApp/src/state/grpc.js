/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const api = ($root.api = (() => {
    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    const api = {};

    api.Api = (function () {
        /**
         * Constructs a new Api service.
         * @memberof api
         * @classdesc Represents an Api
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Api(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Api.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Api;

        /**
         * Creates new Api service using the specified rpc implementation.
         * @function create
         * @memberof api.Api
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Api} RPC service. Useful where requests and/or responses are streamed.
         */
        Api.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link api.Api#sayHello}.
         * @memberof api.Api
         * @typedef SayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.HelloReply} [response] HelloReply
         */

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof api.Api
         * @instance
         * @param {api.IHelloRequest} request HelloRequest message or plain object
         * @param {api.Api.SayHelloCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
            (Api.prototype.sayHello = function sayHello(request, callback) {
                return this.rpcCall(
                    sayHello,
                    $root.api.HelloRequest,
                    $root.api.HelloReply,
                    request,
                    callback
                );
            }),
            "name",
            { value: "SayHello" }
        );

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof api.Api
         * @instance
         * @param {api.IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<api.HelloReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.Api#search}.
         * @memberof api.Api
         * @typedef SearchCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.SearchReply} [response] SearchReply
         */

        /**
         * Calls Search.
         * @function search
         * @memberof api.Api
         * @instance
         * @param {api.ISearchRequest} request SearchRequest message or plain object
         * @param {api.Api.SearchCallback} callback Node-style callback called with the error, if any, and SearchReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
            (Api.prototype.search = function search(request, callback) {
                return this.rpcCall(
                    search,
                    $root.api.SearchRequest,
                    $root.api.SearchReply,
                    request,
                    callback
                );
            }),
            "name",
            { value: "Search" }
        );

        /**
         * Calls Search.
         * @function search
         * @memberof api.Api
         * @instance
         * @param {api.ISearchRequest} request SearchRequest message or plain object
         * @returns {Promise<api.SearchReply>} Promise
         * @variation 2
         */

        return Api;
    })();

    api.HelloRequest = (function () {
        /**
         * Properties of a HelloRequest.
         * @memberof api
         * @interface IHelloRequest
         * @property {number|null} [clusteringLevel] HelloRequest clusteringLevel
         */

        /**
         * Constructs a new HelloRequest.
         * @memberof api
         * @classdesc Represents a HelloRequest.
         * @implements IHelloRequest
         * @constructor
         * @param {api.IHelloRequest=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloRequest clusteringLevel.
         * @member {number} clusteringLevel
         * @memberof api.HelloRequest
         * @instance
         */
        HelloRequest.prototype.clusteringLevel = 0;

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @function create
         * @memberof api.HelloRequest
         * @static
         * @param {api.IHelloRequest=} [properties] Properties to set
         * @returns {api.HelloRequest} HelloRequest instance
         */
        HelloRequest.create = function create(properties) {
            return new HelloRequest(properties);
        };

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link api.HelloRequest.verify|verify} messages.
         * @function encode
         * @memberof api.HelloRequest
         * @static
         * @param {api.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (
                message.clusteringLevel != null &&
                Object.hasOwnProperty.call(message, "clusteringLevel")
            )
                writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.clusteringLevel);
            return writer;
        };

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link api.HelloRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.HelloRequest
         * @static
         * @param {api.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.HelloRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.clusteringLevel = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloRequest message.
         * @function verify
         * @memberof api.HelloRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.clusteringLevel != null && message.hasOwnProperty("clusteringLevel"))
                if (typeof message.clusteringLevel !== "number")
                    return "clusteringLevel: number expected";
            return null;
        };

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.HelloRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.HelloRequest} HelloRequest
         */
        HelloRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.HelloRequest) return object;
            let message = new $root.api.HelloRequest();
            if (object.clusteringLevel != null)
                message.clusteringLevel = Number(object.clusteringLevel);
            return message;
        };

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.HelloRequest
         * @static
         * @param {api.HelloRequest} message HelloRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.defaults) object.clusteringLevel = 0;
            if (message.clusteringLevel != null && message.hasOwnProperty("clusteringLevel"))
                object.clusteringLevel =
                    options.json && !isFinite(message.clusteringLevel)
                        ? String(message.clusteringLevel)
                        : message.clusteringLevel;
            return object;
        };

        /**
         * Converts this HelloRequest to JSON.
         * @function toJSON
         * @memberof api.HelloRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloRequest;
    })();

    api.HelloReply = (function () {
        /**
         * Properties of a HelloReply.
         * @memberof api
         * @interface IHelloReply
         * @property {api.IGraph|null} [graph] HelloReply graph
         */

        /**
         * Constructs a new HelloReply.
         * @memberof api
         * @classdesc Represents a HelloReply.
         * @implements IHelloReply
         * @constructor
         * @param {api.IHelloReply=} [properties] Properties to set
         */
        function HelloReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReply graph.
         * @member {api.IGraph|null|undefined} graph
         * @memberof api.HelloReply
         * @instance
         */
        HelloReply.prototype.graph = null;

        /**
         * Creates a new HelloReply instance using the specified properties.
         * @function create
         * @memberof api.HelloReply
         * @static
         * @param {api.IHelloReply=} [properties] Properties to set
         * @returns {api.HelloReply} HelloReply instance
         */
        HelloReply.create = function create(properties) {
            return new HelloReply(properties);
        };

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link api.HelloReply.verify|verify} messages.
         * @function encode
         * @memberof api.HelloReply
         * @static
         * @param {api.IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.graph != null && Object.hasOwnProperty.call(message, "graph"))
                $root.api.Graph.encode(
                    message.graph,
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                ).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link api.HelloReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.HelloReply
         * @static
         * @param {api.IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @function decode
         * @memberof api.HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.HelloReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.graph = $root.api.Graph.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReply message.
         * @function verify
         * @memberof api.HelloReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.graph != null && message.hasOwnProperty("graph")) {
                let error = $root.api.Graph.verify(message.graph);
                if (error) return "graph." + error;
            }
            return null;
        };

        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.HelloReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.HelloReply} HelloReply
         */
        HelloReply.fromObject = function fromObject(object) {
            if (object instanceof $root.api.HelloReply) return object;
            let message = new $root.api.HelloReply();
            if (object.graph != null) {
                if (typeof object.graph !== "object")
                    throw TypeError(".api.HelloReply.graph: object expected");
                message.graph = $root.api.Graph.fromObject(object.graph);
            }
            return message;
        };

        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.HelloReply
         * @static
         * @param {api.HelloReply} message HelloReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReply.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.defaults) object.graph = null;
            if (message.graph != null && message.hasOwnProperty("graph"))
                object.graph = $root.api.Graph.toObject(message.graph, options);
            return object;
        };

        /**
         * Converts this HelloReply to JSON.
         * @function toJSON
         * @memberof api.HelloReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloReply;
    })();

    api.SearchRequest = (function () {
        /**
         * Properties of a SearchRequest.
         * @memberof api
         * @interface ISearchRequest
         * @property {api.IBoolStrainCondition|null} [condition] SearchRequest condition
         */

        /**
         * Constructs a new SearchRequest.
         * @memberof api
         * @classdesc Represents a SearchRequest.
         * @implements ISearchRequest
         * @constructor
         * @param {api.ISearchRequest=} [properties] Properties to set
         */
        function SearchRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchRequest condition.
         * @member {api.IBoolStrainCondition|null|undefined} condition
         * @memberof api.SearchRequest
         * @instance
         */
        SearchRequest.prototype.condition = null;

        /**
         * Creates a new SearchRequest instance using the specified properties.
         * @function create
         * @memberof api.SearchRequest
         * @static
         * @param {api.ISearchRequest=} [properties] Properties to set
         * @returns {api.SearchRequest} SearchRequest instance
         */
        SearchRequest.create = function create(properties) {
            return new SearchRequest(properties);
        };

        /**
         * Encodes the specified SearchRequest message. Does not implicitly {@link api.SearchRequest.verify|verify} messages.
         * @function encode
         * @memberof api.SearchRequest
         * @static
         * @param {api.ISearchRequest} message SearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                $root.api.BoolStrainCondition.encode(
                    message.condition,
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                ).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link api.SearchRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.SearchRequest
         * @static
         * @param {api.ISearchRequest} message SearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.SearchRequest} SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.SearchRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.condition = $root.api.BoolStrainCondition.decode(
                            reader,
                            reader.uint32()
                        );
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.SearchRequest} SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchRequest message.
         * @function verify
         * @memberof api.SearchRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.condition != null && message.hasOwnProperty("condition")) {
                let error = $root.api.BoolStrainCondition.verify(message.condition);
                if (error) return "condition." + error;
            }
            return null;
        };

        /**
         * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.SearchRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.SearchRequest} SearchRequest
         */
        SearchRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.SearchRequest) return object;
            let message = new $root.api.SearchRequest();
            if (object.condition != null) {
                if (typeof object.condition !== "object")
                    throw TypeError(".api.SearchRequest.condition: object expected");
                message.condition = $root.api.BoolStrainCondition.fromObject(object.condition);
            }
            return message;
        };

        /**
         * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.SearchRequest
         * @static
         * @param {api.SearchRequest} message SearchRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.defaults) object.condition = null;
            if (message.condition != null && message.hasOwnProperty("condition"))
                object.condition = $root.api.BoolStrainCondition.toObject(
                    message.condition,
                    options
                );
            return object;
        };

        /**
         * Converts this SearchRequest to JSON.
         * @function toJSON
         * @memberof api.SearchRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SearchRequest;
    })();

    api.SearchReply = (function () {
        /**
         * Properties of a SearchReply.
         * @memberof api
         * @interface ISearchReply
         */

        /**
         * Constructs a new SearchReply.
         * @memberof api
         * @classdesc Represents a SearchReply.
         * @implements ISearchReply
         * @constructor
         * @param {api.ISearchReply=} [properties] Properties to set
         */
        function SearchReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SearchReply instance using the specified properties.
         * @function create
         * @memberof api.SearchReply
         * @static
         * @param {api.ISearchReply=} [properties] Properties to set
         * @returns {api.SearchReply} SearchReply instance
         */
        SearchReply.create = function create(properties) {
            return new SearchReply(properties);
        };

        /**
         * Encodes the specified SearchReply message. Does not implicitly {@link api.SearchReply.verify|verify} messages.
         * @function encode
         * @memberof api.SearchReply
         * @static
         * @param {api.ISearchReply} message SearchReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchReply.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SearchReply message, length delimited. Does not implicitly {@link api.SearchReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.SearchReply
         * @static
         * @param {api.ISearchReply} message SearchReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchReply message from the specified reader or buffer.
         * @function decode
         * @memberof api.SearchReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.SearchReply} SearchReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.SearchReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.SearchReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.SearchReply} SearchReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchReply message.
         * @function verify
         * @memberof api.SearchReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            return null;
        };

        /**
         * Creates a SearchReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.SearchReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.SearchReply} SearchReply
         */
        SearchReply.fromObject = function fromObject(object) {
            if (object instanceof $root.api.SearchReply) return object;
            return new $root.api.SearchReply();
        };

        /**
         * Creates a plain object from a SearchReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.SearchReply
         * @static
         * @param {api.SearchReply} message SearchReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchReply.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SearchReply to JSON.
         * @function toJSON
         * @memberof api.SearchReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SearchReply;
    })();

    api.Graph = (function () {
        /**
         * Properties of a Graph.
         * @memberof api
         * @interface IGraph
         * @property {Array.<api.INode>|null} [nodes] Graph nodes
         * @property {Array.<api.IEdge>|null} [edges] Graph edges
         */

        /**
         * Constructs a new Graph.
         * @memberof api
         * @classdesc Represents a Graph.
         * @implements IGraph
         * @constructor
         * @param {api.IGraph=} [properties] Properties to set
         */
        function Graph(properties) {
            this.nodes = [];
            this.edges = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Graph nodes.
         * @member {Array.<api.INode>} nodes
         * @memberof api.Graph
         * @instance
         */
        Graph.prototype.nodes = $util.emptyArray;

        /**
         * Graph edges.
         * @member {Array.<api.IEdge>} edges
         * @memberof api.Graph
         * @instance
         */
        Graph.prototype.edges = $util.emptyArray;

        /**
         * Creates a new Graph instance using the specified properties.
         * @function create
         * @memberof api.Graph
         * @static
         * @param {api.IGraph=} [properties] Properties to set
         * @returns {api.Graph} Graph instance
         */
        Graph.create = function create(properties) {
            return new Graph(properties);
        };

        /**
         * Encodes the specified Graph message. Does not implicitly {@link api.Graph.verify|verify} messages.
         * @function encode
         * @memberof api.Graph
         * @static
         * @param {api.IGraph} message Graph message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Graph.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.nodes != null && message.nodes.length)
                for (let i = 0; i < message.nodes.length; ++i)
                    $root.api.Node.encode(
                        message.nodes[i],
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
            if (message.edges != null && message.edges.length)
                for (let i = 0; i < message.edges.length; ++i)
                    $root.api.Edge.encode(
                        message.edges[i],
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Graph message, length delimited. Does not implicitly {@link api.Graph.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Graph
         * @static
         * @param {api.IGraph} message Graph message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Graph.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Graph message from the specified reader or buffer.
         * @function decode
         * @memberof api.Graph
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Graph} Graph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Graph.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.Graph();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.nodes && message.nodes.length)) message.nodes = [];
                        message.nodes.push($root.api.Node.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        if (!(message.edges && message.edges.length)) message.edges = [];
                        message.edges.push($root.api.Edge.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a Graph message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Graph
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Graph} Graph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Graph.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Graph message.
         * @function verify
         * @memberof api.Graph
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Graph.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.nodes != null && message.hasOwnProperty("nodes")) {
                if (!Array.isArray(message.nodes)) return "nodes: array expected";
                for (let i = 0; i < message.nodes.length; ++i) {
                    let error = $root.api.Node.verify(message.nodes[i]);
                    if (error) return "nodes." + error;
                }
            }
            if (message.edges != null && message.hasOwnProperty("edges")) {
                if (!Array.isArray(message.edges)) return "edges: array expected";
                for (let i = 0; i < message.edges.length; ++i) {
                    let error = $root.api.Edge.verify(message.edges[i]);
                    if (error) return "edges." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Graph message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Graph
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Graph} Graph
         */
        Graph.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Graph) return object;
            let message = new $root.api.Graph();
            if (object.nodes) {
                if (!Array.isArray(object.nodes))
                    throw TypeError(".api.Graph.nodes: array expected");
                message.nodes = [];
                for (let i = 0; i < object.nodes.length; ++i) {
                    if (typeof object.nodes[i] !== "object")
                        throw TypeError(".api.Graph.nodes: object expected");
                    message.nodes[i] = $root.api.Node.fromObject(object.nodes[i]);
                }
            }
            if (object.edges) {
                if (!Array.isArray(object.edges))
                    throw TypeError(".api.Graph.edges: array expected");
                message.edges = [];
                for (let i = 0; i < object.edges.length; ++i) {
                    if (typeof object.edges[i] !== "object")
                        throw TypeError(".api.Graph.edges: object expected");
                    message.edges[i] = $root.api.Edge.fromObject(object.edges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Graph message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Graph
         * @static
         * @param {api.Graph} message Graph
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Graph.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.nodes = [];
                object.edges = [];
            }
            if (message.nodes && message.nodes.length) {
                object.nodes = [];
                for (let j = 0; j < message.nodes.length; ++j)
                    object.nodes[j] = $root.api.Node.toObject(message.nodes[j], options);
            }
            if (message.edges && message.edges.length) {
                object.edges = [];
                for (let j = 0; j < message.edges.length; ++j)
                    object.edges[j] = $root.api.Edge.toObject(message.edges[j], options);
            }
            return object;
        };

        /**
         * Converts this Graph to JSON.
         * @function toJSON
         * @memberof api.Graph
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Graph.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Graph;
    })();

    api.Node = (function () {
        /**
         * Properties of a Node.
         * @memberof api
         * @interface INode
         * @property {number|null} [id] Node id
         * @property {number|null} [positionX] Node positionX
         * @property {number|null} [positionY] Node positionY
         */

        /**
         * Constructs a new Node.
         * @memberof api
         * @classdesc Represents a Node.
         * @implements INode
         * @constructor
         * @param {api.INode=} [properties] Properties to set
         */
        function Node(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Node id.
         * @member {number} id
         * @memberof api.Node
         * @instance
         */
        Node.prototype.id = 0;

        /**
         * Node positionX.
         * @member {number} positionX
         * @memberof api.Node
         * @instance
         */
        Node.prototype.positionX = 0;

        /**
         * Node positionY.
         * @member {number} positionY
         * @memberof api.Node
         * @instance
         */
        Node.prototype.positionY = 0;

        /**
         * Creates a new Node instance using the specified properties.
         * @function create
         * @memberof api.Node
         * @static
         * @param {api.INode=} [properties] Properties to set
         * @returns {api.Node} Node instance
         */
        Node.create = function create(properties) {
            return new Node(properties);
        };

        /**
         * Encodes the specified Node message. Does not implicitly {@link api.Node.verify|verify} messages.
         * @function encode
         * @memberof api.Node
         * @static
         * @param {api.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
            if (message.positionX != null && Object.hasOwnProperty.call(message, "positionX"))
                writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.positionX);
            if (message.positionY != null && Object.hasOwnProperty.call(message, "positionY"))
                writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.positionY);
            return writer;
        };

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link api.Node.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Node
         * @static
         * @param {api.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @function decode
         * @memberof api.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.Node();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.positionX = reader.double();
                        break;
                    case 3:
                        message.positionY = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Node message.
         * @function verify
         * @memberof api.Node
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Node.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id)) return "id: integer expected";
            if (message.positionX != null && message.hasOwnProperty("positionX"))
                if (typeof message.positionX !== "number") return "positionX: number expected";
            if (message.positionY != null && message.hasOwnProperty("positionY"))
                if (typeof message.positionY !== "number") return "positionY: number expected";
            return null;
        };

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Node
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Node} Node
         */
        Node.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Node) return object;
            let message = new $root.api.Node();
            if (object.id != null) message.id = object.id | 0;
            if (object.positionX != null) message.positionX = Number(object.positionX);
            if (object.positionY != null) message.positionY = Number(object.positionY);
            return message;
        };

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Node
         * @static
         * @param {api.Node} message Node
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Node.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.positionX = 0;
                object.positionY = 0;
            }
            if (message.id != null && message.hasOwnProperty("id")) object.id = message.id;
            if (message.positionX != null && message.hasOwnProperty("positionX"))
                object.positionX =
                    options.json && !isFinite(message.positionX)
                        ? String(message.positionX)
                        : message.positionX;
            if (message.positionY != null && message.hasOwnProperty("positionY"))
                object.positionY =
                    options.json && !isFinite(message.positionY)
                        ? String(message.positionY)
                        : message.positionY;
            return object;
        };

        /**
         * Converts this Node to JSON.
         * @function toJSON
         * @memberof api.Node
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Node.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Node;
    })();

    api.Edge = (function () {
        /**
         * Properties of an Edge.
         * @memberof api
         * @interface IEdge
         * @property {number|null} [id] Edge id
         * @property {number|null} [firstNode] Edge firstNode
         * @property {number|null} [secondNode] Edge secondNode
         */

        /**
         * Constructs a new Edge.
         * @memberof api
         * @classdesc Represents an Edge.
         * @implements IEdge
         * @constructor
         * @param {api.IEdge=} [properties] Properties to set
         */
        function Edge(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Edge id.
         * @member {number} id
         * @memberof api.Edge
         * @instance
         */
        Edge.prototype.id = 0;

        /**
         * Edge firstNode.
         * @member {number} firstNode
         * @memberof api.Edge
         * @instance
         */
        Edge.prototype.firstNode = 0;

        /**
         * Edge secondNode.
         * @member {number} secondNode
         * @memberof api.Edge
         * @instance
         */
        Edge.prototype.secondNode = 0;

        /**
         * Creates a new Edge instance using the specified properties.
         * @function create
         * @memberof api.Edge
         * @static
         * @param {api.IEdge=} [properties] Properties to set
         * @returns {api.Edge} Edge instance
         */
        Edge.create = function create(properties) {
            return new Edge(properties);
        };

        /**
         * Encodes the specified Edge message. Does not implicitly {@link api.Edge.verify|verify} messages.
         * @function encode
         * @memberof api.Edge
         * @static
         * @param {api.IEdge} message Edge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Edge.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
            if (message.firstNode != null && Object.hasOwnProperty.call(message, "firstNode"))
                writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.firstNode);
            if (message.secondNode != null && Object.hasOwnProperty.call(message, "secondNode"))
                writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.secondNode);
            return writer;
        };

        /**
         * Encodes the specified Edge message, length delimited. Does not implicitly {@link api.Edge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Edge
         * @static
         * @param {api.IEdge} message Edge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Edge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Edge message from the specified reader or buffer.
         * @function decode
         * @memberof api.Edge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Edge} Edge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Edge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.Edge();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.firstNode = reader.int32();
                        break;
                    case 3:
                        message.secondNode = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an Edge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Edge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Edge} Edge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Edge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Edge message.
         * @function verify
         * @memberof api.Edge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Edge.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id)) return "id: integer expected";
            if (message.firstNode != null && message.hasOwnProperty("firstNode"))
                if (!$util.isInteger(message.firstNode)) return "firstNode: integer expected";
            if (message.secondNode != null && message.hasOwnProperty("secondNode"))
                if (!$util.isInteger(message.secondNode)) return "secondNode: integer expected";
            return null;
        };

        /**
         * Creates an Edge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Edge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Edge} Edge
         */
        Edge.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Edge) return object;
            let message = new $root.api.Edge();
            if (object.id != null) message.id = object.id | 0;
            if (object.firstNode != null) message.firstNode = object.firstNode | 0;
            if (object.secondNode != null) message.secondNode = object.secondNode | 0;
            return message;
        };

        /**
         * Creates a plain object from an Edge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Edge
         * @static
         * @param {api.Edge} message Edge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Edge.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.firstNode = 0;
                object.secondNode = 0;
            }
            if (message.id != null && message.hasOwnProperty("id")) object.id = message.id;
            if (message.firstNode != null && message.hasOwnProperty("firstNode"))
                object.firstNode = message.firstNode;
            if (message.secondNode != null && message.hasOwnProperty("secondNode"))
                object.secondNode = message.secondNode;
            return object;
        };

        /**
         * Converts this Edge to JSON.
         * @function toJSON
         * @memberof api.Edge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Edge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Edge;
    })();

    /**
     * BoolOperator enum.
     * @name api.BoolOperator
     * @enum {number}
     * @property {number} OR=0 OR value
     * @property {number} AND=1 AND value
     */
    api.BoolOperator = (function () {
        const valuesById = {},
            values = Object.create(valuesById);
        values[(valuesById[0] = "OR")] = 0;
        values[(valuesById[1] = "AND")] = 1;
        return values;
    })();

    api.StrainCondition = (function () {
        /**
         * Properties of a StrainCondition.
         * @memberof api
         * @interface IStrainCondition
         * @property {boolean|null} [negate] StrainCondition negate
         * @property {api.IAccessionCondition|null} [accession] StrainCondition accession
         * @property {api.IBiosampleCondition|null} [biosample] StrainCondition biosample
         * @property {api.ICountryCondition|null} [country] StrainCondition country
         * @property {api.IDateCondition|null} [date] StrainCondition date
         * @property {api.IGeneStrainCondition|null} [gene] StrainCondition gene
         * @property {api.ILineageStrainCondition|null} [lineage] StrainCondition lineage
         * @property {api.IBoolStrainCondition|null} [bool] StrainCondition bool
         */

        /**
         * Constructs a new StrainCondition.
         * @memberof api
         * @classdesc Represents a StrainCondition.
         * @implements IStrainCondition
         * @constructor
         * @param {api.IStrainCondition=} [properties] Properties to set
         */
        function StrainCondition(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * StrainCondition negate.
         * @member {boolean} negate
         * @memberof api.StrainCondition
         * @instance
         */
        StrainCondition.prototype.negate = false;

        /**
         * StrainCondition accession.
         * @member {api.IAccessionCondition|null|undefined} accession
         * @memberof api.StrainCondition
         * @instance
         */
        StrainCondition.prototype.accession = null;

        /**
         * StrainCondition biosample.
         * @member {api.IBiosampleCondition|null|undefined} biosample
         * @memberof api.StrainCondition
         * @instance
         */
        StrainCondition.prototype.biosample = null;

        /**
         * StrainCondition country.
         * @member {api.ICountryCondition|null|undefined} country
         * @memberof api.StrainCondition
         * @instance
         */
        StrainCondition.prototype.country = null;

        /**
         * StrainCondition date.
         * @member {api.IDateCondition|null|undefined} date
         * @memberof api.StrainCondition
         * @instance
         */
        StrainCondition.prototype.date = null;

        /**
         * StrainCondition gene.
         * @member {api.IGeneStrainCondition|null|undefined} gene
         * @memberof api.StrainCondition
         * @instance
         */
        StrainCondition.prototype.gene = null;

        /**
         * StrainCondition lineage.
         * @member {api.ILineageStrainCondition|null|undefined} lineage
         * @memberof api.StrainCondition
         * @instance
         */
        StrainCondition.prototype.lineage = null;

        /**
         * StrainCondition bool.
         * @member {api.IBoolStrainCondition|null|undefined} bool
         * @memberof api.StrainCondition
         * @instance
         */
        StrainCondition.prototype.bool = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * StrainCondition condition.
         * @member {"accession"|"biosample"|"country"|"date"|"gene"|"lineage"|"bool"|undefined} condition
         * @memberof api.StrainCondition
         * @instance
         */
        Object.defineProperty(StrainCondition.prototype, "condition", {
            get: $util.oneOfGetter(
                ($oneOfFields = [
                    "accession",
                    "biosample",
                    "country",
                    "date",
                    "gene",
                    "lineage",
                    "bool",
                ])
            ),
            set: $util.oneOfSetter($oneOfFields),
        });

        /**
         * Creates a new StrainCondition instance using the specified properties.
         * @function create
         * @memberof api.StrainCondition
         * @static
         * @param {api.IStrainCondition=} [properties] Properties to set
         * @returns {api.StrainCondition} StrainCondition instance
         */
        StrainCondition.create = function create(properties) {
            return new StrainCondition(properties);
        };

        /**
         * Encodes the specified StrainCondition message. Does not implicitly {@link api.StrainCondition.verify|verify} messages.
         * @function encode
         * @memberof api.StrainCondition
         * @static
         * @param {api.IStrainCondition} message StrainCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainCondition.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.negate != null && Object.hasOwnProperty.call(message, "negate"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.negate);
            if (message.accession != null && Object.hasOwnProperty.call(message, "accession"))
                $root.api.AccessionCondition.encode(
                    message.accession,
                    writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                ).ldelim();
            if (message.biosample != null && Object.hasOwnProperty.call(message, "biosample"))
                $root.api.BiosampleCondition.encode(
                    message.biosample,
                    writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                ).ldelim();
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                $root.api.CountryCondition.encode(
                    message.country,
                    writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
                ).ldelim();
            if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                $root.api.DateCondition.encode(
                    message.date,
                    writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
                ).ldelim();
            if (message.gene != null && Object.hasOwnProperty.call(message, "gene"))
                $root.api.GeneStrainCondition.encode(
                    message.gene,
                    writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
                ).ldelim();
            if (message.lineage != null && Object.hasOwnProperty.call(message, "lineage"))
                $root.api.LineageStrainCondition.encode(
                    message.lineage,
                    writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
                ).ldelim();
            if (message.bool != null && Object.hasOwnProperty.call(message, "bool"))
                $root.api.BoolStrainCondition.encode(
                    message.bool,
                    writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
                ).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StrainCondition message, length delimited. Does not implicitly {@link api.StrainCondition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.StrainCondition
         * @static
         * @param {api.IStrainCondition} message StrainCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainCondition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StrainCondition message from the specified reader or buffer.
         * @function decode
         * @memberof api.StrainCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.StrainCondition} StrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainCondition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.StrainCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.negate = reader.bool();
                        break;
                    case 2:
                        message.accession = $root.api.AccessionCondition.decode(
                            reader,
                            reader.uint32()
                        );
                        break;
                    case 3:
                        message.biosample = $root.api.BiosampleCondition.decode(
                            reader,
                            reader.uint32()
                        );
                        break;
                    case 4:
                        message.country = $root.api.CountryCondition.decode(
                            reader,
                            reader.uint32()
                        );
                        break;
                    case 5:
                        message.date = $root.api.DateCondition.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.gene = $root.api.GeneStrainCondition.decode(
                            reader,
                            reader.uint32()
                        );
                        break;
                    case 7:
                        message.lineage = $root.api.LineageStrainCondition.decode(
                            reader,
                            reader.uint32()
                        );
                        break;
                    case 8:
                        message.bool = $root.api.BoolStrainCondition.decode(
                            reader,
                            reader.uint32()
                        );
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a StrainCondition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.StrainCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.StrainCondition} StrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainCondition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StrainCondition message.
         * @function verify
         * @memberof api.StrainCondition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StrainCondition.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            let properties = {};
            if (message.negate != null && message.hasOwnProperty("negate"))
                if (typeof message.negate !== "boolean") return "negate: boolean expected";
            if (message.accession != null && message.hasOwnProperty("accession")) {
                properties.condition = 1;
                {
                    let error = $root.api.AccessionCondition.verify(message.accession);
                    if (error) return "accession." + error;
                }
            }
            if (message.biosample != null && message.hasOwnProperty("biosample")) {
                if (properties.condition === 1) return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.BiosampleCondition.verify(message.biosample);
                    if (error) return "biosample." + error;
                }
            }
            if (message.country != null && message.hasOwnProperty("country")) {
                if (properties.condition === 1) return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.CountryCondition.verify(message.country);
                    if (error) return "country." + error;
                }
            }
            if (message.date != null && message.hasOwnProperty("date")) {
                if (properties.condition === 1) return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.DateCondition.verify(message.date);
                    if (error) return "date." + error;
                }
            }
            if (message.gene != null && message.hasOwnProperty("gene")) {
                if (properties.condition === 1) return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.GeneStrainCondition.verify(message.gene);
                    if (error) return "gene." + error;
                }
            }
            if (message.lineage != null && message.hasOwnProperty("lineage")) {
                if (properties.condition === 1) return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.LineageStrainCondition.verify(message.lineage);
                    if (error) return "lineage." + error;
                }
            }
            if (message.bool != null && message.hasOwnProperty("bool")) {
                if (properties.condition === 1) return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.BoolStrainCondition.verify(message.bool);
                    if (error) return "bool." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StrainCondition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.StrainCondition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.StrainCondition} StrainCondition
         */
        StrainCondition.fromObject = function fromObject(object) {
            if (object instanceof $root.api.StrainCondition) return object;
            let message = new $root.api.StrainCondition();
            if (object.negate != null) message.negate = Boolean(object.negate);
            if (object.accession != null) {
                if (typeof object.accession !== "object")
                    throw TypeError(".api.StrainCondition.accession: object expected");
                message.accession = $root.api.AccessionCondition.fromObject(object.accession);
            }
            if (object.biosample != null) {
                if (typeof object.biosample !== "object")
                    throw TypeError(".api.StrainCondition.biosample: object expected");
                message.biosample = $root.api.BiosampleCondition.fromObject(object.biosample);
            }
            if (object.country != null) {
                if (typeof object.country !== "object")
                    throw TypeError(".api.StrainCondition.country: object expected");
                message.country = $root.api.CountryCondition.fromObject(object.country);
            }
            if (object.date != null) {
                if (typeof object.date !== "object")
                    throw TypeError(".api.StrainCondition.date: object expected");
                message.date = $root.api.DateCondition.fromObject(object.date);
            }
            if (object.gene != null) {
                if (typeof object.gene !== "object")
                    throw TypeError(".api.StrainCondition.gene: object expected");
                message.gene = $root.api.GeneStrainCondition.fromObject(object.gene);
            }
            if (object.lineage != null) {
                if (typeof object.lineage !== "object")
                    throw TypeError(".api.StrainCondition.lineage: object expected");
                message.lineage = $root.api.LineageStrainCondition.fromObject(object.lineage);
            }
            if (object.bool != null) {
                if (typeof object.bool !== "object")
                    throw TypeError(".api.StrainCondition.bool: object expected");
                message.bool = $root.api.BoolStrainCondition.fromObject(object.bool);
            }
            return message;
        };

        /**
         * Creates a plain object from a StrainCondition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.StrainCondition
         * @static
         * @param {api.StrainCondition} message StrainCondition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StrainCondition.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.defaults) object.negate = false;
            if (message.negate != null && message.hasOwnProperty("negate"))
                object.negate = message.negate;
            if (message.accession != null && message.hasOwnProperty("accession")) {
                object.accession = $root.api.AccessionCondition.toObject(
                    message.accession,
                    options
                );
                if (options.oneofs) object.condition = "accession";
            }
            if (message.biosample != null && message.hasOwnProperty("biosample")) {
                object.biosample = $root.api.BiosampleCondition.toObject(
                    message.biosample,
                    options
                );
                if (options.oneofs) object.condition = "biosample";
            }
            if (message.country != null && message.hasOwnProperty("country")) {
                object.country = $root.api.CountryCondition.toObject(message.country, options);
                if (options.oneofs) object.condition = "country";
            }
            if (message.date != null && message.hasOwnProperty("date")) {
                object.date = $root.api.DateCondition.toObject(message.date, options);
                if (options.oneofs) object.condition = "date";
            }
            if (message.gene != null && message.hasOwnProperty("gene")) {
                object.gene = $root.api.GeneStrainCondition.toObject(message.gene, options);
                if (options.oneofs) object.condition = "gene";
            }
            if (message.lineage != null && message.hasOwnProperty("lineage")) {
                object.lineage = $root.api.LineageStrainCondition.toObject(
                    message.lineage,
                    options
                );
                if (options.oneofs) object.condition = "lineage";
            }
            if (message.bool != null && message.hasOwnProperty("bool")) {
                object.bool = $root.api.BoolStrainCondition.toObject(message.bool, options);
                if (options.oneofs) object.condition = "bool";
            }
            return object;
        };

        /**
         * Converts this StrainCondition to JSON.
         * @function toJSON
         * @memberof api.StrainCondition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StrainCondition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StrainCondition;
    })();

    api.BoolStrainCondition = (function () {
        /**
         * Properties of a BoolStrainCondition.
         * @memberof api
         * @interface IBoolStrainCondition
         * @property {api.BoolOperator|null} [operator] BoolStrainCondition operator
         * @property {Array.<api.IStrainCondition>|null} [conditions] BoolStrainCondition conditions
         */

        /**
         * Constructs a new BoolStrainCondition.
         * @memberof api
         * @classdesc Represents a BoolStrainCondition.
         * @implements IBoolStrainCondition
         * @constructor
         * @param {api.IBoolStrainCondition=} [properties] Properties to set
         */
        function BoolStrainCondition(properties) {
            this.conditions = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * BoolStrainCondition operator.
         * @member {api.BoolOperator} operator
         * @memberof api.BoolStrainCondition
         * @instance
         */
        BoolStrainCondition.prototype.operator = 0;

        /**
         * BoolStrainCondition conditions.
         * @member {Array.<api.IStrainCondition>} conditions
         * @memberof api.BoolStrainCondition
         * @instance
         */
        BoolStrainCondition.prototype.conditions = $util.emptyArray;

        /**
         * Creates a new BoolStrainCondition instance using the specified properties.
         * @function create
         * @memberof api.BoolStrainCondition
         * @static
         * @param {api.IBoolStrainCondition=} [properties] Properties to set
         * @returns {api.BoolStrainCondition} BoolStrainCondition instance
         */
        BoolStrainCondition.create = function create(properties) {
            return new BoolStrainCondition(properties);
        };

        /**
         * Encodes the specified BoolStrainCondition message. Does not implicitly {@link api.BoolStrainCondition.verify|verify} messages.
         * @function encode
         * @memberof api.BoolStrainCondition
         * @static
         * @param {api.IBoolStrainCondition} message BoolStrainCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoolStrainCondition.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.operator);
            if (message.conditions != null && message.conditions.length)
                for (let i = 0; i < message.conditions.length; ++i)
                    $root.api.StrainCondition.encode(
                        message.conditions[i],
                        writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                    ).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BoolStrainCondition message, length delimited. Does not implicitly {@link api.BoolStrainCondition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.BoolStrainCondition
         * @static
         * @param {api.IBoolStrainCondition} message BoolStrainCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoolStrainCondition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BoolStrainCondition message from the specified reader or buffer.
         * @function decode
         * @memberof api.BoolStrainCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.BoolStrainCondition} BoolStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoolStrainCondition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.BoolStrainCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.operator = reader.int32();
                        break;
                    case 3:
                        if (!(message.conditions && message.conditions.length))
                            message.conditions = [];
                        message.conditions.push(
                            $root.api.StrainCondition.decode(reader, reader.uint32())
                        );
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a BoolStrainCondition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.BoolStrainCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.BoolStrainCondition} BoolStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoolStrainCondition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BoolStrainCondition message.
         * @function verify
         * @memberof api.BoolStrainCondition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BoolStrainCondition.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.operator != null && message.hasOwnProperty("operator"))
                switch (message.operator) {
                    default:
                        return "operator: enum value expected";
                    case 0:
                    case 1:
                        break;
                }
            if (message.conditions != null && message.hasOwnProperty("conditions")) {
                if (!Array.isArray(message.conditions)) return "conditions: array expected";
                for (let i = 0; i < message.conditions.length; ++i) {
                    let error = $root.api.StrainCondition.verify(message.conditions[i]);
                    if (error) return "conditions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BoolStrainCondition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.BoolStrainCondition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.BoolStrainCondition} BoolStrainCondition
         */
        BoolStrainCondition.fromObject = function fromObject(object) {
            if (object instanceof $root.api.BoolStrainCondition) return object;
            let message = new $root.api.BoolStrainCondition();
            switch (object.operator) {
                case "OR":
                case 0:
                    message.operator = 0;
                    break;
                case "AND":
                case 1:
                    message.operator = 1;
                    break;
            }
            if (object.conditions) {
                if (!Array.isArray(object.conditions))
                    throw TypeError(".api.BoolStrainCondition.conditions: array expected");
                message.conditions = [];
                for (let i = 0; i < object.conditions.length; ++i) {
                    if (typeof object.conditions[i] !== "object")
                        throw TypeError(".api.BoolStrainCondition.conditions: object expected");
                    message.conditions[i] = $root.api.StrainCondition.fromObject(
                        object.conditions[i]
                    );
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BoolStrainCondition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.BoolStrainCondition
         * @static
         * @param {api.BoolStrainCondition} message BoolStrainCondition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BoolStrainCondition.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.arrays || options.defaults) object.conditions = [];
            if (options.defaults) object.operator = options.enums === String ? "OR" : 0;
            if (message.operator != null && message.hasOwnProperty("operator"))
                object.operator =
                    options.enums === String
                        ? $root.api.BoolOperator[message.operator]
                        : message.operator;
            if (message.conditions && message.conditions.length) {
                object.conditions = [];
                for (let j = 0; j < message.conditions.length; ++j)
                    object.conditions[j] = $root.api.StrainCondition.toObject(
                        message.conditions[j],
                        options
                    );
            }
            return object;
        };

        /**
         * Converts this BoolStrainCondition to JSON.
         * @function toJSON
         * @memberof api.BoolStrainCondition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BoolStrainCondition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BoolStrainCondition;
    })();

    api.DateCondition = (function () {
        /**
         * Properties of a DateCondition.
         * @memberof api
         * @interface IDateCondition
         * @property {google.protobuf.ITimestamp|null} [from] DateCondition from
         * @property {google.protobuf.ITimestamp|null} [to] DateCondition to
         */

        /**
         * Constructs a new DateCondition.
         * @memberof api
         * @classdesc Represents a DateCondition.
         * @implements IDateCondition
         * @constructor
         * @param {api.IDateCondition=} [properties] Properties to set
         */
        function DateCondition(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * DateCondition from.
         * @member {google.protobuf.ITimestamp|null|undefined} from
         * @memberof api.DateCondition
         * @instance
         */
        DateCondition.prototype.from = null;

        /**
         * DateCondition to.
         * @member {google.protobuf.ITimestamp|null|undefined} to
         * @memberof api.DateCondition
         * @instance
         */
        DateCondition.prototype.to = null;

        /**
         * Creates a new DateCondition instance using the specified properties.
         * @function create
         * @memberof api.DateCondition
         * @static
         * @param {api.IDateCondition=} [properties] Properties to set
         * @returns {api.DateCondition} DateCondition instance
         */
        DateCondition.create = function create(properties) {
            return new DateCondition(properties);
        };

        /**
         * Encodes the specified DateCondition message. Does not implicitly {@link api.DateCondition.verify|verify} messages.
         * @function encode
         * @memberof api.DateCondition
         * @static
         * @param {api.IDateCondition} message DateCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DateCondition.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                $root.google.protobuf.Timestamp.encode(
                    message.from,
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                ).ldelim();
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                $root.google.protobuf.Timestamp.encode(
                    message.to,
                    writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                ).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DateCondition message, length delimited. Does not implicitly {@link api.DateCondition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.DateCondition
         * @static
         * @param {api.IDateCondition} message DateCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DateCondition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DateCondition message from the specified reader or buffer.
         * @function decode
         * @memberof api.DateCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.DateCondition} DateCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DateCondition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.DateCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.from = $root.google.protobuf.Timestamp.decode(
                            reader,
                            reader.uint32()
                        );
                        break;
                    case 2:
                        message.to = $root.google.protobuf.Timestamp.decode(
                            reader,
                            reader.uint32()
                        );
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a DateCondition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.DateCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.DateCondition} DateCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DateCondition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DateCondition message.
         * @function verify
         * @memberof api.DateCondition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DateCondition.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.from != null && message.hasOwnProperty("from")) {
                let error = $root.google.protobuf.Timestamp.verify(message.from);
                if (error) return "from." + error;
            }
            if (message.to != null && message.hasOwnProperty("to")) {
                let error = $root.google.protobuf.Timestamp.verify(message.to);
                if (error) return "to." + error;
            }
            return null;
        };

        /**
         * Creates a DateCondition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.DateCondition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.DateCondition} DateCondition
         */
        DateCondition.fromObject = function fromObject(object) {
            if (object instanceof $root.api.DateCondition) return object;
            let message = new $root.api.DateCondition();
            if (object.from != null) {
                if (typeof object.from !== "object")
                    throw TypeError(".api.DateCondition.from: object expected");
                message.from = $root.google.protobuf.Timestamp.fromObject(object.from);
            }
            if (object.to != null) {
                if (typeof object.to !== "object")
                    throw TypeError(".api.DateCondition.to: object expected");
                message.to = $root.google.protobuf.Timestamp.fromObject(object.to);
            }
            return message;
        };

        /**
         * Creates a plain object from a DateCondition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.DateCondition
         * @static
         * @param {api.DateCondition} message DateCondition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DateCondition.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.defaults) {
                object.from = null;
                object.to = null;
            }
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = $root.google.protobuf.Timestamp.toObject(message.from, options);
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = $root.google.protobuf.Timestamp.toObject(message.to, options);
            return object;
        };

        /**
         * Converts this DateCondition to JSON.
         * @function toJSON
         * @memberof api.DateCondition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DateCondition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DateCondition;
    })();

    api.CountryCondition = (function () {
        /**
         * Properties of a CountryCondition.
         * @memberof api
         * @interface ICountryCondition
         * @property {Array.<string>|null} [isoCodes] CountryCondition isoCodes
         */

        /**
         * Constructs a new CountryCondition.
         * @memberof api
         * @classdesc Represents a CountryCondition.
         * @implements ICountryCondition
         * @constructor
         * @param {api.ICountryCondition=} [properties] Properties to set
         */
        function CountryCondition(properties) {
            this.isoCodes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CountryCondition isoCodes.
         * @member {Array.<string>} isoCodes
         * @memberof api.CountryCondition
         * @instance
         */
        CountryCondition.prototype.isoCodes = $util.emptyArray;

        /**
         * Creates a new CountryCondition instance using the specified properties.
         * @function create
         * @memberof api.CountryCondition
         * @static
         * @param {api.ICountryCondition=} [properties] Properties to set
         * @returns {api.CountryCondition} CountryCondition instance
         */
        CountryCondition.create = function create(properties) {
            return new CountryCondition(properties);
        };

        /**
         * Encodes the specified CountryCondition message. Does not implicitly {@link api.CountryCondition.verify|verify} messages.
         * @function encode
         * @memberof api.CountryCondition
         * @static
         * @param {api.ICountryCondition} message CountryCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CountryCondition.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.isoCodes != null && message.isoCodes.length)
                for (let i = 0; i < message.isoCodes.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.isoCodes[i]);
            return writer;
        };

        /**
         * Encodes the specified CountryCondition message, length delimited. Does not implicitly {@link api.CountryCondition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.CountryCondition
         * @static
         * @param {api.ICountryCondition} message CountryCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CountryCondition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CountryCondition message from the specified reader or buffer.
         * @function decode
         * @memberof api.CountryCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.CountryCondition} CountryCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CountryCondition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.CountryCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.isoCodes && message.isoCodes.length)) message.isoCodes = [];
                        message.isoCodes.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a CountryCondition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.CountryCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.CountryCondition} CountryCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CountryCondition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CountryCondition message.
         * @function verify
         * @memberof api.CountryCondition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CountryCondition.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.isoCodes != null && message.hasOwnProperty("isoCodes")) {
                if (!Array.isArray(message.isoCodes)) return "isoCodes: array expected";
                for (let i = 0; i < message.isoCodes.length; ++i)
                    if (!$util.isString(message.isoCodes[i])) return "isoCodes: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CountryCondition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.CountryCondition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.CountryCondition} CountryCondition
         */
        CountryCondition.fromObject = function fromObject(object) {
            if (object instanceof $root.api.CountryCondition) return object;
            let message = new $root.api.CountryCondition();
            if (object.isoCodes) {
                if (!Array.isArray(object.isoCodes))
                    throw TypeError(".api.CountryCondition.isoCodes: array expected");
                message.isoCodes = [];
                for (let i = 0; i < object.isoCodes.length; ++i)
                    message.isoCodes[i] = String(object.isoCodes[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CountryCondition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.CountryCondition
         * @static
         * @param {api.CountryCondition} message CountryCondition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CountryCondition.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.arrays || options.defaults) object.isoCodes = [];
            if (message.isoCodes && message.isoCodes.length) {
                object.isoCodes = [];
                for (let j = 0; j < message.isoCodes.length; ++j)
                    object.isoCodes[j] = message.isoCodes[j];
            }
            return object;
        };

        /**
         * Converts this CountryCondition to JSON.
         * @function toJSON
         * @memberof api.CountryCondition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CountryCondition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CountryCondition;
    })();

    api.AccessionCondition = (function () {
        /**
         * Properties of an AccessionCondition.
         * @memberof api
         * @interface IAccessionCondition
         * @property {Array.<string>|null} [accessionNumbers] AccessionCondition accessionNumbers
         */

        /**
         * Constructs a new AccessionCondition.
         * @memberof api
         * @classdesc Represents an AccessionCondition.
         * @implements IAccessionCondition
         * @constructor
         * @param {api.IAccessionCondition=} [properties] Properties to set
         */
        function AccessionCondition(properties) {
            this.accessionNumbers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccessionCondition accessionNumbers.
         * @member {Array.<string>} accessionNumbers
         * @memberof api.AccessionCondition
         * @instance
         */
        AccessionCondition.prototype.accessionNumbers = $util.emptyArray;

        /**
         * Creates a new AccessionCondition instance using the specified properties.
         * @function create
         * @memberof api.AccessionCondition
         * @static
         * @param {api.IAccessionCondition=} [properties] Properties to set
         * @returns {api.AccessionCondition} AccessionCondition instance
         */
        AccessionCondition.create = function create(properties) {
            return new AccessionCondition(properties);
        };

        /**
         * Encodes the specified AccessionCondition message. Does not implicitly {@link api.AccessionCondition.verify|verify} messages.
         * @function encode
         * @memberof api.AccessionCondition
         * @static
         * @param {api.IAccessionCondition} message AccessionCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessionCondition.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.accessionNumbers != null && message.accessionNumbers.length)
                for (let i = 0; i < message.accessionNumbers.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.accessionNumbers[i]);
            return writer;
        };

        /**
         * Encodes the specified AccessionCondition message, length delimited. Does not implicitly {@link api.AccessionCondition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.AccessionCondition
         * @static
         * @param {api.IAccessionCondition} message AccessionCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessionCondition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccessionCondition message from the specified reader or buffer.
         * @function decode
         * @memberof api.AccessionCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.AccessionCondition} AccessionCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessionCondition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.AccessionCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.accessionNumbers && message.accessionNumbers.length))
                            message.accessionNumbers = [];
                        message.accessionNumbers.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccessionCondition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.AccessionCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.AccessionCondition} AccessionCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessionCondition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccessionCondition message.
         * @function verify
         * @memberof api.AccessionCondition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccessionCondition.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.accessionNumbers != null && message.hasOwnProperty("accessionNumbers")) {
                if (!Array.isArray(message.accessionNumbers))
                    return "accessionNumbers: array expected";
                for (let i = 0; i < message.accessionNumbers.length; ++i)
                    if (!$util.isString(message.accessionNumbers[i]))
                        return "accessionNumbers: string[] expected";
            }
            return null;
        };

        /**
         * Creates an AccessionCondition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.AccessionCondition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.AccessionCondition} AccessionCondition
         */
        AccessionCondition.fromObject = function fromObject(object) {
            if (object instanceof $root.api.AccessionCondition) return object;
            let message = new $root.api.AccessionCondition();
            if (object.accessionNumbers) {
                if (!Array.isArray(object.accessionNumbers))
                    throw TypeError(".api.AccessionCondition.accessionNumbers: array expected");
                message.accessionNumbers = [];
                for (let i = 0; i < object.accessionNumbers.length; ++i)
                    message.accessionNumbers[i] = String(object.accessionNumbers[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AccessionCondition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.AccessionCondition
         * @static
         * @param {api.AccessionCondition} message AccessionCondition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccessionCondition.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.arrays || options.defaults) object.accessionNumbers = [];
            if (message.accessionNumbers && message.accessionNumbers.length) {
                object.accessionNumbers = [];
                for (let j = 0; j < message.accessionNumbers.length; ++j)
                    object.accessionNumbers[j] = message.accessionNumbers[j];
            }
            return object;
        };

        /**
         * Converts this AccessionCondition to JSON.
         * @function toJSON
         * @memberof api.AccessionCondition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccessionCondition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccessionCondition;
    })();

    api.BiosampleCondition = (function () {
        /**
         * Properties of a BiosampleCondition.
         * @memberof api
         * @interface IBiosampleCondition
         * @property {Array.<string>|null} [accessionNumbers] BiosampleCondition accessionNumbers
         */

        /**
         * Constructs a new BiosampleCondition.
         * @memberof api
         * @classdesc Represents a BiosampleCondition.
         * @implements IBiosampleCondition
         * @constructor
         * @param {api.IBiosampleCondition=} [properties] Properties to set
         */
        function BiosampleCondition(properties) {
            this.accessionNumbers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * BiosampleCondition accessionNumbers.
         * @member {Array.<string>} accessionNumbers
         * @memberof api.BiosampleCondition
         * @instance
         */
        BiosampleCondition.prototype.accessionNumbers = $util.emptyArray;

        /**
         * Creates a new BiosampleCondition instance using the specified properties.
         * @function create
         * @memberof api.BiosampleCondition
         * @static
         * @param {api.IBiosampleCondition=} [properties] Properties to set
         * @returns {api.BiosampleCondition} BiosampleCondition instance
         */
        BiosampleCondition.create = function create(properties) {
            return new BiosampleCondition(properties);
        };

        /**
         * Encodes the specified BiosampleCondition message. Does not implicitly {@link api.BiosampleCondition.verify|verify} messages.
         * @function encode
         * @memberof api.BiosampleCondition
         * @static
         * @param {api.IBiosampleCondition} message BiosampleCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BiosampleCondition.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.accessionNumbers != null && message.accessionNumbers.length)
                for (let i = 0; i < message.accessionNumbers.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.accessionNumbers[i]);
            return writer;
        };

        /**
         * Encodes the specified BiosampleCondition message, length delimited. Does not implicitly {@link api.BiosampleCondition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.BiosampleCondition
         * @static
         * @param {api.IBiosampleCondition} message BiosampleCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BiosampleCondition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BiosampleCondition message from the specified reader or buffer.
         * @function decode
         * @memberof api.BiosampleCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.BiosampleCondition} BiosampleCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BiosampleCondition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.BiosampleCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.accessionNumbers && message.accessionNumbers.length))
                            message.accessionNumbers = [];
                        message.accessionNumbers.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a BiosampleCondition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.BiosampleCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.BiosampleCondition} BiosampleCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BiosampleCondition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BiosampleCondition message.
         * @function verify
         * @memberof api.BiosampleCondition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BiosampleCondition.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.accessionNumbers != null && message.hasOwnProperty("accessionNumbers")) {
                if (!Array.isArray(message.accessionNumbers))
                    return "accessionNumbers: array expected";
                for (let i = 0; i < message.accessionNumbers.length; ++i)
                    if (!$util.isString(message.accessionNumbers[i]))
                        return "accessionNumbers: string[] expected";
            }
            return null;
        };

        /**
         * Creates a BiosampleCondition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.BiosampleCondition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.BiosampleCondition} BiosampleCondition
         */
        BiosampleCondition.fromObject = function fromObject(object) {
            if (object instanceof $root.api.BiosampleCondition) return object;
            let message = new $root.api.BiosampleCondition();
            if (object.accessionNumbers) {
                if (!Array.isArray(object.accessionNumbers))
                    throw TypeError(".api.BiosampleCondition.accessionNumbers: array expected");
                message.accessionNumbers = [];
                for (let i = 0; i < object.accessionNumbers.length; ++i)
                    message.accessionNumbers[i] = String(object.accessionNumbers[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a BiosampleCondition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.BiosampleCondition
         * @static
         * @param {api.BiosampleCondition} message BiosampleCondition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BiosampleCondition.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.arrays || options.defaults) object.accessionNumbers = [];
            if (message.accessionNumbers && message.accessionNumbers.length) {
                object.accessionNumbers = [];
                for (let j = 0; j < message.accessionNumbers.length; ++j)
                    object.accessionNumbers[j] = message.accessionNumbers[j];
            }
            return object;
        };

        /**
         * Converts this BiosampleCondition to JSON.
         * @function toJSON
         * @memberof api.BiosampleCondition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BiosampleCondition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BiosampleCondition;
    })();

    api.GeneStrainCondition = (function () {
        /**
         * Properties of a GeneStrainCondition.
         * @memberof api
         * @interface IGeneStrainCondition
         * @property {Array.<string>|null} [accessionNumbers] GeneStrainCondition accessionNumbers
         */

        /**
         * Constructs a new GeneStrainCondition.
         * @memberof api
         * @classdesc Represents a GeneStrainCondition.
         * @implements IGeneStrainCondition
         * @constructor
         * @param {api.IGeneStrainCondition=} [properties] Properties to set
         */
        function GeneStrainCondition(properties) {
            this.accessionNumbers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * GeneStrainCondition accessionNumbers.
         * @member {Array.<string>} accessionNumbers
         * @memberof api.GeneStrainCondition
         * @instance
         */
        GeneStrainCondition.prototype.accessionNumbers = $util.emptyArray;

        /**
         * Creates a new GeneStrainCondition instance using the specified properties.
         * @function create
         * @memberof api.GeneStrainCondition
         * @static
         * @param {api.IGeneStrainCondition=} [properties] Properties to set
         * @returns {api.GeneStrainCondition} GeneStrainCondition instance
         */
        GeneStrainCondition.create = function create(properties) {
            return new GeneStrainCondition(properties);
        };

        /**
         * Encodes the specified GeneStrainCondition message. Does not implicitly {@link api.GeneStrainCondition.verify|verify} messages.
         * @function encode
         * @memberof api.GeneStrainCondition
         * @static
         * @param {api.IGeneStrainCondition} message GeneStrainCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeneStrainCondition.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.accessionNumbers != null && message.accessionNumbers.length)
                for (let i = 0; i < message.accessionNumbers.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.accessionNumbers[i]);
            return writer;
        };

        /**
         * Encodes the specified GeneStrainCondition message, length delimited. Does not implicitly {@link api.GeneStrainCondition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GeneStrainCondition
         * @static
         * @param {api.IGeneStrainCondition} message GeneStrainCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeneStrainCondition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GeneStrainCondition message from the specified reader or buffer.
         * @function decode
         * @memberof api.GeneStrainCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GeneStrainCondition} GeneStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeneStrainCondition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.GeneStrainCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.accessionNumbers && message.accessionNumbers.length))
                            message.accessionNumbers = [];
                        message.accessionNumbers.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a GeneStrainCondition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GeneStrainCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GeneStrainCondition} GeneStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeneStrainCondition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GeneStrainCondition message.
         * @function verify
         * @memberof api.GeneStrainCondition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GeneStrainCondition.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.accessionNumbers != null && message.hasOwnProperty("accessionNumbers")) {
                if (!Array.isArray(message.accessionNumbers))
                    return "accessionNumbers: array expected";
                for (let i = 0; i < message.accessionNumbers.length; ++i)
                    if (!$util.isString(message.accessionNumbers[i]))
                        return "accessionNumbers: string[] expected";
            }
            return null;
        };

        /**
         * Creates a GeneStrainCondition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GeneStrainCondition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GeneStrainCondition} GeneStrainCondition
         */
        GeneStrainCondition.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GeneStrainCondition) return object;
            let message = new $root.api.GeneStrainCondition();
            if (object.accessionNumbers) {
                if (!Array.isArray(object.accessionNumbers))
                    throw TypeError(".api.GeneStrainCondition.accessionNumbers: array expected");
                message.accessionNumbers = [];
                for (let i = 0; i < object.accessionNumbers.length; ++i)
                    message.accessionNumbers[i] = String(object.accessionNumbers[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GeneStrainCondition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GeneStrainCondition
         * @static
         * @param {api.GeneStrainCondition} message GeneStrainCondition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GeneStrainCondition.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.arrays || options.defaults) object.accessionNumbers = [];
            if (message.accessionNumbers && message.accessionNumbers.length) {
                object.accessionNumbers = [];
                for (let j = 0; j < message.accessionNumbers.length; ++j)
                    object.accessionNumbers[j] = message.accessionNumbers[j];
            }
            return object;
        };

        /**
         * Converts this GeneStrainCondition to JSON.
         * @function toJSON
         * @memberof api.GeneStrainCondition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GeneStrainCondition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GeneStrainCondition;
    })();

    api.LineageStrainCondition = (function () {
        /**
         * Properties of a LineageStrainCondition.
         * @memberof api
         * @interface ILineageStrainCondition
         * @property {string|null} [classificationName] LineageStrainCondition classificationName
         * @property {string|null} [name] LineageStrainCondition name
         */

        /**
         * Constructs a new LineageStrainCondition.
         * @memberof api
         * @classdesc Represents a LineageStrainCondition.
         * @implements ILineageStrainCondition
         * @constructor
         * @param {api.ILineageStrainCondition=} [properties] Properties to set
         */
        function LineageStrainCondition(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * LineageStrainCondition classificationName.
         * @member {string} classificationName
         * @memberof api.LineageStrainCondition
         * @instance
         */
        LineageStrainCondition.prototype.classificationName = "";

        /**
         * LineageStrainCondition name.
         * @member {string} name
         * @memberof api.LineageStrainCondition
         * @instance
         */
        LineageStrainCondition.prototype.name = "";

        /**
         * Creates a new LineageStrainCondition instance using the specified properties.
         * @function create
         * @memberof api.LineageStrainCondition
         * @static
         * @param {api.ILineageStrainCondition=} [properties] Properties to set
         * @returns {api.LineageStrainCondition} LineageStrainCondition instance
         */
        LineageStrainCondition.create = function create(properties) {
            return new LineageStrainCondition(properties);
        };

        /**
         * Encodes the specified LineageStrainCondition message. Does not implicitly {@link api.LineageStrainCondition.verify|verify} messages.
         * @function encode
         * @memberof api.LineageStrainCondition
         * @static
         * @param {api.ILineageStrainCondition} message LineageStrainCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LineageStrainCondition.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (
                message.classificationName != null &&
                Object.hasOwnProperty.call(message, "classificationName")
            )
                writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.classificationName);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified LineageStrainCondition message, length delimited. Does not implicitly {@link api.LineageStrainCondition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.LineageStrainCondition
         * @static
         * @param {api.ILineageStrainCondition} message LineageStrainCondition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LineageStrainCondition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LineageStrainCondition message from the specified reader or buffer.
         * @function decode
         * @memberof api.LineageStrainCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.LineageStrainCondition} LineageStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LineageStrainCondition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.api.LineageStrainCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.classificationName = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a LineageStrainCondition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.LineageStrainCondition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.LineageStrainCondition} LineageStrainCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LineageStrainCondition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LineageStrainCondition message.
         * @function verify
         * @memberof api.LineageStrainCondition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LineageStrainCondition.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (message.classificationName != null && message.hasOwnProperty("classificationName"))
                if (!$util.isString(message.classificationName))
                    return "classificationName: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name)) return "name: string expected";
            return null;
        };

        /**
         * Creates a LineageStrainCondition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.LineageStrainCondition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.LineageStrainCondition} LineageStrainCondition
         */
        LineageStrainCondition.fromObject = function fromObject(object) {
            if (object instanceof $root.api.LineageStrainCondition) return object;
            let message = new $root.api.LineageStrainCondition();
            if (object.classificationName != null)
                message.classificationName = String(object.classificationName);
            if (object.name != null) message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a LineageStrainCondition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.LineageStrainCondition
         * @static
         * @param {api.LineageStrainCondition} message LineageStrainCondition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LineageStrainCondition.toObject = function toObject(message, options) {
            if (!options) options = {};
            let object = {};
            if (options.defaults) {
                object.classificationName = "";
                object.name = "";
            }
            if (message.classificationName != null && message.hasOwnProperty("classificationName"))
                object.classificationName = message.classificationName;
            if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
            return object;
        };

        /**
         * Converts this LineageStrainCondition to JSON.
         * @function toJSON
         * @memberof api.LineageStrainCondition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LineageStrainCondition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LineageStrainCondition;
    })();

    return api;
})());

export const google = ($root.google = (() => {
    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function () {
        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function () {
            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null) return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (
                        !$util.isInteger(message.seconds) &&
                        !(
                            message.seconds &&
                            $util.isInteger(message.seconds.low) &&
                            $util.isInteger(message.seconds.high)
                        )
                    )
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos)) return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp) return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number") message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(
                            object.seconds.low >>> 0,
                            object.seconds.high >>> 0
                        ).toNumber();
                if (object.nanos != null) message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options) options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds =
                            options.longs === String
                                ? long.toString()
                                : options.longs === Number
                                ? long.toNumber()
                                : long;
                    } else object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds =
                            options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds =
                            options.longs === String
                                ? $util.Long.prototype.toString.call(message.seconds)
                                : options.longs === Number
                                ? new $util.LongBits(
                                      message.seconds.low >>> 0,
                                      message.seconds.high >>> 0
                                  ).toNumber()
                                : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})());

export { $root as default };
