/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const api = $root.api = (() => {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    const api = {};

    api.Api = (function() {

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
        Object.defineProperty(Api.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.api.HelloRequest, $root.api.HelloReply, request, callback);
        }, "name", { value: "SayHello" });

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
        Object.defineProperty(Api.prototype.search = function search(request, callback) {
            return this.rpcCall(search, $root.api.SearchRequest, $root.api.SearchReply, request, callback);
        }, "name", { value: "Search" });

        /**
         * Calls Search.
         * @function search
         * @memberof api.Api
         * @instance
         * @param {api.ISearchRequest} request SearchRequest message or plain object
         * @returns {Promise<api.SearchReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.Api#listSnp}.
         * @memberof api.Api
         * @typedef ListSnpCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.ListSnpReply} [response] ListSnpReply
         */

        /**
         * Calls ListSnp.
         * @function listSnp
         * @memberof api.Api
         * @instance
         * @param {api.IListSnpRequest} request ListSnpRequest message or plain object
         * @param {api.Api.ListSnpCallback} callback Node-style callback called with the error, if any, and ListSnpReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Api.prototype.listSnp = function listSnp(request, callback) {
            return this.rpcCall(listSnp, $root.api.ListSnpRequest, $root.api.ListSnpReply, request, callback);
        }, "name", { value: "ListSnp" });

        /**
         * Calls ListSnp.
         * @function listSnp
         * @memberof api.Api
         * @instance
         * @param {api.IListSnpRequest} request ListSnpRequest message or plain object
         * @returns {Promise<api.ListSnpReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.Api#getStrain}.
         * @memberof api.Api
         * @typedef GetStrainCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.GetStrainReply} [response] GetStrainReply
         */

        /**
         * Calls GetStrain.
         * @function getStrain
         * @memberof api.Api
         * @instance
         * @param {api.IGetStrainRequest} request GetStrainRequest message or plain object
         * @param {api.Api.GetStrainCallback} callback Node-style callback called with the error, if any, and GetStrainReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Api.prototype.getStrain = function getStrain(request, callback) {
            return this.rpcCall(getStrain, $root.api.GetStrainRequest, $root.api.GetStrainReply, request, callback);
        }, "name", { value: "GetStrain" });

        /**
         * Calls GetStrain.
         * @function getStrain
         * @memberof api.Api
         * @instance
         * @param {api.IGetStrainRequest} request GetStrainRequest message or plain object
         * @returns {Promise<api.GetStrainReply>} Promise
         * @variation 2
         */

        return Api;
    })();

    api.HelloRequest = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.clusteringLevel != null && Object.hasOwnProperty.call(message, "clusteringLevel"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.clusteringLevel);
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.HelloRequest();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
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
            if (object instanceof $root.api.HelloRequest)
                return object;
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
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.clusteringLevel = 0;
            if (message.clusteringLevel != null && message.hasOwnProperty("clusteringLevel"))
                object.clusteringLevel = options.json && !isFinite(message.clusteringLevel) ? String(message.clusteringLevel) : message.clusteringLevel;
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

    api.HelloReply = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.graph != null && Object.hasOwnProperty.call(message, "graph"))
                $root.api.Graph.encode(message.graph, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.HelloReply();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.graph != null && message.hasOwnProperty("graph")) {
                let error = $root.api.Graph.verify(message.graph);
                if (error)
                    return "graph." + error;
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
            if (object instanceof $root.api.HelloReply)
                return object;
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
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.graph = null;
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

    api.ListSnpRequest = (function() {

        /**
         * Properties of a ListSnpRequest.
         * @memberof api
         * @interface IListSnpRequest
         * @property {number|null} [page] ListSnpRequest page
         */

        /**
         * Constructs a new ListSnpRequest.
         * @memberof api
         * @classdesc Represents a ListSnpRequest.
         * @implements IListSnpRequest
         * @constructor
         * @param {api.IListSnpRequest=} [properties] Properties to set
         */
        function ListSnpRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListSnpRequest page.
         * @member {number} page
         * @memberof api.ListSnpRequest
         * @instance
         */
        ListSnpRequest.prototype.page = 0;

        /**
         * Creates a new ListSnpRequest instance using the specified properties.
         * @function create
         * @memberof api.ListSnpRequest
         * @static
         * @param {api.IListSnpRequest=} [properties] Properties to set
         * @returns {api.ListSnpRequest} ListSnpRequest instance
         */
        ListSnpRequest.create = function create(properties) {
            return new ListSnpRequest(properties);
        };

        /**
         * Encodes the specified ListSnpRequest message. Does not implicitly {@link api.ListSnpRequest.verify|verify} messages.
         * @function encode
         * @memberof api.ListSnpRequest
         * @static
         * @param {api.IListSnpRequest} message ListSnpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListSnpRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            return writer;
        };

        /**
         * Encodes the specified ListSnpRequest message, length delimited. Does not implicitly {@link api.ListSnpRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ListSnpRequest
         * @static
         * @param {api.IListSnpRequest} message ListSnpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListSnpRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListSnpRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.ListSnpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ListSnpRequest} ListSnpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListSnpRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ListSnpRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListSnpRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ListSnpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ListSnpRequest} ListSnpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListSnpRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListSnpRequest message.
         * @function verify
         * @memberof api.ListSnpRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListSnpRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            return null;
        };

        /**
         * Creates a ListSnpRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ListSnpRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ListSnpRequest} ListSnpRequest
         */
        ListSnpRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ListSnpRequest)
                return object;
            let message = new $root.api.ListSnpRequest();
            if (object.page != null)
                message.page = object.page | 0;
            return message;
        };

        /**
         * Creates a plain object from a ListSnpRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ListSnpRequest
         * @static
         * @param {api.ListSnpRequest} message ListSnpRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListSnpRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.page = 0;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            return object;
        };

        /**
         * Converts this ListSnpRequest to JSON.
         * @function toJSON
         * @memberof api.ListSnpRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListSnpRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListSnpRequest;
    })();

    api.ListSnpReply = (function() {

        /**
         * Properties of a ListSnpReply.
         * @memberof api
         * @interface IListSnpReply
         * @property {Array.<api.ISnp>|null} [snps] ListSnpReply snps
         */

        /**
         * Constructs a new ListSnpReply.
         * @memberof api
         * @classdesc Represents a ListSnpReply.
         * @implements IListSnpReply
         * @constructor
         * @param {api.IListSnpReply=} [properties] Properties to set
         */
        function ListSnpReply(properties) {
            this.snps = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListSnpReply snps.
         * @member {Array.<api.ISnp>} snps
         * @memberof api.ListSnpReply
         * @instance
         */
        ListSnpReply.prototype.snps = $util.emptyArray;

        /**
         * Creates a new ListSnpReply instance using the specified properties.
         * @function create
         * @memberof api.ListSnpReply
         * @static
         * @param {api.IListSnpReply=} [properties] Properties to set
         * @returns {api.ListSnpReply} ListSnpReply instance
         */
        ListSnpReply.create = function create(properties) {
            return new ListSnpReply(properties);
        };

        /**
         * Encodes the specified ListSnpReply message. Does not implicitly {@link api.ListSnpReply.verify|verify} messages.
         * @function encode
         * @memberof api.ListSnpReply
         * @static
         * @param {api.IListSnpReply} message ListSnpReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListSnpReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.snps != null && message.snps.length)
                for (let i = 0; i < message.snps.length; ++i)
                    $root.api.Snp.encode(message.snps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListSnpReply message, length delimited. Does not implicitly {@link api.ListSnpReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ListSnpReply
         * @static
         * @param {api.IListSnpReply} message ListSnpReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListSnpReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListSnpReply message from the specified reader or buffer.
         * @function decode
         * @memberof api.ListSnpReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ListSnpReply} ListSnpReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListSnpReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ListSnpReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.snps && message.snps.length))
                        message.snps = [];
                    message.snps.push($root.api.Snp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListSnpReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ListSnpReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ListSnpReply} ListSnpReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListSnpReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListSnpReply message.
         * @function verify
         * @memberof api.ListSnpReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListSnpReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.snps != null && message.hasOwnProperty("snps")) {
                if (!Array.isArray(message.snps))
                    return "snps: array expected";
                for (let i = 0; i < message.snps.length; ++i) {
                    let error = $root.api.Snp.verify(message.snps[i]);
                    if (error)
                        return "snps." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListSnpReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ListSnpReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ListSnpReply} ListSnpReply
         */
        ListSnpReply.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ListSnpReply)
                return object;
            let message = new $root.api.ListSnpReply();
            if (object.snps) {
                if (!Array.isArray(object.snps))
                    throw TypeError(".api.ListSnpReply.snps: array expected");
                message.snps = [];
                for (let i = 0; i < object.snps.length; ++i) {
                    if (typeof object.snps[i] !== "object")
                        throw TypeError(".api.ListSnpReply.snps: object expected");
                    message.snps[i] = $root.api.Snp.fromObject(object.snps[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListSnpReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ListSnpReply
         * @static
         * @param {api.ListSnpReply} message ListSnpReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListSnpReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.snps = [];
            if (message.snps && message.snps.length) {
                object.snps = [];
                for (let j = 0; j < message.snps.length; ++j)
                    object.snps[j] = $root.api.Snp.toObject(message.snps[j], options);
            }
            return object;
        };

        /**
         * Converts this ListSnpReply to JSON.
         * @function toJSON
         * @memberof api.ListSnpReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListSnpReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListSnpReply;
    })();

    api.GetStrainRequest = (function() {

        /**
         * Properties of a GetStrainRequest.
         * @memberof api
         * @interface IGetStrainRequest
         * @property {string|null} [id] GetStrainRequest id
         */

        /**
         * Constructs a new GetStrainRequest.
         * @memberof api
         * @classdesc Represents a GetStrainRequest.
         * @implements IGetStrainRequest
         * @constructor
         * @param {api.IGetStrainRequest=} [properties] Properties to set
         */
        function GetStrainRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetStrainRequest id.
         * @member {string} id
         * @memberof api.GetStrainRequest
         * @instance
         */
        GetStrainRequest.prototype.id = "";

        /**
         * Creates a new GetStrainRequest instance using the specified properties.
         * @function create
         * @memberof api.GetStrainRequest
         * @static
         * @param {api.IGetStrainRequest=} [properties] Properties to set
         * @returns {api.GetStrainRequest} GetStrainRequest instance
         */
        GetStrainRequest.create = function create(properties) {
            return new GetStrainRequest(properties);
        };

        /**
         * Encodes the specified GetStrainRequest message. Does not implicitly {@link api.GetStrainRequest.verify|verify} messages.
         * @function encode
         * @memberof api.GetStrainRequest
         * @static
         * @param {api.IGetStrainRequest} message GetStrainRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStrainRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified GetStrainRequest message, length delimited. Does not implicitly {@link api.GetStrainRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GetStrainRequest
         * @static
         * @param {api.IGetStrainRequest} message GetStrainRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStrainRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetStrainRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetStrainRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetStrainRequest} GetStrainRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStrainRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetStrainRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetStrainRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GetStrainRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GetStrainRequest} GetStrainRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStrainRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetStrainRequest message.
         * @function verify
         * @memberof api.GetStrainRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetStrainRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a GetStrainRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GetStrainRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GetStrainRequest} GetStrainRequest
         */
        GetStrainRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GetStrainRequest)
                return object;
            let message = new $root.api.GetStrainRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a GetStrainRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GetStrainRequest
         * @static
         * @param {api.GetStrainRequest} message GetStrainRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetStrainRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this GetStrainRequest to JSON.
         * @function toJSON
         * @memberof api.GetStrainRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetStrainRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetStrainRequest;
    })();

    api.GetStrainReply = (function() {

        /**
         * Properties of a GetStrainReply.
         * @memberof api
         * @interface IGetStrainReply
         * @property {api.IStrainResult|null} [result] GetStrainReply result
         */

        /**
         * Constructs a new GetStrainReply.
         * @memberof api
         * @classdesc Represents a GetStrainReply.
         * @implements IGetStrainReply
         * @constructor
         * @param {api.IGetStrainReply=} [properties] Properties to set
         */
        function GetStrainReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetStrainReply result.
         * @member {api.IStrainResult|null|undefined} result
         * @memberof api.GetStrainReply
         * @instance
         */
        GetStrainReply.prototype.result = null;

        /**
         * Creates a new GetStrainReply instance using the specified properties.
         * @function create
         * @memberof api.GetStrainReply
         * @static
         * @param {api.IGetStrainReply=} [properties] Properties to set
         * @returns {api.GetStrainReply} GetStrainReply instance
         */
        GetStrainReply.create = function create(properties) {
            return new GetStrainReply(properties);
        };

        /**
         * Encodes the specified GetStrainReply message. Does not implicitly {@link api.GetStrainReply.verify|verify} messages.
         * @function encode
         * @memberof api.GetStrainReply
         * @static
         * @param {api.IGetStrainReply} message GetStrainReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStrainReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.api.StrainResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetStrainReply message, length delimited. Does not implicitly {@link api.GetStrainReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GetStrainReply
         * @static
         * @param {api.IGetStrainReply} message GetStrainReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStrainReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetStrainReply message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetStrainReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetStrainReply} GetStrainReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStrainReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetStrainReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.api.StrainResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetStrainReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GetStrainReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GetStrainReply} GetStrainReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStrainReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetStrainReply message.
         * @function verify
         * @memberof api.GetStrainReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetStrainReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                let error = $root.api.StrainResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        /**
         * Creates a GetStrainReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GetStrainReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GetStrainReply} GetStrainReply
         */
        GetStrainReply.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GetStrainReply)
                return object;
            let message = new $root.api.GetStrainReply();
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".api.GetStrainReply.result: object expected");
                message.result = $root.api.StrainResult.fromObject(object.result);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetStrainReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GetStrainReply
         * @static
         * @param {api.GetStrainReply} message GetStrainReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetStrainReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.result = null;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.api.StrainResult.toObject(message.result, options);
            return object;
        };

        /**
         * Converts this GetStrainReply to JSON.
         * @function toJSON
         * @memberof api.GetStrainReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetStrainReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetStrainReply;
    })();

    api.SearchRequest = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                $root.api.BoolStrainCondition.encode(message.condition, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.SearchRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.condition = $root.api.BoolStrainCondition.decode(reader, reader.uint32());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.condition != null && message.hasOwnProperty("condition")) {
                let error = $root.api.BoolStrainCondition.verify(message.condition);
                if (error)
                    return "condition." + error;
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
            if (object instanceof $root.api.SearchRequest)
                return object;
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
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.condition = null;
            if (message.condition != null && message.hasOwnProperty("condition"))
                object.condition = $root.api.BoolStrainCondition.toObject(message.condition, options);
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

    api.SearchReply = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.SearchReply();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
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
            if (object instanceof $root.api.SearchReply)
                return object;
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

    api.Graph = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.nodes != null && message.nodes.length)
                for (let i = 0; i < message.nodes.length; ++i)
                    $root.api.Node.encode(message.nodes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.edges != null && message.edges.length)
                for (let i = 0; i < message.edges.length; ++i)
                    $root.api.Edge.encode(message.edges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Graph();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.nodes && message.nodes.length))
                        message.nodes = [];
                    message.nodes.push($root.api.Node.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.edges && message.edges.length))
                        message.edges = [];
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nodes != null && message.hasOwnProperty("nodes")) {
                if (!Array.isArray(message.nodes))
                    return "nodes: array expected";
                for (let i = 0; i < message.nodes.length; ++i) {
                    let error = $root.api.Node.verify(message.nodes[i]);
                    if (error)
                        return "nodes." + error;
                }
            }
            if (message.edges != null && message.hasOwnProperty("edges")) {
                if (!Array.isArray(message.edges))
                    return "edges: array expected";
                for (let i = 0; i < message.edges.length; ++i) {
                    let error = $root.api.Edge.verify(message.edges[i]);
                    if (error)
                        return "edges." + error;
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
            if (object instanceof $root.api.Graph)
                return object;
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
            if (!options)
                options = {};
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

    api.Node = (function() {

        /**
         * Properties of a Node.
         * @memberof api
         * @interface INode
         * @property {number|null} [id] Node id
         * @property {string|null} [name] Node name
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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Node id.
         * @member {number} id
         * @memberof api.Node
         * @instance
         */
        Node.prototype.id = 0;

        /**
         * Node name.
         * @member {string} name
         * @memberof api.Node
         * @instance
         */
        Node.prototype.name = "";

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
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.positionX != null && Object.hasOwnProperty.call(message, "positionX"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.positionX);
            if (message.positionY != null && Object.hasOwnProperty.call(message, "positionY"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.positionY);
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Node();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.positionX = reader.double();
                    break;
                case 4:
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.positionX != null && message.hasOwnProperty("positionX"))
                if (typeof message.positionX !== "number")
                    return "positionX: number expected";
            if (message.positionY != null && message.hasOwnProperty("positionY"))
                if (typeof message.positionY !== "number")
                    return "positionY: number expected";
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
            if (object instanceof $root.api.Node)
                return object;
            let message = new $root.api.Node();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.positionX != null)
                message.positionX = Number(object.positionX);
            if (object.positionY != null)
                message.positionY = Number(object.positionY);
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
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.positionX = 0;
                object.positionY = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.positionX != null && message.hasOwnProperty("positionX"))
                object.positionX = options.json && !isFinite(message.positionX) ? String(message.positionX) : message.positionX;
            if (message.positionY != null && message.hasOwnProperty("positionY"))
                object.positionY = options.json && !isFinite(message.positionY) ? String(message.positionY) : message.positionY;
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

    api.Edge = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.firstNode != null && Object.hasOwnProperty.call(message, "firstNode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.firstNode);
            if (message.secondNode != null && Object.hasOwnProperty.call(message, "secondNode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.secondNode);
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Edge();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.firstNode != null && message.hasOwnProperty("firstNode"))
                if (!$util.isInteger(message.firstNode))
                    return "firstNode: integer expected";
            if (message.secondNode != null && message.hasOwnProperty("secondNode"))
                if (!$util.isInteger(message.secondNode))
                    return "secondNode: integer expected";
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
            if (object instanceof $root.api.Edge)
                return object;
            let message = new $root.api.Edge();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.firstNode != null)
                message.firstNode = object.firstNode | 0;
            if (object.secondNode != null)
                message.secondNode = object.secondNode | 0;
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
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.firstNode = 0;
                object.secondNode = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
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
    api.BoolOperator = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OR"] = 0;
        values[valuesById[1] = "AND"] = 1;
        return values;
    })();

    api.StrainCondition = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            get: $util.oneOfGetter($oneOfFields = ["accession", "biosample", "country", "date", "gene", "lineage", "bool"]),
            set: $util.oneOfSetter($oneOfFields)
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
            if (!writer)
                writer = $Writer.create();
            if (message.negate != null && Object.hasOwnProperty.call(message, "negate"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.negate);
            if (message.accession != null && Object.hasOwnProperty.call(message, "accession"))
                $root.api.AccessionCondition.encode(message.accession, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.biosample != null && Object.hasOwnProperty.call(message, "biosample"))
                $root.api.BiosampleCondition.encode(message.biosample, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                $root.api.CountryCondition.encode(message.country, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                $root.api.DateCondition.encode(message.date, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.gene != null && Object.hasOwnProperty.call(message, "gene"))
                $root.api.GeneStrainCondition.encode(message.gene, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.lineage != null && Object.hasOwnProperty.call(message, "lineage"))
                $root.api.LineageStrainCondition.encode(message.lineage, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.bool != null && Object.hasOwnProperty.call(message, "bool"))
                $root.api.BoolStrainCondition.encode(message.bool, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.StrainCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.negate = reader.bool();
                    break;
                case 2:
                    message.accession = $root.api.AccessionCondition.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.biosample = $root.api.BiosampleCondition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.country = $root.api.CountryCondition.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.date = $root.api.DateCondition.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.gene = $root.api.GeneStrainCondition.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.lineage = $root.api.LineageStrainCondition.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.bool = $root.api.BoolStrainCondition.decode(reader, reader.uint32());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.negate != null && message.hasOwnProperty("negate"))
                if (typeof message.negate !== "boolean")
                    return "negate: boolean expected";
            if (message.accession != null && message.hasOwnProperty("accession")) {
                properties.condition = 1;
                {
                    let error = $root.api.AccessionCondition.verify(message.accession);
                    if (error)
                        return "accession." + error;
                }
            }
            if (message.biosample != null && message.hasOwnProperty("biosample")) {
                if (properties.condition === 1)
                    return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.BiosampleCondition.verify(message.biosample);
                    if (error)
                        return "biosample." + error;
                }
            }
            if (message.country != null && message.hasOwnProperty("country")) {
                if (properties.condition === 1)
                    return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.CountryCondition.verify(message.country);
                    if (error)
                        return "country." + error;
                }
            }
            if (message.date != null && message.hasOwnProperty("date")) {
                if (properties.condition === 1)
                    return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.DateCondition.verify(message.date);
                    if (error)
                        return "date." + error;
                }
            }
            if (message.gene != null && message.hasOwnProperty("gene")) {
                if (properties.condition === 1)
                    return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.GeneStrainCondition.verify(message.gene);
                    if (error)
                        return "gene." + error;
                }
            }
            if (message.lineage != null && message.hasOwnProperty("lineage")) {
                if (properties.condition === 1)
                    return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.LineageStrainCondition.verify(message.lineage);
                    if (error)
                        return "lineage." + error;
                }
            }
            if (message.bool != null && message.hasOwnProperty("bool")) {
                if (properties.condition === 1)
                    return "condition: multiple values";
                properties.condition = 1;
                {
                    let error = $root.api.BoolStrainCondition.verify(message.bool);
                    if (error)
                        return "bool." + error;
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
            if (object instanceof $root.api.StrainCondition)
                return object;
            let message = new $root.api.StrainCondition();
            if (object.negate != null)
                message.negate = Boolean(object.negate);
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
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.negate = false;
            if (message.negate != null && message.hasOwnProperty("negate"))
                object.negate = message.negate;
            if (message.accession != null && message.hasOwnProperty("accession")) {
                object.accession = $root.api.AccessionCondition.toObject(message.accession, options);
                if (options.oneofs)
                    object.condition = "accession";
            }
            if (message.biosample != null && message.hasOwnProperty("biosample")) {
                object.biosample = $root.api.BiosampleCondition.toObject(message.biosample, options);
                if (options.oneofs)
                    object.condition = "biosample";
            }
            if (message.country != null && message.hasOwnProperty("country")) {
                object.country = $root.api.CountryCondition.toObject(message.country, options);
                if (options.oneofs)
                    object.condition = "country";
            }
            if (message.date != null && message.hasOwnProperty("date")) {
                object.date = $root.api.DateCondition.toObject(message.date, options);
                if (options.oneofs)
                    object.condition = "date";
            }
            if (message.gene != null && message.hasOwnProperty("gene")) {
                object.gene = $root.api.GeneStrainCondition.toObject(message.gene, options);
                if (options.oneofs)
                    object.condition = "gene";
            }
            if (message.lineage != null && message.hasOwnProperty("lineage")) {
                object.lineage = $root.api.LineageStrainCondition.toObject(message.lineage, options);
                if (options.oneofs)
                    object.condition = "lineage";
            }
            if (message.bool != null && message.hasOwnProperty("bool")) {
                object.bool = $root.api.BoolStrainCondition.toObject(message.bool, options);
                if (options.oneofs)
                    object.condition = "bool";
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

    api.BoolStrainCondition = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operator);
            if (message.conditions != null && message.conditions.length)
                for (let i = 0; i < message.conditions.length; ++i)
                    $root.api.StrainCondition.encode(message.conditions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.BoolStrainCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.operator = reader.int32();
                    break;
                case 3:
                    if (!(message.conditions && message.conditions.length))
                        message.conditions = [];
                    message.conditions.push($root.api.StrainCondition.decode(reader, reader.uint32()));
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.operator != null && message.hasOwnProperty("operator"))
                switch (message.operator) {
                default:
                    return "operator: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.conditions != null && message.hasOwnProperty("conditions")) {
                if (!Array.isArray(message.conditions))
                    return "conditions: array expected";
                for (let i = 0; i < message.conditions.length; ++i) {
                    let error = $root.api.StrainCondition.verify(message.conditions[i]);
                    if (error)
                        return "conditions." + error;
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
            if (object instanceof $root.api.BoolStrainCondition)
                return object;
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
                    message.conditions[i] = $root.api.StrainCondition.fromObject(object.conditions[i]);
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
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.conditions = [];
            if (options.defaults)
                object.operator = options.enums === String ? "OR" : 0;
            if (message.operator != null && message.hasOwnProperty("operator"))
                object.operator = options.enums === String ? $root.api.BoolOperator[message.operator] : message.operator;
            if (message.conditions && message.conditions.length) {
                object.conditions = [];
                for (let j = 0; j < message.conditions.length; ++j)
                    object.conditions[j] = $root.api.StrainCondition.toObject(message.conditions[j], options);
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

    api.DateCondition = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                $root.google.protobuf.Timestamp.encode(message.from, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                $root.google.protobuf.Timestamp.encode(message.to, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.DateCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.from = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.to = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from")) {
                let error = $root.google.protobuf.Timestamp.verify(message.from);
                if (error)
                    return "from." + error;
            }
            if (message.to != null && message.hasOwnProperty("to")) {
                let error = $root.google.protobuf.Timestamp.verify(message.to);
                if (error)
                    return "to." + error;
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
            if (object instanceof $root.api.DateCondition)
                return object;
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
            if (!options)
                options = {};
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

    api.CountryCondition = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.isoCodes != null && message.isoCodes.length)
                for (let i = 0; i < message.isoCodes.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.isoCodes[i]);
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.CountryCondition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.isoCodes && message.isoCodes.length))
                        message.isoCodes = [];
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isoCodes != null && message.hasOwnProperty("isoCodes")) {
                if (!Array.isArray(message.isoCodes))
                    return "isoCodes: array expected";
                for (let i = 0; i < message.isoCodes.length; ++i)
                    if (!$util.isString(message.isoCodes[i]))
                        return "isoCodes: string[] expected";
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
            if (object instanceof $root.api.CountryCondition)
                return object;
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
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.isoCodes = [];
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

    api.AccessionCondition = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.accessionNumbers != null && message.accessionNumbers.length)
                for (let i = 0; i < message.accessionNumbers.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessionNumbers[i]);
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.AccessionCondition();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
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
            if (object instanceof $root.api.AccessionCondition)
                return object;
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
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accessionNumbers = [];
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

    api.BiosampleCondition = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.accessionNumbers != null && message.accessionNumbers.length)
                for (let i = 0; i < message.accessionNumbers.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessionNumbers[i]);
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.BiosampleCondition();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
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
            if (object instanceof $root.api.BiosampleCondition)
                return object;
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
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accessionNumbers = [];
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

    api.GeneStrainCondition = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.accessionNumbers != null && message.accessionNumbers.length)
                for (let i = 0; i < message.accessionNumbers.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessionNumbers[i]);
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GeneStrainCondition();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
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
            if (object instanceof $root.api.GeneStrainCondition)
                return object;
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
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accessionNumbers = [];
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

    api.LineageStrainCondition = (function() {

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
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            if (!writer)
                writer = $Writer.create();
            if (message.classificationName != null && Object.hasOwnProperty.call(message, "classificationName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.classificationName);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
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
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.LineageStrainCondition();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
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
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.classificationName != null && message.hasOwnProperty("classificationName"))
                if (!$util.isString(message.classificationName))
                    return "classificationName: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
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
            if (object instanceof $root.api.LineageStrainCondition)
                return object;
            let message = new $root.api.LineageStrainCondition();
            if (object.classificationName != null)
                message.classificationName = String(object.classificationName);
            if (object.name != null)
                message.name = String(object.name);
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
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.classificationName = "";
                object.name = "";
            }
            if (message.classificationName != null && message.hasOwnProperty("classificationName"))
                object.classificationName = message.classificationName;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
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

    api.Snp = (function() {

        /**
         * Properties of a Snp.
         * @memberof api
         * @interface ISnp
         * @property {string|null} [id] Snp id
         * @property {string|null} [sequenceId] Snp sequenceId
         * @property {number|null} [position] Snp position
         * @property {string|null} [reference] Snp reference
         * @property {string|null} [insertion] Snp insertion
         * @property {string|null} [ncbiUrl] Snp ncbiUrl
         * @property {Array.<api.ISnpAnnotation>|null} [annotations] Snp annotations
         */

        /**
         * Constructs a new Snp.
         * @memberof api
         * @classdesc Represents a Snp.
         * @implements ISnp
         * @constructor
         * @param {api.ISnp=} [properties] Properties to set
         */
        function Snp(properties) {
            this.annotations = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Snp id.
         * @member {string} id
         * @memberof api.Snp
         * @instance
         */
        Snp.prototype.id = "";

        /**
         * Snp sequenceId.
         * @member {string} sequenceId
         * @memberof api.Snp
         * @instance
         */
        Snp.prototype.sequenceId = "";

        /**
         * Snp position.
         * @member {number} position
         * @memberof api.Snp
         * @instance
         */
        Snp.prototype.position = 0;

        /**
         * Snp reference.
         * @member {string} reference
         * @memberof api.Snp
         * @instance
         */
        Snp.prototype.reference = "";

        /**
         * Snp insertion.
         * @member {string} insertion
         * @memberof api.Snp
         * @instance
         */
        Snp.prototype.insertion = "";

        /**
         * Snp ncbiUrl.
         * @member {string} ncbiUrl
         * @memberof api.Snp
         * @instance
         */
        Snp.prototype.ncbiUrl = "";

        /**
         * Snp annotations.
         * @member {Array.<api.ISnpAnnotation>} annotations
         * @memberof api.Snp
         * @instance
         */
        Snp.prototype.annotations = $util.emptyArray;

        /**
         * Creates a new Snp instance using the specified properties.
         * @function create
         * @memberof api.Snp
         * @static
         * @param {api.ISnp=} [properties] Properties to set
         * @returns {api.Snp} Snp instance
         */
        Snp.create = function create(properties) {
            return new Snp(properties);
        };

        /**
         * Encodes the specified Snp message. Does not implicitly {@link api.Snp.verify|verify} messages.
         * @function encode
         * @memberof api.Snp
         * @static
         * @param {api.ISnp} message Snp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Snp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.sequenceId != null && Object.hasOwnProperty.call(message, "sequenceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sequenceId);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.position);
            if (message.reference != null && Object.hasOwnProperty.call(message, "reference"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.reference);
            if (message.insertion != null && Object.hasOwnProperty.call(message, "insertion"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.insertion);
            if (message.ncbiUrl != null && Object.hasOwnProperty.call(message, "ncbiUrl"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ncbiUrl);
            if (message.annotations != null && message.annotations.length)
                for (let i = 0; i < message.annotations.length; ++i)
                    $root.api.SnpAnnotation.encode(message.annotations[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Snp message, length delimited. Does not implicitly {@link api.Snp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Snp
         * @static
         * @param {api.ISnp} message Snp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Snp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Snp message from the specified reader or buffer.
         * @function decode
         * @memberof api.Snp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Snp} Snp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Snp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Snp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sequenceId = reader.string();
                    break;
                case 3:
                    message.position = reader.int32();
                    break;
                case 4:
                    message.reference = reader.string();
                    break;
                case 5:
                    message.insertion = reader.string();
                    break;
                case 6:
                    message.ncbiUrl = reader.string();
                    break;
                case 7:
                    if (!(message.annotations && message.annotations.length))
                        message.annotations = [];
                    message.annotations.push($root.api.SnpAnnotation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Snp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Snp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Snp} Snp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Snp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Snp message.
         * @function verify
         * @memberof api.Snp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Snp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                if (!$util.isString(message.sequenceId))
                    return "sequenceId: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.reference != null && message.hasOwnProperty("reference"))
                if (!$util.isString(message.reference))
                    return "reference: string expected";
            if (message.insertion != null && message.hasOwnProperty("insertion"))
                if (!$util.isString(message.insertion))
                    return "insertion: string expected";
            if (message.ncbiUrl != null && message.hasOwnProperty("ncbiUrl"))
                if (!$util.isString(message.ncbiUrl))
                    return "ncbiUrl: string expected";
            if (message.annotations != null && message.hasOwnProperty("annotations")) {
                if (!Array.isArray(message.annotations))
                    return "annotations: array expected";
                for (let i = 0; i < message.annotations.length; ++i) {
                    let error = $root.api.SnpAnnotation.verify(message.annotations[i]);
                    if (error)
                        return "annotations." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Snp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Snp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Snp} Snp
         */
        Snp.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Snp)
                return object;
            let message = new $root.api.Snp();
            if (object.id != null)
                message.id = String(object.id);
            if (object.sequenceId != null)
                message.sequenceId = String(object.sequenceId);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.reference != null)
                message.reference = String(object.reference);
            if (object.insertion != null)
                message.insertion = String(object.insertion);
            if (object.ncbiUrl != null)
                message.ncbiUrl = String(object.ncbiUrl);
            if (object.annotations) {
                if (!Array.isArray(object.annotations))
                    throw TypeError(".api.Snp.annotations: array expected");
                message.annotations = [];
                for (let i = 0; i < object.annotations.length; ++i) {
                    if (typeof object.annotations[i] !== "object")
                        throw TypeError(".api.Snp.annotations: object expected");
                    message.annotations[i] = $root.api.SnpAnnotation.fromObject(object.annotations[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Snp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Snp
         * @static
         * @param {api.Snp} message Snp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Snp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.annotations = [];
            if (options.defaults) {
                object.id = "";
                object.sequenceId = "";
                object.position = 0;
                object.reference = "";
                object.insertion = "";
                object.ncbiUrl = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                object.sequenceId = message.sequenceId;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.reference != null && message.hasOwnProperty("reference"))
                object.reference = message.reference;
            if (message.insertion != null && message.hasOwnProperty("insertion"))
                object.insertion = message.insertion;
            if (message.ncbiUrl != null && message.hasOwnProperty("ncbiUrl"))
                object.ncbiUrl = message.ncbiUrl;
            if (message.annotations && message.annotations.length) {
                object.annotations = [];
                for (let j = 0; j < message.annotations.length; ++j)
                    object.annotations[j] = $root.api.SnpAnnotation.toObject(message.annotations[j], options);
            }
            return object;
        };

        /**
         * Converts this Snp to JSON.
         * @function toJSON
         * @memberof api.Snp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Snp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Snp;
    })();

    api.Gene = (function() {

        /**
         * Properties of a Gene.
         * @memberof api
         * @interface IGene
         * @property {string|null} [id] Gene id
         * @property {string|null} [sequenceId] Gene sequenceId
         * @property {google.protobuf.IStringValue|null} [symbol] Gene symbol
         * @property {google.protobuf.IStringValue|null} [description] Gene description
         * @property {string|null} [locusTag] Gene locusTag
         */

        /**
         * Constructs a new Gene.
         * @memberof api
         * @classdesc Represents a Gene.
         * @implements IGene
         * @constructor
         * @param {api.IGene=} [properties] Properties to set
         */
        function Gene(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Gene id.
         * @member {string} id
         * @memberof api.Gene
         * @instance
         */
        Gene.prototype.id = "";

        /**
         * Gene sequenceId.
         * @member {string} sequenceId
         * @memberof api.Gene
         * @instance
         */
        Gene.prototype.sequenceId = "";

        /**
         * Gene symbol.
         * @member {google.protobuf.IStringValue|null|undefined} symbol
         * @memberof api.Gene
         * @instance
         */
        Gene.prototype.symbol = null;

        /**
         * Gene description.
         * @member {google.protobuf.IStringValue|null|undefined} description
         * @memberof api.Gene
         * @instance
         */
        Gene.prototype.description = null;

        /**
         * Gene locusTag.
         * @member {string} locusTag
         * @memberof api.Gene
         * @instance
         */
        Gene.prototype.locusTag = "";

        /**
         * Creates a new Gene instance using the specified properties.
         * @function create
         * @memberof api.Gene
         * @static
         * @param {api.IGene=} [properties] Properties to set
         * @returns {api.Gene} Gene instance
         */
        Gene.create = function create(properties) {
            return new Gene(properties);
        };

        /**
         * Encodes the specified Gene message. Does not implicitly {@link api.Gene.verify|verify} messages.
         * @function encode
         * @memberof api.Gene
         * @static
         * @param {api.IGene} message Gene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.sequenceId != null && Object.hasOwnProperty.call(message, "sequenceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sequenceId);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                $root.google.protobuf.StringValue.encode(message.symbol, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                $root.google.protobuf.StringValue.encode(message.description, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.locusTag != null && Object.hasOwnProperty.call(message, "locusTag"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.locusTag);
            return writer;
        };

        /**
         * Encodes the specified Gene message, length delimited. Does not implicitly {@link api.Gene.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Gene
         * @static
         * @param {api.IGene} message Gene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gene.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Gene message from the specified reader or buffer.
         * @function decode
         * @memberof api.Gene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Gene} Gene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Gene();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sequenceId = reader.string();
                    break;
                case 3:
                    message.symbol = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.description = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.locusTag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Gene message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Gene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Gene} Gene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gene.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Gene message.
         * @function verify
         * @memberof api.Gene
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Gene.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                if (!$util.isString(message.sequenceId))
                    return "sequenceId: string expected";
            if (message.symbol != null && message.hasOwnProperty("symbol")) {
                let error = $root.google.protobuf.StringValue.verify(message.symbol);
                if (error)
                    return "symbol." + error;
            }
            if (message.description != null && message.hasOwnProperty("description")) {
                let error = $root.google.protobuf.StringValue.verify(message.description);
                if (error)
                    return "description." + error;
            }
            if (message.locusTag != null && message.hasOwnProperty("locusTag"))
                if (!$util.isString(message.locusTag))
                    return "locusTag: string expected";
            return null;
        };

        /**
         * Creates a Gene message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Gene
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Gene} Gene
         */
        Gene.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Gene)
                return object;
            let message = new $root.api.Gene();
            if (object.id != null)
                message.id = String(object.id);
            if (object.sequenceId != null)
                message.sequenceId = String(object.sequenceId);
            if (object.symbol != null) {
                if (typeof object.symbol !== "object")
                    throw TypeError(".api.Gene.symbol: object expected");
                message.symbol = $root.google.protobuf.StringValue.fromObject(object.symbol);
            }
            if (object.description != null) {
                if (typeof object.description !== "object")
                    throw TypeError(".api.Gene.description: object expected");
                message.description = $root.google.protobuf.StringValue.fromObject(object.description);
            }
            if (object.locusTag != null)
                message.locusTag = String(object.locusTag);
            return message;
        };

        /**
         * Creates a plain object from a Gene message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Gene
         * @static
         * @param {api.Gene} message Gene
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Gene.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.sequenceId = "";
                object.symbol = null;
                object.description = null;
                object.locusTag = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                object.sequenceId = message.sequenceId;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = $root.google.protobuf.StringValue.toObject(message.symbol, options);
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = $root.google.protobuf.StringValue.toObject(message.description, options);
            if (message.locusTag != null && message.hasOwnProperty("locusTag"))
                object.locusTag = message.locusTag;
            return object;
        };

        /**
         * Converts this Gene to JSON.
         * @function toJSON
         * @memberof api.Gene
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Gene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Gene;
    })();

    api.SnpAnnotation = (function() {

        /**
         * Properties of a SnpAnnotation.
         * @memberof api
         * @interface ISnpAnnotation
         * @property {api.IStudy|null} [study] SnpAnnotation study
         * @property {google.protobuf.IStringValue|null} [lineage] SnpAnnotation lineage
         */

        /**
         * Constructs a new SnpAnnotation.
         * @memberof api
         * @classdesc Represents a SnpAnnotation.
         * @implements ISnpAnnotation
         * @constructor
         * @param {api.ISnpAnnotation=} [properties] Properties to set
         */
        function SnpAnnotation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SnpAnnotation study.
         * @member {api.IStudy|null|undefined} study
         * @memberof api.SnpAnnotation
         * @instance
         */
        SnpAnnotation.prototype.study = null;

        /**
         * SnpAnnotation lineage.
         * @member {google.protobuf.IStringValue|null|undefined} lineage
         * @memberof api.SnpAnnotation
         * @instance
         */
        SnpAnnotation.prototype.lineage = null;

        /**
         * Creates a new SnpAnnotation instance using the specified properties.
         * @function create
         * @memberof api.SnpAnnotation
         * @static
         * @param {api.ISnpAnnotation=} [properties] Properties to set
         * @returns {api.SnpAnnotation} SnpAnnotation instance
         */
        SnpAnnotation.create = function create(properties) {
            return new SnpAnnotation(properties);
        };

        /**
         * Encodes the specified SnpAnnotation message. Does not implicitly {@link api.SnpAnnotation.verify|verify} messages.
         * @function encode
         * @memberof api.SnpAnnotation
         * @static
         * @param {api.ISnpAnnotation} message SnpAnnotation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SnpAnnotation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.study != null && Object.hasOwnProperty.call(message, "study"))
                $root.api.Study.encode(message.study, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.lineage != null && Object.hasOwnProperty.call(message, "lineage"))
                $root.google.protobuf.StringValue.encode(message.lineage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SnpAnnotation message, length delimited. Does not implicitly {@link api.SnpAnnotation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.SnpAnnotation
         * @static
         * @param {api.ISnpAnnotation} message SnpAnnotation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SnpAnnotation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SnpAnnotation message from the specified reader or buffer.
         * @function decode
         * @memberof api.SnpAnnotation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.SnpAnnotation} SnpAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SnpAnnotation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.SnpAnnotation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.study = $root.api.Study.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lineage = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SnpAnnotation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.SnpAnnotation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.SnpAnnotation} SnpAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SnpAnnotation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SnpAnnotation message.
         * @function verify
         * @memberof api.SnpAnnotation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SnpAnnotation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.study != null && message.hasOwnProperty("study")) {
                let error = $root.api.Study.verify(message.study);
                if (error)
                    return "study." + error;
            }
            if (message.lineage != null && message.hasOwnProperty("lineage")) {
                let error = $root.google.protobuf.StringValue.verify(message.lineage);
                if (error)
                    return "lineage." + error;
            }
            return null;
        };

        /**
         * Creates a SnpAnnotation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.SnpAnnotation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.SnpAnnotation} SnpAnnotation
         */
        SnpAnnotation.fromObject = function fromObject(object) {
            if (object instanceof $root.api.SnpAnnotation)
                return object;
            let message = new $root.api.SnpAnnotation();
            if (object.study != null) {
                if (typeof object.study !== "object")
                    throw TypeError(".api.SnpAnnotation.study: object expected");
                message.study = $root.api.Study.fromObject(object.study);
            }
            if (object.lineage != null) {
                if (typeof object.lineage !== "object")
                    throw TypeError(".api.SnpAnnotation.lineage: object expected");
                message.lineage = $root.google.protobuf.StringValue.fromObject(object.lineage);
            }
            return message;
        };

        /**
         * Creates a plain object from a SnpAnnotation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.SnpAnnotation
         * @static
         * @param {api.SnpAnnotation} message SnpAnnotation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SnpAnnotation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.study = null;
                object.lineage = null;
            }
            if (message.study != null && message.hasOwnProperty("study"))
                object.study = $root.api.Study.toObject(message.study, options);
            if (message.lineage != null && message.hasOwnProperty("lineage"))
                object.lineage = $root.google.protobuf.StringValue.toObject(message.lineage, options);
            return object;
        };

        /**
         * Converts this SnpAnnotation to JSON.
         * @function toJSON
         * @memberof api.SnpAnnotation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SnpAnnotation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SnpAnnotation;
    })();

    api.Study = (function() {

        /**
         * Properties of a Study.
         * @memberof api
         * @interface IStudy
         * @property {string|null} [title] Study title
         * @property {string|null} [publisher] Study publisher
         * @property {string|null} [doi] Study doi
         * @property {string|null} [url] Study url
         * @property {Array.<api.IAuthor>|null} [primaryAuthors] Study primaryAuthors
         * @property {api.IAuthor|null} [mainAuthor] Study mainAuthor
         */

        /**
         * Constructs a new Study.
         * @memberof api
         * @classdesc Represents a Study.
         * @implements IStudy
         * @constructor
         * @param {api.IStudy=} [properties] Properties to set
         */
        function Study(properties) {
            this.primaryAuthors = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Study title.
         * @member {string} title
         * @memberof api.Study
         * @instance
         */
        Study.prototype.title = "";

        /**
         * Study publisher.
         * @member {string} publisher
         * @memberof api.Study
         * @instance
         */
        Study.prototype.publisher = "";

        /**
         * Study doi.
         * @member {string} doi
         * @memberof api.Study
         * @instance
         */
        Study.prototype.doi = "";

        /**
         * Study url.
         * @member {string} url
         * @memberof api.Study
         * @instance
         */
        Study.prototype.url = "";

        /**
         * Study primaryAuthors.
         * @member {Array.<api.IAuthor>} primaryAuthors
         * @memberof api.Study
         * @instance
         */
        Study.prototype.primaryAuthors = $util.emptyArray;

        /**
         * Study mainAuthor.
         * @member {api.IAuthor|null|undefined} mainAuthor
         * @memberof api.Study
         * @instance
         */
        Study.prototype.mainAuthor = null;

        /**
         * Creates a new Study instance using the specified properties.
         * @function create
         * @memberof api.Study
         * @static
         * @param {api.IStudy=} [properties] Properties to set
         * @returns {api.Study} Study instance
         */
        Study.create = function create(properties) {
            return new Study(properties);
        };

        /**
         * Encodes the specified Study message. Does not implicitly {@link api.Study.verify|verify} messages.
         * @function encode
         * @memberof api.Study
         * @static
         * @param {api.IStudy} message Study message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Study.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.publisher != null && Object.hasOwnProperty.call(message, "publisher"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.publisher);
            if (message.doi != null && Object.hasOwnProperty.call(message, "doi"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.doi);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url);
            if (message.primaryAuthors != null && message.primaryAuthors.length)
                for (let i = 0; i < message.primaryAuthors.length; ++i)
                    $root.api.Author.encode(message.primaryAuthors[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.mainAuthor != null && Object.hasOwnProperty.call(message, "mainAuthor"))
                $root.api.Author.encode(message.mainAuthor, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Study message, length delimited. Does not implicitly {@link api.Study.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Study
         * @static
         * @param {api.IStudy} message Study message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Study.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Study message from the specified reader or buffer.
         * @function decode
         * @memberof api.Study
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Study} Study
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Study.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Study();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.publisher = reader.string();
                    break;
                case 3:
                    message.doi = reader.string();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    if (!(message.primaryAuthors && message.primaryAuthors.length))
                        message.primaryAuthors = [];
                    message.primaryAuthors.push($root.api.Author.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.mainAuthor = $root.api.Author.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Study message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Study
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Study} Study
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Study.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Study message.
         * @function verify
         * @memberof api.Study
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Study.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.publisher != null && message.hasOwnProperty("publisher"))
                if (!$util.isString(message.publisher))
                    return "publisher: string expected";
            if (message.doi != null && message.hasOwnProperty("doi"))
                if (!$util.isString(message.doi))
                    return "doi: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.primaryAuthors != null && message.hasOwnProperty("primaryAuthors")) {
                if (!Array.isArray(message.primaryAuthors))
                    return "primaryAuthors: array expected";
                for (let i = 0; i < message.primaryAuthors.length; ++i) {
                    let error = $root.api.Author.verify(message.primaryAuthors[i]);
                    if (error)
                        return "primaryAuthors." + error;
                }
            }
            if (message.mainAuthor != null && message.hasOwnProperty("mainAuthor")) {
                let error = $root.api.Author.verify(message.mainAuthor);
                if (error)
                    return "mainAuthor." + error;
            }
            return null;
        };

        /**
         * Creates a Study message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Study
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Study} Study
         */
        Study.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Study)
                return object;
            let message = new $root.api.Study();
            if (object.title != null)
                message.title = String(object.title);
            if (object.publisher != null)
                message.publisher = String(object.publisher);
            if (object.doi != null)
                message.doi = String(object.doi);
            if (object.url != null)
                message.url = String(object.url);
            if (object.primaryAuthors) {
                if (!Array.isArray(object.primaryAuthors))
                    throw TypeError(".api.Study.primaryAuthors: array expected");
                message.primaryAuthors = [];
                for (let i = 0; i < object.primaryAuthors.length; ++i) {
                    if (typeof object.primaryAuthors[i] !== "object")
                        throw TypeError(".api.Study.primaryAuthors: object expected");
                    message.primaryAuthors[i] = $root.api.Author.fromObject(object.primaryAuthors[i]);
                }
            }
            if (object.mainAuthor != null) {
                if (typeof object.mainAuthor !== "object")
                    throw TypeError(".api.Study.mainAuthor: object expected");
                message.mainAuthor = $root.api.Author.fromObject(object.mainAuthor);
            }
            return message;
        };

        /**
         * Creates a plain object from a Study message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Study
         * @static
         * @param {api.Study} message Study
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Study.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.primaryAuthors = [];
            if (options.defaults) {
                object.title = "";
                object.publisher = "";
                object.doi = "";
                object.url = "";
                object.mainAuthor = null;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.publisher != null && message.hasOwnProperty("publisher"))
                object.publisher = message.publisher;
            if (message.doi != null && message.hasOwnProperty("doi"))
                object.doi = message.doi;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.primaryAuthors && message.primaryAuthors.length) {
                object.primaryAuthors = [];
                for (let j = 0; j < message.primaryAuthors.length; ++j)
                    object.primaryAuthors[j] = $root.api.Author.toObject(message.primaryAuthors[j], options);
            }
            if (message.mainAuthor != null && message.hasOwnProperty("mainAuthor"))
                object.mainAuthor = $root.api.Author.toObject(message.mainAuthor, options);
            return object;
        };

        /**
         * Converts this Study to JSON.
         * @function toJSON
         * @memberof api.Study
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Study.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Study;
    })();

    api.Author = (function() {

        /**
         * Properties of an Author.
         * @memberof api
         * @interface IAuthor
         * @property {string|null} [given] Author given
         * @property {string|null} [family] Author family
         * @property {string|null} [fullName] Author fullName
         */

        /**
         * Constructs a new Author.
         * @memberof api
         * @classdesc Represents an Author.
         * @implements IAuthor
         * @constructor
         * @param {api.IAuthor=} [properties] Properties to set
         */
        function Author(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Author given.
         * @member {string} given
         * @memberof api.Author
         * @instance
         */
        Author.prototype.given = "";

        /**
         * Author family.
         * @member {string} family
         * @memberof api.Author
         * @instance
         */
        Author.prototype.family = "";

        /**
         * Author fullName.
         * @member {string} fullName
         * @memberof api.Author
         * @instance
         */
        Author.prototype.fullName = "";

        /**
         * Creates a new Author instance using the specified properties.
         * @function create
         * @memberof api.Author
         * @static
         * @param {api.IAuthor=} [properties] Properties to set
         * @returns {api.Author} Author instance
         */
        Author.create = function create(properties) {
            return new Author(properties);
        };

        /**
         * Encodes the specified Author message. Does not implicitly {@link api.Author.verify|verify} messages.
         * @function encode
         * @memberof api.Author
         * @static
         * @param {api.IAuthor} message Author message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Author.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.given != null && Object.hasOwnProperty.call(message, "given"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.given);
            if (message.family != null && Object.hasOwnProperty.call(message, "family"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.family);
            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fullName);
            return writer;
        };

        /**
         * Encodes the specified Author message, length delimited. Does not implicitly {@link api.Author.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Author
         * @static
         * @param {api.IAuthor} message Author message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Author.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Author message from the specified reader or buffer.
         * @function decode
         * @memberof api.Author
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Author} Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Author.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Author();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.given = reader.string();
                    break;
                case 2:
                    message.family = reader.string();
                    break;
                case 3:
                    message.fullName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Author message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Author
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Author} Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Author.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Author message.
         * @function verify
         * @memberof api.Author
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Author.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.given != null && message.hasOwnProperty("given"))
                if (!$util.isString(message.given))
                    return "given: string expected";
            if (message.family != null && message.hasOwnProperty("family"))
                if (!$util.isString(message.family))
                    return "family: string expected";
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                if (!$util.isString(message.fullName))
                    return "fullName: string expected";
            return null;
        };

        /**
         * Creates an Author message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Author
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Author} Author
         */
        Author.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Author)
                return object;
            let message = new $root.api.Author();
            if (object.given != null)
                message.given = String(object.given);
            if (object.family != null)
                message.family = String(object.family);
            if (object.fullName != null)
                message.fullName = String(object.fullName);
            return message;
        };

        /**
         * Creates a plain object from an Author message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Author
         * @static
         * @param {api.Author} message Author
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Author.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.given = "";
                object.family = "";
                object.fullName = "";
            }
            if (message.given != null && message.hasOwnProperty("given"))
                object.given = message.given;
            if (message.family != null && message.hasOwnProperty("family"))
                object.family = message.family;
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                object.fullName = message.fullName;
            return object;
        };

        /**
         * Converts this Author to JSON.
         * @function toJSON
         * @memberof api.Author
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Author.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Author;
    })();

    api.InsertionSequencePosition = (function() {

        /**
         * Properties of an InsertionSequencePosition.
         * @memberof api
         * @interface IInsertionSequencePosition
         * @property {number|null} [position] InsertionSequencePosition position
         * @property {string|null} [prefix] InsertionSequencePosition prefix
         */

        /**
         * Constructs a new InsertionSequencePosition.
         * @memberof api
         * @classdesc Represents an InsertionSequencePosition.
         * @implements IInsertionSequencePosition
         * @constructor
         * @param {api.IInsertionSequencePosition=} [properties] Properties to set
         */
        function InsertionSequencePosition(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InsertionSequencePosition position.
         * @member {number} position
         * @memberof api.InsertionSequencePosition
         * @instance
         */
        InsertionSequencePosition.prototype.position = 0;

        /**
         * InsertionSequencePosition prefix.
         * @member {string} prefix
         * @memberof api.InsertionSequencePosition
         * @instance
         */
        InsertionSequencePosition.prototype.prefix = "";

        /**
         * Creates a new InsertionSequencePosition instance using the specified properties.
         * @function create
         * @memberof api.InsertionSequencePosition
         * @static
         * @param {api.IInsertionSequencePosition=} [properties] Properties to set
         * @returns {api.InsertionSequencePosition} InsertionSequencePosition instance
         */
        InsertionSequencePosition.create = function create(properties) {
            return new InsertionSequencePosition(properties);
        };

        /**
         * Encodes the specified InsertionSequencePosition message. Does not implicitly {@link api.InsertionSequencePosition.verify|verify} messages.
         * @function encode
         * @memberof api.InsertionSequencePosition
         * @static
         * @param {api.IInsertionSequencePosition} message InsertionSequencePosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InsertionSequencePosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.position);
            if (message.prefix != null && Object.hasOwnProperty.call(message, "prefix"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.prefix);
            return writer;
        };

        /**
         * Encodes the specified InsertionSequencePosition message, length delimited. Does not implicitly {@link api.InsertionSequencePosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.InsertionSequencePosition
         * @static
         * @param {api.IInsertionSequencePosition} message InsertionSequencePosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InsertionSequencePosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InsertionSequencePosition message from the specified reader or buffer.
         * @function decode
         * @memberof api.InsertionSequencePosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.InsertionSequencePosition} InsertionSequencePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InsertionSequencePosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.InsertionSequencePosition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.position = reader.int32();
                    break;
                case 2:
                    message.prefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InsertionSequencePosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.InsertionSequencePosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.InsertionSequencePosition} InsertionSequencePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InsertionSequencePosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InsertionSequencePosition message.
         * @function verify
         * @memberof api.InsertionSequencePosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InsertionSequencePosition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.prefix != null && message.hasOwnProperty("prefix"))
                if (!$util.isString(message.prefix))
                    return "prefix: string expected";
            return null;
        };

        /**
         * Creates an InsertionSequencePosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.InsertionSequencePosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.InsertionSequencePosition} InsertionSequencePosition
         */
        InsertionSequencePosition.fromObject = function fromObject(object) {
            if (object instanceof $root.api.InsertionSequencePosition)
                return object;
            let message = new $root.api.InsertionSequencePosition();
            if (object.position != null)
                message.position = object.position | 0;
            if (object.prefix != null)
                message.prefix = String(object.prefix);
            return message;
        };

        /**
         * Creates a plain object from an InsertionSequencePosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.InsertionSequencePosition
         * @static
         * @param {api.InsertionSequencePosition} message InsertionSequencePosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InsertionSequencePosition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.position = 0;
                object.prefix = "";
            }
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.prefix != null && message.hasOwnProperty("prefix"))
                object.prefix = message.prefix;
            return object;
        };

        /**
         * Converts this InsertionSequencePosition to JSON.
         * @function toJSON
         * @memberof api.InsertionSequencePosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InsertionSequencePosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InsertionSequencePosition;
    })();

    api.InsertionSequence = (function() {

        /**
         * Properties of an InsertionSequence.
         * @memberof api
         * @interface IInsertionSequence
         * @property {string|null} [name] InsertionSequence name
         * @property {Array.<api.IInsertionSequencePosition>|null} [positions] InsertionSequence positions
         */

        /**
         * Constructs a new InsertionSequence.
         * @memberof api
         * @classdesc Represents an InsertionSequence.
         * @implements IInsertionSequence
         * @constructor
         * @param {api.IInsertionSequence=} [properties] Properties to set
         */
        function InsertionSequence(properties) {
            this.positions = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InsertionSequence name.
         * @member {string} name
         * @memberof api.InsertionSequence
         * @instance
         */
        InsertionSequence.prototype.name = "";

        /**
         * InsertionSequence positions.
         * @member {Array.<api.IInsertionSequencePosition>} positions
         * @memberof api.InsertionSequence
         * @instance
         */
        InsertionSequence.prototype.positions = $util.emptyArray;

        /**
         * Creates a new InsertionSequence instance using the specified properties.
         * @function create
         * @memberof api.InsertionSequence
         * @static
         * @param {api.IInsertionSequence=} [properties] Properties to set
         * @returns {api.InsertionSequence} InsertionSequence instance
         */
        InsertionSequence.create = function create(properties) {
            return new InsertionSequence(properties);
        };

        /**
         * Encodes the specified InsertionSequence message. Does not implicitly {@link api.InsertionSequence.verify|verify} messages.
         * @function encode
         * @memberof api.InsertionSequence
         * @static
         * @param {api.IInsertionSequence} message InsertionSequence message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InsertionSequence.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.positions != null && message.positions.length)
                for (let i = 0; i < message.positions.length; ++i)
                    $root.api.InsertionSequencePosition.encode(message.positions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InsertionSequence message, length delimited. Does not implicitly {@link api.InsertionSequence.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.InsertionSequence
         * @static
         * @param {api.IInsertionSequence} message InsertionSequence message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InsertionSequence.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InsertionSequence message from the specified reader or buffer.
         * @function decode
         * @memberof api.InsertionSequence
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.InsertionSequence} InsertionSequence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InsertionSequence.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.InsertionSequence();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.positions && message.positions.length))
                        message.positions = [];
                    message.positions.push($root.api.InsertionSequencePosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InsertionSequence message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.InsertionSequence
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.InsertionSequence} InsertionSequence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InsertionSequence.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InsertionSequence message.
         * @function verify
         * @memberof api.InsertionSequence
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InsertionSequence.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.positions != null && message.hasOwnProperty("positions")) {
                if (!Array.isArray(message.positions))
                    return "positions: array expected";
                for (let i = 0; i < message.positions.length; ++i) {
                    let error = $root.api.InsertionSequencePosition.verify(message.positions[i]);
                    if (error)
                        return "positions." + error;
                }
            }
            return null;
        };

        /**
         * Creates an InsertionSequence message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.InsertionSequence
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.InsertionSequence} InsertionSequence
         */
        InsertionSequence.fromObject = function fromObject(object) {
            if (object instanceof $root.api.InsertionSequence)
                return object;
            let message = new $root.api.InsertionSequence();
            if (object.name != null)
                message.name = String(object.name);
            if (object.positions) {
                if (!Array.isArray(object.positions))
                    throw TypeError(".api.InsertionSequence.positions: array expected");
                message.positions = [];
                for (let i = 0; i < object.positions.length; ++i) {
                    if (typeof object.positions[i] !== "object")
                        throw TypeError(".api.InsertionSequence.positions: object expected");
                    message.positions[i] = $root.api.InsertionSequencePosition.fromObject(object.positions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an InsertionSequence message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.InsertionSequence
         * @static
         * @param {api.InsertionSequence} message InsertionSequence
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InsertionSequence.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.positions = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.positions && message.positions.length) {
                object.positions = [];
                for (let j = 0; j < message.positions.length; ++j)
                    object.positions[j] = $root.api.InsertionSequencePosition.toObject(message.positions[j], options);
            }
            return object;
        };

        /**
         * Converts this InsertionSequence to JSON.
         * @function toJSON
         * @memberof api.InsertionSequence
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InsertionSequence.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InsertionSequence;
    })();

    api.CrisprPart = (function() {

        /**
         * Properties of a CrisprPart.
         * @memberof api
         * @interface ICrisprPart
         * @property {api.IDirectRepeatCrisprPart|null} [directRepeat] CrisprPart directRepeat
         * @property {api.ISpacerCrisprPart|null} [spacer] CrisprPart spacer
         * @property {api.IInsertionSequenceCrisprPart|null} [insertionSequence] CrisprPart insertionSequence
         * @property {api.INamedSequenceCrisprPart|null} [namedSequence] CrisprPart namedSequence
         * @property {api.ISequenceCrisprPart|null} [sequence] CrisprPart sequence
         * @property {api.IGeneCrisprPart|null} [gene] CrisprPart gene
         */

        /**
         * Constructs a new CrisprPart.
         * @memberof api
         * @classdesc Represents a CrisprPart.
         * @implements ICrisprPart
         * @constructor
         * @param {api.ICrisprPart=} [properties] Properties to set
         */
        function CrisprPart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CrisprPart directRepeat.
         * @member {api.IDirectRepeatCrisprPart|null|undefined} directRepeat
         * @memberof api.CrisprPart
         * @instance
         */
        CrisprPart.prototype.directRepeat = null;

        /**
         * CrisprPart spacer.
         * @member {api.ISpacerCrisprPart|null|undefined} spacer
         * @memberof api.CrisprPart
         * @instance
         */
        CrisprPart.prototype.spacer = null;

        /**
         * CrisprPart insertionSequence.
         * @member {api.IInsertionSequenceCrisprPart|null|undefined} insertionSequence
         * @memberof api.CrisprPart
         * @instance
         */
        CrisprPart.prototype.insertionSequence = null;

        /**
         * CrisprPart namedSequence.
         * @member {api.INamedSequenceCrisprPart|null|undefined} namedSequence
         * @memberof api.CrisprPart
         * @instance
         */
        CrisprPart.prototype.namedSequence = null;

        /**
         * CrisprPart sequence.
         * @member {api.ISequenceCrisprPart|null|undefined} sequence
         * @memberof api.CrisprPart
         * @instance
         */
        CrisprPart.prototype.sequence = null;

        /**
         * CrisprPart gene.
         * @member {api.IGeneCrisprPart|null|undefined} gene
         * @memberof api.CrisprPart
         * @instance
         */
        CrisprPart.prototype.gene = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * CrisprPart part.
         * @member {"directRepeat"|"spacer"|"insertionSequence"|"namedSequence"|"sequence"|"gene"|undefined} part
         * @memberof api.CrisprPart
         * @instance
         */
        Object.defineProperty(CrisprPart.prototype, "part", {
            get: $util.oneOfGetter($oneOfFields = ["directRepeat", "spacer", "insertionSequence", "namedSequence", "sequence", "gene"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CrisprPart instance using the specified properties.
         * @function create
         * @memberof api.CrisprPart
         * @static
         * @param {api.ICrisprPart=} [properties] Properties to set
         * @returns {api.CrisprPart} CrisprPart instance
         */
        CrisprPart.create = function create(properties) {
            return new CrisprPart(properties);
        };

        /**
         * Encodes the specified CrisprPart message. Does not implicitly {@link api.CrisprPart.verify|verify} messages.
         * @function encode
         * @memberof api.CrisprPart
         * @static
         * @param {api.ICrisprPart} message CrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CrisprPart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.directRepeat != null && Object.hasOwnProperty.call(message, "directRepeat"))
                $root.api.DirectRepeatCrisprPart.encode(message.directRepeat, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.spacer != null && Object.hasOwnProperty.call(message, "spacer"))
                $root.api.SpacerCrisprPart.encode(message.spacer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.insertionSequence != null && Object.hasOwnProperty.call(message, "insertionSequence"))
                $root.api.InsertionSequenceCrisprPart.encode(message.insertionSequence, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.namedSequence != null && Object.hasOwnProperty.call(message, "namedSequence"))
                $root.api.NamedSequenceCrisprPart.encode(message.namedSequence, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                $root.api.SequenceCrisprPart.encode(message.sequence, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.gene != null && Object.hasOwnProperty.call(message, "gene"))
                $root.api.GeneCrisprPart.encode(message.gene, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CrisprPart message, length delimited. Does not implicitly {@link api.CrisprPart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.CrisprPart
         * @static
         * @param {api.ICrisprPart} message CrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CrisprPart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CrisprPart message from the specified reader or buffer.
         * @function decode
         * @memberof api.CrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.CrisprPart} CrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CrisprPart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.CrisprPart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.directRepeat = $root.api.DirectRepeatCrisprPart.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.spacer = $root.api.SpacerCrisprPart.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.insertionSequence = $root.api.InsertionSequenceCrisprPart.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.namedSequence = $root.api.NamedSequenceCrisprPart.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sequence = $root.api.SequenceCrisprPart.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.gene = $root.api.GeneCrisprPart.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CrisprPart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.CrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.CrisprPart} CrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CrisprPart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CrisprPart message.
         * @function verify
         * @memberof api.CrisprPart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CrisprPart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.directRepeat != null && message.hasOwnProperty("directRepeat")) {
                properties.part = 1;
                {
                    let error = $root.api.DirectRepeatCrisprPart.verify(message.directRepeat);
                    if (error)
                        return "directRepeat." + error;
                }
            }
            if (message.spacer != null && message.hasOwnProperty("spacer")) {
                if (properties.part === 1)
                    return "part: multiple values";
                properties.part = 1;
                {
                    let error = $root.api.SpacerCrisprPart.verify(message.spacer);
                    if (error)
                        return "spacer." + error;
                }
            }
            if (message.insertionSequence != null && message.hasOwnProperty("insertionSequence")) {
                if (properties.part === 1)
                    return "part: multiple values";
                properties.part = 1;
                {
                    let error = $root.api.InsertionSequenceCrisprPart.verify(message.insertionSequence);
                    if (error)
                        return "insertionSequence." + error;
                }
            }
            if (message.namedSequence != null && message.hasOwnProperty("namedSequence")) {
                if (properties.part === 1)
                    return "part: multiple values";
                properties.part = 1;
                {
                    let error = $root.api.NamedSequenceCrisprPart.verify(message.namedSequence);
                    if (error)
                        return "namedSequence." + error;
                }
            }
            if (message.sequence != null && message.hasOwnProperty("sequence")) {
                if (properties.part === 1)
                    return "part: multiple values";
                properties.part = 1;
                {
                    let error = $root.api.SequenceCrisprPart.verify(message.sequence);
                    if (error)
                        return "sequence." + error;
                }
            }
            if (message.gene != null && message.hasOwnProperty("gene")) {
                if (properties.part === 1)
                    return "part: multiple values";
                properties.part = 1;
                {
                    let error = $root.api.GeneCrisprPart.verify(message.gene);
                    if (error)
                        return "gene." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CrisprPart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.CrisprPart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.CrisprPart} CrisprPart
         */
        CrisprPart.fromObject = function fromObject(object) {
            if (object instanceof $root.api.CrisprPart)
                return object;
            let message = new $root.api.CrisprPart();
            if (object.directRepeat != null) {
                if (typeof object.directRepeat !== "object")
                    throw TypeError(".api.CrisprPart.directRepeat: object expected");
                message.directRepeat = $root.api.DirectRepeatCrisprPart.fromObject(object.directRepeat);
            }
            if (object.spacer != null) {
                if (typeof object.spacer !== "object")
                    throw TypeError(".api.CrisprPart.spacer: object expected");
                message.spacer = $root.api.SpacerCrisprPart.fromObject(object.spacer);
            }
            if (object.insertionSequence != null) {
                if (typeof object.insertionSequence !== "object")
                    throw TypeError(".api.CrisprPart.insertionSequence: object expected");
                message.insertionSequence = $root.api.InsertionSequenceCrisprPart.fromObject(object.insertionSequence);
            }
            if (object.namedSequence != null) {
                if (typeof object.namedSequence !== "object")
                    throw TypeError(".api.CrisprPart.namedSequence: object expected");
                message.namedSequence = $root.api.NamedSequenceCrisprPart.fromObject(object.namedSequence);
            }
            if (object.sequence != null) {
                if (typeof object.sequence !== "object")
                    throw TypeError(".api.CrisprPart.sequence: object expected");
                message.sequence = $root.api.SequenceCrisprPart.fromObject(object.sequence);
            }
            if (object.gene != null) {
                if (typeof object.gene !== "object")
                    throw TypeError(".api.CrisprPart.gene: object expected");
                message.gene = $root.api.GeneCrisprPart.fromObject(object.gene);
            }
            return message;
        };

        /**
         * Creates a plain object from a CrisprPart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.CrisprPart
         * @static
         * @param {api.CrisprPart} message CrisprPart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CrisprPart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.directRepeat != null && message.hasOwnProperty("directRepeat")) {
                object.directRepeat = $root.api.DirectRepeatCrisprPart.toObject(message.directRepeat, options);
                if (options.oneofs)
                    object.part = "directRepeat";
            }
            if (message.spacer != null && message.hasOwnProperty("spacer")) {
                object.spacer = $root.api.SpacerCrisprPart.toObject(message.spacer, options);
                if (options.oneofs)
                    object.part = "spacer";
            }
            if (message.insertionSequence != null && message.hasOwnProperty("insertionSequence")) {
                object.insertionSequence = $root.api.InsertionSequenceCrisprPart.toObject(message.insertionSequence, options);
                if (options.oneofs)
                    object.part = "insertionSequence";
            }
            if (message.namedSequence != null && message.hasOwnProperty("namedSequence")) {
                object.namedSequence = $root.api.NamedSequenceCrisprPart.toObject(message.namedSequence, options);
                if (options.oneofs)
                    object.part = "namedSequence";
            }
            if (message.sequence != null && message.hasOwnProperty("sequence")) {
                object.sequence = $root.api.SequenceCrisprPart.toObject(message.sequence, options);
                if (options.oneofs)
                    object.part = "sequence";
            }
            if (message.gene != null && message.hasOwnProperty("gene")) {
                object.gene = $root.api.GeneCrisprPart.toObject(message.gene, options);
                if (options.oneofs)
                    object.part = "gene";
            }
            return object;
        };

        /**
         * Converts this CrisprPart to JSON.
         * @function toJSON
         * @memberof api.CrisprPart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CrisprPart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CrisprPart;
    })();

    api.GeneCrisprPart = (function() {

        /**
         * Properties of a GeneCrisprPart.
         * @memberof api
         * @interface IGeneCrisprPart
         * @property {string|null} [name] GeneCrisprPart name
         * @property {api.IGene|null} [gene] GeneCrisprPart gene
         */

        /**
         * Constructs a new GeneCrisprPart.
         * @memberof api
         * @classdesc Represents a GeneCrisprPart.
         * @implements IGeneCrisprPart
         * @constructor
         * @param {api.IGeneCrisprPart=} [properties] Properties to set
         */
        function GeneCrisprPart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GeneCrisprPart name.
         * @member {string} name
         * @memberof api.GeneCrisprPart
         * @instance
         */
        GeneCrisprPart.prototype.name = "";

        /**
         * GeneCrisprPart gene.
         * @member {api.IGene|null|undefined} gene
         * @memberof api.GeneCrisprPart
         * @instance
         */
        GeneCrisprPart.prototype.gene = null;

        /**
         * Creates a new GeneCrisprPart instance using the specified properties.
         * @function create
         * @memberof api.GeneCrisprPart
         * @static
         * @param {api.IGeneCrisprPart=} [properties] Properties to set
         * @returns {api.GeneCrisprPart} GeneCrisprPart instance
         */
        GeneCrisprPart.create = function create(properties) {
            return new GeneCrisprPart(properties);
        };

        /**
         * Encodes the specified GeneCrisprPart message. Does not implicitly {@link api.GeneCrisprPart.verify|verify} messages.
         * @function encode
         * @memberof api.GeneCrisprPart
         * @static
         * @param {api.IGeneCrisprPart} message GeneCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeneCrisprPart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.gene != null && Object.hasOwnProperty.call(message, "gene"))
                $root.api.Gene.encode(message.gene, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GeneCrisprPart message, length delimited. Does not implicitly {@link api.GeneCrisprPart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GeneCrisprPart
         * @static
         * @param {api.IGeneCrisprPart} message GeneCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeneCrisprPart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GeneCrisprPart message from the specified reader or buffer.
         * @function decode
         * @memberof api.GeneCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GeneCrisprPart} GeneCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeneCrisprPart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GeneCrisprPart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.gene = $root.api.Gene.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GeneCrisprPart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GeneCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GeneCrisprPart} GeneCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeneCrisprPart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GeneCrisprPart message.
         * @function verify
         * @memberof api.GeneCrisprPart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GeneCrisprPart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.gene != null && message.hasOwnProperty("gene")) {
                let error = $root.api.Gene.verify(message.gene);
                if (error)
                    return "gene." + error;
            }
            return null;
        };

        /**
         * Creates a GeneCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GeneCrisprPart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GeneCrisprPart} GeneCrisprPart
         */
        GeneCrisprPart.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GeneCrisprPart)
                return object;
            let message = new $root.api.GeneCrisprPart();
            if (object.name != null)
                message.name = String(object.name);
            if (object.gene != null) {
                if (typeof object.gene !== "object")
                    throw TypeError(".api.GeneCrisprPart.gene: object expected");
                message.gene = $root.api.Gene.fromObject(object.gene);
            }
            return message;
        };

        /**
         * Creates a plain object from a GeneCrisprPart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GeneCrisprPart
         * @static
         * @param {api.GeneCrisprPart} message GeneCrisprPart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GeneCrisprPart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.gene = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.gene != null && message.hasOwnProperty("gene"))
                object.gene = $root.api.Gene.toObject(message.gene, options);
            return object;
        };

        /**
         * Converts this GeneCrisprPart to JSON.
         * @function toJSON
         * @memberof api.GeneCrisprPart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GeneCrisprPart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GeneCrisprPart;
    })();

    api.DirectRepeatCrisprPart = (function() {

        /**
         * Properties of a DirectRepeatCrisprPart.
         * @memberof api
         * @interface IDirectRepeatCrisprPart
         * @property {string|null} [name] DirectRepeatCrisprPart name
         * @property {number|null} [version] DirectRepeatCrisprPart version
         * @property {api.IRange|null} [range] DirectRepeatCrisprPart range
         */

        /**
         * Constructs a new DirectRepeatCrisprPart.
         * @memberof api
         * @classdesc Represents a DirectRepeatCrisprPart.
         * @implements IDirectRepeatCrisprPart
         * @constructor
         * @param {api.IDirectRepeatCrisprPart=} [properties] Properties to set
         */
        function DirectRepeatCrisprPart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DirectRepeatCrisprPart name.
         * @member {string} name
         * @memberof api.DirectRepeatCrisprPart
         * @instance
         */
        DirectRepeatCrisprPart.prototype.name = "";

        /**
         * DirectRepeatCrisprPart version.
         * @member {number} version
         * @memberof api.DirectRepeatCrisprPart
         * @instance
         */
        DirectRepeatCrisprPart.prototype.version = 0;

        /**
         * DirectRepeatCrisprPart range.
         * @member {api.IRange|null|undefined} range
         * @memberof api.DirectRepeatCrisprPart
         * @instance
         */
        DirectRepeatCrisprPart.prototype.range = null;

        /**
         * Creates a new DirectRepeatCrisprPart instance using the specified properties.
         * @function create
         * @memberof api.DirectRepeatCrisprPart
         * @static
         * @param {api.IDirectRepeatCrisprPart=} [properties] Properties to set
         * @returns {api.DirectRepeatCrisprPart} DirectRepeatCrisprPart instance
         */
        DirectRepeatCrisprPart.create = function create(properties) {
            return new DirectRepeatCrisprPart(properties);
        };

        /**
         * Encodes the specified DirectRepeatCrisprPart message. Does not implicitly {@link api.DirectRepeatCrisprPart.verify|verify} messages.
         * @function encode
         * @memberof api.DirectRepeatCrisprPart
         * @static
         * @param {api.IDirectRepeatCrisprPart} message DirectRepeatCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DirectRepeatCrisprPart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.version);
            if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                $root.api.Range.encode(message.range, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DirectRepeatCrisprPart message, length delimited. Does not implicitly {@link api.DirectRepeatCrisprPart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.DirectRepeatCrisprPart
         * @static
         * @param {api.IDirectRepeatCrisprPart} message DirectRepeatCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DirectRepeatCrisprPart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DirectRepeatCrisprPart message from the specified reader or buffer.
         * @function decode
         * @memberof api.DirectRepeatCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.DirectRepeatCrisprPart} DirectRepeatCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DirectRepeatCrisprPart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.DirectRepeatCrisprPart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.int32();
                    break;
                case 3:
                    message.range = $root.api.Range.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DirectRepeatCrisprPart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.DirectRepeatCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.DirectRepeatCrisprPart} DirectRepeatCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DirectRepeatCrisprPart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DirectRepeatCrisprPart message.
         * @function verify
         * @memberof api.DirectRepeatCrisprPart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DirectRepeatCrisprPart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.range != null && message.hasOwnProperty("range")) {
                let error = $root.api.Range.verify(message.range);
                if (error)
                    return "range." + error;
            }
            return null;
        };

        /**
         * Creates a DirectRepeatCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.DirectRepeatCrisprPart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.DirectRepeatCrisprPart} DirectRepeatCrisprPart
         */
        DirectRepeatCrisprPart.fromObject = function fromObject(object) {
            if (object instanceof $root.api.DirectRepeatCrisprPart)
                return object;
            let message = new $root.api.DirectRepeatCrisprPart();
            if (object.name != null)
                message.name = String(object.name);
            if (object.version != null)
                message.version = object.version | 0;
            if (object.range != null) {
                if (typeof object.range !== "object")
                    throw TypeError(".api.DirectRepeatCrisprPart.range: object expected");
                message.range = $root.api.Range.fromObject(object.range);
            }
            return message;
        };

        /**
         * Creates a plain object from a DirectRepeatCrisprPart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.DirectRepeatCrisprPart
         * @static
         * @param {api.DirectRepeatCrisprPart} message DirectRepeatCrisprPart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DirectRepeatCrisprPart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.version = 0;
                object.range = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.range != null && message.hasOwnProperty("range"))
                object.range = $root.api.Range.toObject(message.range, options);
            return object;
        };

        /**
         * Converts this DirectRepeatCrisprPart to JSON.
         * @function toJSON
         * @memberof api.DirectRepeatCrisprPart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DirectRepeatCrisprPart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DirectRepeatCrisprPart;
    })();

    api.SpacerCrisprPart = (function() {

        /**
         * Properties of a SpacerCrisprPart.
         * @memberof api
         * @interface ISpacerCrisprPart
         * @property {number|null} [id] SpacerCrisprPart id
         * @property {number|null} [version] SpacerCrisprPart version
         * @property {api.IRange|null} [range] SpacerCrisprPart range
         */

        /**
         * Constructs a new SpacerCrisprPart.
         * @memberof api
         * @classdesc Represents a SpacerCrisprPart.
         * @implements ISpacerCrisprPart
         * @constructor
         * @param {api.ISpacerCrisprPart=} [properties] Properties to set
         */
        function SpacerCrisprPart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpacerCrisprPart id.
         * @member {number} id
         * @memberof api.SpacerCrisprPart
         * @instance
         */
        SpacerCrisprPart.prototype.id = 0;

        /**
         * SpacerCrisprPart version.
         * @member {number} version
         * @memberof api.SpacerCrisprPart
         * @instance
         */
        SpacerCrisprPart.prototype.version = 0;

        /**
         * SpacerCrisprPart range.
         * @member {api.IRange|null|undefined} range
         * @memberof api.SpacerCrisprPart
         * @instance
         */
        SpacerCrisprPart.prototype.range = null;

        /**
         * Creates a new SpacerCrisprPart instance using the specified properties.
         * @function create
         * @memberof api.SpacerCrisprPart
         * @static
         * @param {api.ISpacerCrisprPart=} [properties] Properties to set
         * @returns {api.SpacerCrisprPart} SpacerCrisprPart instance
         */
        SpacerCrisprPart.create = function create(properties) {
            return new SpacerCrisprPart(properties);
        };

        /**
         * Encodes the specified SpacerCrisprPart message. Does not implicitly {@link api.SpacerCrisprPart.verify|verify} messages.
         * @function encode
         * @memberof api.SpacerCrisprPart
         * @static
         * @param {api.ISpacerCrisprPart} message SpacerCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpacerCrisprPart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.version);
            if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                $root.api.Range.encode(message.range, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SpacerCrisprPart message, length delimited. Does not implicitly {@link api.SpacerCrisprPart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.SpacerCrisprPart
         * @static
         * @param {api.ISpacerCrisprPart} message SpacerCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpacerCrisprPart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpacerCrisprPart message from the specified reader or buffer.
         * @function decode
         * @memberof api.SpacerCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.SpacerCrisprPart} SpacerCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpacerCrisprPart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.SpacerCrisprPart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.version = reader.int32();
                    break;
                case 3:
                    message.range = $root.api.Range.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpacerCrisprPart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.SpacerCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.SpacerCrisprPart} SpacerCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpacerCrisprPart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpacerCrisprPart message.
         * @function verify
         * @memberof api.SpacerCrisprPart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpacerCrisprPart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.range != null && message.hasOwnProperty("range")) {
                let error = $root.api.Range.verify(message.range);
                if (error)
                    return "range." + error;
            }
            return null;
        };

        /**
         * Creates a SpacerCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.SpacerCrisprPart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.SpacerCrisprPart} SpacerCrisprPart
         */
        SpacerCrisprPart.fromObject = function fromObject(object) {
            if (object instanceof $root.api.SpacerCrisprPart)
                return object;
            let message = new $root.api.SpacerCrisprPart();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.version != null)
                message.version = object.version | 0;
            if (object.range != null) {
                if (typeof object.range !== "object")
                    throw TypeError(".api.SpacerCrisprPart.range: object expected");
                message.range = $root.api.Range.fromObject(object.range);
            }
            return message;
        };

        /**
         * Creates a plain object from a SpacerCrisprPart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.SpacerCrisprPart
         * @static
         * @param {api.SpacerCrisprPart} message SpacerCrisprPart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpacerCrisprPart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.version = 0;
                object.range = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.range != null && message.hasOwnProperty("range"))
                object.range = $root.api.Range.toObject(message.range, options);
            return object;
        };

        /**
         * Converts this SpacerCrisprPart to JSON.
         * @function toJSON
         * @memberof api.SpacerCrisprPart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpacerCrisprPart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpacerCrisprPart;
    })();

    api.InsertionSequenceCrisprPart = (function() {

        /**
         * Properties of an InsertionSequenceCrisprPart.
         * @memberof api
         * @interface IInsertionSequenceCrisprPart
         * @property {string|null} [name] InsertionSequenceCrisprPart name
         * @property {boolean|null} [isReverse] InsertionSequenceCrisprPart isReverse
         * @property {api.IRange|null} [range] InsertionSequenceCrisprPart range
         */

        /**
         * Constructs a new InsertionSequenceCrisprPart.
         * @memberof api
         * @classdesc Represents an InsertionSequenceCrisprPart.
         * @implements IInsertionSequenceCrisprPart
         * @constructor
         * @param {api.IInsertionSequenceCrisprPart=} [properties] Properties to set
         */
        function InsertionSequenceCrisprPart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InsertionSequenceCrisprPart name.
         * @member {string} name
         * @memberof api.InsertionSequenceCrisprPart
         * @instance
         */
        InsertionSequenceCrisprPart.prototype.name = "";

        /**
         * InsertionSequenceCrisprPart isReverse.
         * @member {boolean} isReverse
         * @memberof api.InsertionSequenceCrisprPart
         * @instance
         */
        InsertionSequenceCrisprPart.prototype.isReverse = false;

        /**
         * InsertionSequenceCrisprPart range.
         * @member {api.IRange|null|undefined} range
         * @memberof api.InsertionSequenceCrisprPart
         * @instance
         */
        InsertionSequenceCrisprPart.prototype.range = null;

        /**
         * Creates a new InsertionSequenceCrisprPart instance using the specified properties.
         * @function create
         * @memberof api.InsertionSequenceCrisprPart
         * @static
         * @param {api.IInsertionSequenceCrisprPart=} [properties] Properties to set
         * @returns {api.InsertionSequenceCrisprPart} InsertionSequenceCrisprPart instance
         */
        InsertionSequenceCrisprPart.create = function create(properties) {
            return new InsertionSequenceCrisprPart(properties);
        };

        /**
         * Encodes the specified InsertionSequenceCrisprPart message. Does not implicitly {@link api.InsertionSequenceCrisprPart.verify|verify} messages.
         * @function encode
         * @memberof api.InsertionSequenceCrisprPart
         * @static
         * @param {api.IInsertionSequenceCrisprPart} message InsertionSequenceCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InsertionSequenceCrisprPart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.isReverse != null && Object.hasOwnProperty.call(message, "isReverse"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReverse);
            if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                $root.api.Range.encode(message.range, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InsertionSequenceCrisprPart message, length delimited. Does not implicitly {@link api.InsertionSequenceCrisprPart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.InsertionSequenceCrisprPart
         * @static
         * @param {api.IInsertionSequenceCrisprPart} message InsertionSequenceCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InsertionSequenceCrisprPart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InsertionSequenceCrisprPart message from the specified reader or buffer.
         * @function decode
         * @memberof api.InsertionSequenceCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.InsertionSequenceCrisprPart} InsertionSequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InsertionSequenceCrisprPart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.InsertionSequenceCrisprPart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.isReverse = reader.bool();
                    break;
                case 3:
                    message.range = $root.api.Range.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InsertionSequenceCrisprPart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.InsertionSequenceCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.InsertionSequenceCrisprPart} InsertionSequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InsertionSequenceCrisprPart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InsertionSequenceCrisprPart message.
         * @function verify
         * @memberof api.InsertionSequenceCrisprPart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InsertionSequenceCrisprPart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.isReverse != null && message.hasOwnProperty("isReverse"))
                if (typeof message.isReverse !== "boolean")
                    return "isReverse: boolean expected";
            if (message.range != null && message.hasOwnProperty("range")) {
                let error = $root.api.Range.verify(message.range);
                if (error)
                    return "range." + error;
            }
            return null;
        };

        /**
         * Creates an InsertionSequenceCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.InsertionSequenceCrisprPart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.InsertionSequenceCrisprPart} InsertionSequenceCrisprPart
         */
        InsertionSequenceCrisprPart.fromObject = function fromObject(object) {
            if (object instanceof $root.api.InsertionSequenceCrisprPart)
                return object;
            let message = new $root.api.InsertionSequenceCrisprPart();
            if (object.name != null)
                message.name = String(object.name);
            if (object.isReverse != null)
                message.isReverse = Boolean(object.isReverse);
            if (object.range != null) {
                if (typeof object.range !== "object")
                    throw TypeError(".api.InsertionSequenceCrisprPart.range: object expected");
                message.range = $root.api.Range.fromObject(object.range);
            }
            return message;
        };

        /**
         * Creates a plain object from an InsertionSequenceCrisprPart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.InsertionSequenceCrisprPart
         * @static
         * @param {api.InsertionSequenceCrisprPart} message InsertionSequenceCrisprPart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InsertionSequenceCrisprPart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.isReverse = false;
                object.range = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.isReverse != null && message.hasOwnProperty("isReverse"))
                object.isReverse = message.isReverse;
            if (message.range != null && message.hasOwnProperty("range"))
                object.range = $root.api.Range.toObject(message.range, options);
            return object;
        };

        /**
         * Converts this InsertionSequenceCrisprPart to JSON.
         * @function toJSON
         * @memberof api.InsertionSequenceCrisprPart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InsertionSequenceCrisprPart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InsertionSequenceCrisprPart;
    })();

    api.NamedSequenceCrisprPart = (function() {

        /**
         * Properties of a NamedSequenceCrisprPart.
         * @memberof api
         * @interface INamedSequenceCrisprPart
         * @property {string|null} [name] NamedSequenceCrisprPart name
         */

        /**
         * Constructs a new NamedSequenceCrisprPart.
         * @memberof api
         * @classdesc Represents a NamedSequenceCrisprPart.
         * @implements INamedSequenceCrisprPart
         * @constructor
         * @param {api.INamedSequenceCrisprPart=} [properties] Properties to set
         */
        function NamedSequenceCrisprPart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NamedSequenceCrisprPart name.
         * @member {string} name
         * @memberof api.NamedSequenceCrisprPart
         * @instance
         */
        NamedSequenceCrisprPart.prototype.name = "";

        /**
         * Creates a new NamedSequenceCrisprPart instance using the specified properties.
         * @function create
         * @memberof api.NamedSequenceCrisprPart
         * @static
         * @param {api.INamedSequenceCrisprPart=} [properties] Properties to set
         * @returns {api.NamedSequenceCrisprPart} NamedSequenceCrisprPart instance
         */
        NamedSequenceCrisprPart.create = function create(properties) {
            return new NamedSequenceCrisprPart(properties);
        };

        /**
         * Encodes the specified NamedSequenceCrisprPart message. Does not implicitly {@link api.NamedSequenceCrisprPart.verify|verify} messages.
         * @function encode
         * @memberof api.NamedSequenceCrisprPart
         * @static
         * @param {api.INamedSequenceCrisprPart} message NamedSequenceCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NamedSequenceCrisprPart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified NamedSequenceCrisprPart message, length delimited. Does not implicitly {@link api.NamedSequenceCrisprPart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.NamedSequenceCrisprPart
         * @static
         * @param {api.INamedSequenceCrisprPart} message NamedSequenceCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NamedSequenceCrisprPart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NamedSequenceCrisprPart message from the specified reader or buffer.
         * @function decode
         * @memberof api.NamedSequenceCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.NamedSequenceCrisprPart} NamedSequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NamedSequenceCrisprPart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.NamedSequenceCrisprPart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
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
         * Decodes a NamedSequenceCrisprPart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.NamedSequenceCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.NamedSequenceCrisprPart} NamedSequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NamedSequenceCrisprPart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NamedSequenceCrisprPart message.
         * @function verify
         * @memberof api.NamedSequenceCrisprPart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NamedSequenceCrisprPart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a NamedSequenceCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.NamedSequenceCrisprPart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.NamedSequenceCrisprPart} NamedSequenceCrisprPart
         */
        NamedSequenceCrisprPart.fromObject = function fromObject(object) {
            if (object instanceof $root.api.NamedSequenceCrisprPart)
                return object;
            let message = new $root.api.NamedSequenceCrisprPart();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a NamedSequenceCrisprPart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.NamedSequenceCrisprPart
         * @static
         * @param {api.NamedSequenceCrisprPart} message NamedSequenceCrisprPart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NamedSequenceCrisprPart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this NamedSequenceCrisprPart to JSON.
         * @function toJSON
         * @memberof api.NamedSequenceCrisprPart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NamedSequenceCrisprPart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NamedSequenceCrisprPart;
    })();

    api.SequenceCrisprPart = (function() {

        /**
         * Properties of a SequenceCrisprPart.
         * @memberof api
         * @interface ISequenceCrisprPart
         * @property {string|null} [value] SequenceCrisprPart value
         */

        /**
         * Constructs a new SequenceCrisprPart.
         * @memberof api
         * @classdesc Represents a SequenceCrisprPart.
         * @implements ISequenceCrisprPart
         * @constructor
         * @param {api.ISequenceCrisprPart=} [properties] Properties to set
         */
        function SequenceCrisprPart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SequenceCrisprPart value.
         * @member {string} value
         * @memberof api.SequenceCrisprPart
         * @instance
         */
        SequenceCrisprPart.prototype.value = "";

        /**
         * Creates a new SequenceCrisprPart instance using the specified properties.
         * @function create
         * @memberof api.SequenceCrisprPart
         * @static
         * @param {api.ISequenceCrisprPart=} [properties] Properties to set
         * @returns {api.SequenceCrisprPart} SequenceCrisprPart instance
         */
        SequenceCrisprPart.create = function create(properties) {
            return new SequenceCrisprPart(properties);
        };

        /**
         * Encodes the specified SequenceCrisprPart message. Does not implicitly {@link api.SequenceCrisprPart.verify|verify} messages.
         * @function encode
         * @memberof api.SequenceCrisprPart
         * @static
         * @param {api.ISequenceCrisprPart} message SequenceCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SequenceCrisprPart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified SequenceCrisprPart message, length delimited. Does not implicitly {@link api.SequenceCrisprPart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.SequenceCrisprPart
         * @static
         * @param {api.ISequenceCrisprPart} message SequenceCrisprPart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SequenceCrisprPart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SequenceCrisprPart message from the specified reader or buffer.
         * @function decode
         * @memberof api.SequenceCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.SequenceCrisprPart} SequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SequenceCrisprPart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.SequenceCrisprPart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SequenceCrisprPart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.SequenceCrisprPart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.SequenceCrisprPart} SequenceCrisprPart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SequenceCrisprPart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SequenceCrisprPart message.
         * @function verify
         * @memberof api.SequenceCrisprPart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SequenceCrisprPart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a SequenceCrisprPart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.SequenceCrisprPart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.SequenceCrisprPart} SequenceCrisprPart
         */
        SequenceCrisprPart.fromObject = function fromObject(object) {
            if (object instanceof $root.api.SequenceCrisprPart)
                return object;
            let message = new $root.api.SequenceCrisprPart();
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a SequenceCrisprPart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.SequenceCrisprPart
         * @static
         * @param {api.SequenceCrisprPart} message SequenceCrisprPart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SequenceCrisprPart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.value = "";
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this SequenceCrisprPart to JSON.
         * @function toJSON
         * @memberof api.SequenceCrisprPart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SequenceCrisprPart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SequenceCrisprPart;
    })();

    api.Range = (function() {

        /**
         * Properties of a Range.
         * @memberof api
         * @interface IRange
         * @property {number|null} [from] Range from
         * @property {number|null} [to] Range to
         */

        /**
         * Constructs a new Range.
         * @memberof api
         * @classdesc Represents a Range.
         * @implements IRange
         * @constructor
         * @param {api.IRange=} [properties] Properties to set
         */
        function Range(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Range from.
         * @member {number} from
         * @memberof api.Range
         * @instance
         */
        Range.prototype.from = 0;

        /**
         * Range to.
         * @member {number} to
         * @memberof api.Range
         * @instance
         */
        Range.prototype.to = 0;

        /**
         * Creates a new Range instance using the specified properties.
         * @function create
         * @memberof api.Range
         * @static
         * @param {api.IRange=} [properties] Properties to set
         * @returns {api.Range} Range instance
         */
        Range.create = function create(properties) {
            return new Range(properties);
        };

        /**
         * Encodes the specified Range message. Does not implicitly {@link api.Range.verify|verify} messages.
         * @function encode
         * @memberof api.Range
         * @static
         * @param {api.IRange} message Range message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Range.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.to);
            return writer;
        };

        /**
         * Encodes the specified Range message, length delimited. Does not implicitly {@link api.Range.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Range
         * @static
         * @param {api.IRange} message Range message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Range.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Range message from the specified reader or buffer.
         * @function decode
         * @memberof api.Range
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Range} Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Range.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Range();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.from = reader.int32();
                    break;
                case 2:
                    message.to = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Range message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Range
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Range} Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Range.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Range message.
         * @function verify
         * @memberof api.Range
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Range.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isInteger(message.from))
                    return "from: integer expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isInteger(message.to))
                    return "to: integer expected";
            return null;
        };

        /**
         * Creates a Range message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Range
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Range} Range
         */
        Range.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Range)
                return object;
            let message = new $root.api.Range();
            if (object.from != null)
                message.from = object.from | 0;
            if (object.to != null)
                message.to = object.to | 0;
            return message;
        };

        /**
         * Creates a plain object from a Range message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Range
         * @static
         * @param {api.Range} message Range
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Range.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.from = 0;
                object.to = 0;
            }
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            return object;
        };

        /**
         * Converts this Range to JSON.
         * @function toJSON
         * @memberof api.Range
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Range.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Range;
    })();

    api.StrainResult = (function() {

        /**
         * Properties of a StrainResult.
         * @memberof api
         * @interface IStrainResult
         * @property {string|null} [strainId] StrainResult strainId
         * @property {api.INcbiRun|null} [run] StrainResult run
         * @property {Array.<api.IGene>|null} [missingGenes] StrainResult missingGenes
         * @property {Array.<api.IInsertionSequence>|null} [insertionSequences] StrainResult insertionSequences
         * @property {Array.<boolean>|null} [spoligotype43Blast] StrainResult spoligotype43Blast
         * @property {Array.<boolean>|null} [spoligotype98Blast] StrainResult spoligotype98Blast
         * @property {Array.<boolean>|null} [spoligotype43Crispr] StrainResult spoligotype43Crispr
         * @property {Array.<boolean>|null} [spoligotype98Crispr] StrainResult spoligotype98Crispr
         * @property {boolean|null} [spoligotype43MatchBlast] StrainResult spoligotype43MatchBlast
         * @property {boolean|null} [spoligotype98MatchBlast] StrainResult spoligotype98MatchBlast
         * @property {Array.<boolean>|null} [spoligotypeBloinBlast] StrainResult spoligotypeBloinBlast
         * @property {Array.<api.ICrisprPart>|null} [crispr] StrainResult crispr
         * @property {Array.<api.ISnp>|null} [snp] StrainResult snp
         */

        /**
         * Constructs a new StrainResult.
         * @memberof api
         * @classdesc Represents a StrainResult.
         * @implements IStrainResult
         * @constructor
         * @param {api.IStrainResult=} [properties] Properties to set
         */
        function StrainResult(properties) {
            this.missingGenes = [];
            this.insertionSequences = [];
            this.spoligotype43Blast = [];
            this.spoligotype98Blast = [];
            this.spoligotype43Crispr = [];
            this.spoligotype98Crispr = [];
            this.spoligotypeBloinBlast = [];
            this.crispr = [];
            this.snp = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StrainResult strainId.
         * @member {string} strainId
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.strainId = "";

        /**
         * StrainResult run.
         * @member {api.INcbiRun|null|undefined} run
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.run = null;

        /**
         * StrainResult missingGenes.
         * @member {Array.<api.IGene>} missingGenes
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.missingGenes = $util.emptyArray;

        /**
         * StrainResult insertionSequences.
         * @member {Array.<api.IInsertionSequence>} insertionSequences
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.insertionSequences = $util.emptyArray;

        /**
         * StrainResult spoligotype43Blast.
         * @member {Array.<boolean>} spoligotype43Blast
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.spoligotype43Blast = $util.emptyArray;

        /**
         * StrainResult spoligotype98Blast.
         * @member {Array.<boolean>} spoligotype98Blast
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.spoligotype98Blast = $util.emptyArray;

        /**
         * StrainResult spoligotype43Crispr.
         * @member {Array.<boolean>} spoligotype43Crispr
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.spoligotype43Crispr = $util.emptyArray;

        /**
         * StrainResult spoligotype98Crispr.
         * @member {Array.<boolean>} spoligotype98Crispr
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.spoligotype98Crispr = $util.emptyArray;

        /**
         * StrainResult spoligotype43MatchBlast.
         * @member {boolean} spoligotype43MatchBlast
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.spoligotype43MatchBlast = false;

        /**
         * StrainResult spoligotype98MatchBlast.
         * @member {boolean} spoligotype98MatchBlast
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.spoligotype98MatchBlast = false;

        /**
         * StrainResult spoligotypeBloinBlast.
         * @member {Array.<boolean>} spoligotypeBloinBlast
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.spoligotypeBloinBlast = $util.emptyArray;

        /**
         * StrainResult crispr.
         * @member {Array.<api.ICrisprPart>} crispr
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.crispr = $util.emptyArray;

        /**
         * StrainResult snp.
         * @member {Array.<api.ISnp>} snp
         * @memberof api.StrainResult
         * @instance
         */
        StrainResult.prototype.snp = $util.emptyArray;

        /**
         * Creates a new StrainResult instance using the specified properties.
         * @function create
         * @memberof api.StrainResult
         * @static
         * @param {api.IStrainResult=} [properties] Properties to set
         * @returns {api.StrainResult} StrainResult instance
         */
        StrainResult.create = function create(properties) {
            return new StrainResult(properties);
        };

        /**
         * Encodes the specified StrainResult message. Does not implicitly {@link api.StrainResult.verify|verify} messages.
         * @function encode
         * @memberof api.StrainResult
         * @static
         * @param {api.IStrainResult} message StrainResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.strainId != null && Object.hasOwnProperty.call(message, "strainId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.strainId);
            if (message.run != null && Object.hasOwnProperty.call(message, "run"))
                $root.api.NcbiRun.encode(message.run, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.missingGenes != null && message.missingGenes.length)
                for (let i = 0; i < message.missingGenes.length; ++i)
                    $root.api.Gene.encode(message.missingGenes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.insertionSequences != null && message.insertionSequences.length)
                for (let i = 0; i < message.insertionSequences.length; ++i)
                    $root.api.InsertionSequence.encode(message.insertionSequences[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.spoligotype43Blast != null && message.spoligotype43Blast.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.spoligotype43Blast.length; ++i)
                    writer.bool(message.spoligotype43Blast[i]);
                writer.ldelim();
            }
            if (message.spoligotype98Blast != null && message.spoligotype98Blast.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (let i = 0; i < message.spoligotype98Blast.length; ++i)
                    writer.bool(message.spoligotype98Blast[i]);
                writer.ldelim();
            }
            if (message.spoligotype43Crispr != null && message.spoligotype43Crispr.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (let i = 0; i < message.spoligotype43Crispr.length; ++i)
                    writer.bool(message.spoligotype43Crispr[i]);
                writer.ldelim();
            }
            if (message.spoligotype98Crispr != null && message.spoligotype98Crispr.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (let i = 0; i < message.spoligotype98Crispr.length; ++i)
                    writer.bool(message.spoligotype98Crispr[i]);
                writer.ldelim();
            }
            if (message.spoligotype43MatchBlast != null && Object.hasOwnProperty.call(message, "spoligotype43MatchBlast"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.spoligotype43MatchBlast);
            if (message.spoligotype98MatchBlast != null && Object.hasOwnProperty.call(message, "spoligotype98MatchBlast"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.spoligotype98MatchBlast);
            if (message.spoligotypeBloinBlast != null && message.spoligotypeBloinBlast.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (let i = 0; i < message.spoligotypeBloinBlast.length; ++i)
                    writer.bool(message.spoligotypeBloinBlast[i]);
                writer.ldelim();
            }
            if (message.crispr != null && message.crispr.length)
                for (let i = 0; i < message.crispr.length; ++i)
                    $root.api.CrisprPart.encode(message.crispr[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.snp != null && message.snp.length)
                for (let i = 0; i < message.snp.length; ++i)
                    $root.api.Snp.encode(message.snp[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StrainResult message, length delimited. Does not implicitly {@link api.StrainResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.StrainResult
         * @static
         * @param {api.IStrainResult} message StrainResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrainResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StrainResult message from the specified reader or buffer.
         * @function decode
         * @memberof api.StrainResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.StrainResult} StrainResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.StrainResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.strainId = reader.string();
                    break;
                case 2:
                    message.run = $root.api.NcbiRun.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.missingGenes && message.missingGenes.length))
                        message.missingGenes = [];
                    message.missingGenes.push($root.api.Gene.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.insertionSequences && message.insertionSequences.length))
                        message.insertionSequences = [];
                    message.insertionSequences.push($root.api.InsertionSequence.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.spoligotype43Blast && message.spoligotype43Blast.length))
                        message.spoligotype43Blast = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.spoligotype43Blast.push(reader.bool());
                    } else
                        message.spoligotype43Blast.push(reader.bool());
                    break;
                case 6:
                    if (!(message.spoligotype98Blast && message.spoligotype98Blast.length))
                        message.spoligotype98Blast = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.spoligotype98Blast.push(reader.bool());
                    } else
                        message.spoligotype98Blast.push(reader.bool());
                    break;
                case 7:
                    if (!(message.spoligotype43Crispr && message.spoligotype43Crispr.length))
                        message.spoligotype43Crispr = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.spoligotype43Crispr.push(reader.bool());
                    } else
                        message.spoligotype43Crispr.push(reader.bool());
                    break;
                case 8:
                    if (!(message.spoligotype98Crispr && message.spoligotype98Crispr.length))
                        message.spoligotype98Crispr = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.spoligotype98Crispr.push(reader.bool());
                    } else
                        message.spoligotype98Crispr.push(reader.bool());
                    break;
                case 9:
                    message.spoligotype43MatchBlast = reader.bool();
                    break;
                case 10:
                    message.spoligotype98MatchBlast = reader.bool();
                    break;
                case 11:
                    if (!(message.spoligotypeBloinBlast && message.spoligotypeBloinBlast.length))
                        message.spoligotypeBloinBlast = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.spoligotypeBloinBlast.push(reader.bool());
                    } else
                        message.spoligotypeBloinBlast.push(reader.bool());
                    break;
                case 12:
                    if (!(message.crispr && message.crispr.length))
                        message.crispr = [];
                    message.crispr.push($root.api.CrisprPart.decode(reader, reader.uint32()));
                    break;
                case 13:
                    if (!(message.snp && message.snp.length))
                        message.snp = [];
                    message.snp.push($root.api.Snp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StrainResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.StrainResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.StrainResult} StrainResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrainResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StrainResult message.
         * @function verify
         * @memberof api.StrainResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StrainResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.strainId != null && message.hasOwnProperty("strainId"))
                if (!$util.isString(message.strainId))
                    return "strainId: string expected";
            if (message.run != null && message.hasOwnProperty("run")) {
                let error = $root.api.NcbiRun.verify(message.run);
                if (error)
                    return "run." + error;
            }
            if (message.missingGenes != null && message.hasOwnProperty("missingGenes")) {
                if (!Array.isArray(message.missingGenes))
                    return "missingGenes: array expected";
                for (let i = 0; i < message.missingGenes.length; ++i) {
                    let error = $root.api.Gene.verify(message.missingGenes[i]);
                    if (error)
                        return "missingGenes." + error;
                }
            }
            if (message.insertionSequences != null && message.hasOwnProperty("insertionSequences")) {
                if (!Array.isArray(message.insertionSequences))
                    return "insertionSequences: array expected";
                for (let i = 0; i < message.insertionSequences.length; ++i) {
                    let error = $root.api.InsertionSequence.verify(message.insertionSequences[i]);
                    if (error)
                        return "insertionSequences." + error;
                }
            }
            if (message.spoligotype43Blast != null && message.hasOwnProperty("spoligotype43Blast")) {
                if (!Array.isArray(message.spoligotype43Blast))
                    return "spoligotype43Blast: array expected";
                for (let i = 0; i < message.spoligotype43Blast.length; ++i)
                    if (typeof message.spoligotype43Blast[i] !== "boolean")
                        return "spoligotype43Blast: boolean[] expected";
            }
            if (message.spoligotype98Blast != null && message.hasOwnProperty("spoligotype98Blast")) {
                if (!Array.isArray(message.spoligotype98Blast))
                    return "spoligotype98Blast: array expected";
                for (let i = 0; i < message.spoligotype98Blast.length; ++i)
                    if (typeof message.spoligotype98Blast[i] !== "boolean")
                        return "spoligotype98Blast: boolean[] expected";
            }
            if (message.spoligotype43Crispr != null && message.hasOwnProperty("spoligotype43Crispr")) {
                if (!Array.isArray(message.spoligotype43Crispr))
                    return "spoligotype43Crispr: array expected";
                for (let i = 0; i < message.spoligotype43Crispr.length; ++i)
                    if (typeof message.spoligotype43Crispr[i] !== "boolean")
                        return "spoligotype43Crispr: boolean[] expected";
            }
            if (message.spoligotype98Crispr != null && message.hasOwnProperty("spoligotype98Crispr")) {
                if (!Array.isArray(message.spoligotype98Crispr))
                    return "spoligotype98Crispr: array expected";
                for (let i = 0; i < message.spoligotype98Crispr.length; ++i)
                    if (typeof message.spoligotype98Crispr[i] !== "boolean")
                        return "spoligotype98Crispr: boolean[] expected";
            }
            if (message.spoligotype43MatchBlast != null && message.hasOwnProperty("spoligotype43MatchBlast"))
                if (typeof message.spoligotype43MatchBlast !== "boolean")
                    return "spoligotype43MatchBlast: boolean expected";
            if (message.spoligotype98MatchBlast != null && message.hasOwnProperty("spoligotype98MatchBlast"))
                if (typeof message.spoligotype98MatchBlast !== "boolean")
                    return "spoligotype98MatchBlast: boolean expected";
            if (message.spoligotypeBloinBlast != null && message.hasOwnProperty("spoligotypeBloinBlast")) {
                if (!Array.isArray(message.spoligotypeBloinBlast))
                    return "spoligotypeBloinBlast: array expected";
                for (let i = 0; i < message.spoligotypeBloinBlast.length; ++i)
                    if (typeof message.spoligotypeBloinBlast[i] !== "boolean")
                        return "spoligotypeBloinBlast: boolean[] expected";
            }
            if (message.crispr != null && message.hasOwnProperty("crispr")) {
                if (!Array.isArray(message.crispr))
                    return "crispr: array expected";
                for (let i = 0; i < message.crispr.length; ++i) {
                    let error = $root.api.CrisprPart.verify(message.crispr[i]);
                    if (error)
                        return "crispr." + error;
                }
            }
            if (message.snp != null && message.hasOwnProperty("snp")) {
                if (!Array.isArray(message.snp))
                    return "snp: array expected";
                for (let i = 0; i < message.snp.length; ++i) {
                    let error = $root.api.Snp.verify(message.snp[i]);
                    if (error)
                        return "snp." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StrainResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.StrainResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.StrainResult} StrainResult
         */
        StrainResult.fromObject = function fromObject(object) {
            if (object instanceof $root.api.StrainResult)
                return object;
            let message = new $root.api.StrainResult();
            if (object.strainId != null)
                message.strainId = String(object.strainId);
            if (object.run != null) {
                if (typeof object.run !== "object")
                    throw TypeError(".api.StrainResult.run: object expected");
                message.run = $root.api.NcbiRun.fromObject(object.run);
            }
            if (object.missingGenes) {
                if (!Array.isArray(object.missingGenes))
                    throw TypeError(".api.StrainResult.missingGenes: array expected");
                message.missingGenes = [];
                for (let i = 0; i < object.missingGenes.length; ++i) {
                    if (typeof object.missingGenes[i] !== "object")
                        throw TypeError(".api.StrainResult.missingGenes: object expected");
                    message.missingGenes[i] = $root.api.Gene.fromObject(object.missingGenes[i]);
                }
            }
            if (object.insertionSequences) {
                if (!Array.isArray(object.insertionSequences))
                    throw TypeError(".api.StrainResult.insertionSequences: array expected");
                message.insertionSequences = [];
                for (let i = 0; i < object.insertionSequences.length; ++i) {
                    if (typeof object.insertionSequences[i] !== "object")
                        throw TypeError(".api.StrainResult.insertionSequences: object expected");
                    message.insertionSequences[i] = $root.api.InsertionSequence.fromObject(object.insertionSequences[i]);
                }
            }
            if (object.spoligotype43Blast) {
                if (!Array.isArray(object.spoligotype43Blast))
                    throw TypeError(".api.StrainResult.spoligotype43Blast: array expected");
                message.spoligotype43Blast = [];
                for (let i = 0; i < object.spoligotype43Blast.length; ++i)
                    message.spoligotype43Blast[i] = Boolean(object.spoligotype43Blast[i]);
            }
            if (object.spoligotype98Blast) {
                if (!Array.isArray(object.spoligotype98Blast))
                    throw TypeError(".api.StrainResult.spoligotype98Blast: array expected");
                message.spoligotype98Blast = [];
                for (let i = 0; i < object.spoligotype98Blast.length; ++i)
                    message.spoligotype98Blast[i] = Boolean(object.spoligotype98Blast[i]);
            }
            if (object.spoligotype43Crispr) {
                if (!Array.isArray(object.spoligotype43Crispr))
                    throw TypeError(".api.StrainResult.spoligotype43Crispr: array expected");
                message.spoligotype43Crispr = [];
                for (let i = 0; i < object.spoligotype43Crispr.length; ++i)
                    message.spoligotype43Crispr[i] = Boolean(object.spoligotype43Crispr[i]);
            }
            if (object.spoligotype98Crispr) {
                if (!Array.isArray(object.spoligotype98Crispr))
                    throw TypeError(".api.StrainResult.spoligotype98Crispr: array expected");
                message.spoligotype98Crispr = [];
                for (let i = 0; i < object.spoligotype98Crispr.length; ++i)
                    message.spoligotype98Crispr[i] = Boolean(object.spoligotype98Crispr[i]);
            }
            if (object.spoligotype43MatchBlast != null)
                message.spoligotype43MatchBlast = Boolean(object.spoligotype43MatchBlast);
            if (object.spoligotype98MatchBlast != null)
                message.spoligotype98MatchBlast = Boolean(object.spoligotype98MatchBlast);
            if (object.spoligotypeBloinBlast) {
                if (!Array.isArray(object.spoligotypeBloinBlast))
                    throw TypeError(".api.StrainResult.spoligotypeBloinBlast: array expected");
                message.spoligotypeBloinBlast = [];
                for (let i = 0; i < object.spoligotypeBloinBlast.length; ++i)
                    message.spoligotypeBloinBlast[i] = Boolean(object.spoligotypeBloinBlast[i]);
            }
            if (object.crispr) {
                if (!Array.isArray(object.crispr))
                    throw TypeError(".api.StrainResult.crispr: array expected");
                message.crispr = [];
                for (let i = 0; i < object.crispr.length; ++i) {
                    if (typeof object.crispr[i] !== "object")
                        throw TypeError(".api.StrainResult.crispr: object expected");
                    message.crispr[i] = $root.api.CrisprPart.fromObject(object.crispr[i]);
                }
            }
            if (object.snp) {
                if (!Array.isArray(object.snp))
                    throw TypeError(".api.StrainResult.snp: array expected");
                message.snp = [];
                for (let i = 0; i < object.snp.length; ++i) {
                    if (typeof object.snp[i] !== "object")
                        throw TypeError(".api.StrainResult.snp: object expected");
                    message.snp[i] = $root.api.Snp.fromObject(object.snp[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StrainResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.StrainResult
         * @static
         * @param {api.StrainResult} message StrainResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StrainResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.missingGenes = [];
                object.insertionSequences = [];
                object.spoligotype43Blast = [];
                object.spoligotype98Blast = [];
                object.spoligotype43Crispr = [];
                object.spoligotype98Crispr = [];
                object.spoligotypeBloinBlast = [];
                object.crispr = [];
                object.snp = [];
            }
            if (options.defaults) {
                object.strainId = "";
                object.run = null;
                object.spoligotype43MatchBlast = false;
                object.spoligotype98MatchBlast = false;
            }
            if (message.strainId != null && message.hasOwnProperty("strainId"))
                object.strainId = message.strainId;
            if (message.run != null && message.hasOwnProperty("run"))
                object.run = $root.api.NcbiRun.toObject(message.run, options);
            if (message.missingGenes && message.missingGenes.length) {
                object.missingGenes = [];
                for (let j = 0; j < message.missingGenes.length; ++j)
                    object.missingGenes[j] = $root.api.Gene.toObject(message.missingGenes[j], options);
            }
            if (message.insertionSequences && message.insertionSequences.length) {
                object.insertionSequences = [];
                for (let j = 0; j < message.insertionSequences.length; ++j)
                    object.insertionSequences[j] = $root.api.InsertionSequence.toObject(message.insertionSequences[j], options);
            }
            if (message.spoligotype43Blast && message.spoligotype43Blast.length) {
                object.spoligotype43Blast = [];
                for (let j = 0; j < message.spoligotype43Blast.length; ++j)
                    object.spoligotype43Blast[j] = message.spoligotype43Blast[j];
            }
            if (message.spoligotype98Blast && message.spoligotype98Blast.length) {
                object.spoligotype98Blast = [];
                for (let j = 0; j < message.spoligotype98Blast.length; ++j)
                    object.spoligotype98Blast[j] = message.spoligotype98Blast[j];
            }
            if (message.spoligotype43Crispr && message.spoligotype43Crispr.length) {
                object.spoligotype43Crispr = [];
                for (let j = 0; j < message.spoligotype43Crispr.length; ++j)
                    object.spoligotype43Crispr[j] = message.spoligotype43Crispr[j];
            }
            if (message.spoligotype98Crispr && message.spoligotype98Crispr.length) {
                object.spoligotype98Crispr = [];
                for (let j = 0; j < message.spoligotype98Crispr.length; ++j)
                    object.spoligotype98Crispr[j] = message.spoligotype98Crispr[j];
            }
            if (message.spoligotype43MatchBlast != null && message.hasOwnProperty("spoligotype43MatchBlast"))
                object.spoligotype43MatchBlast = message.spoligotype43MatchBlast;
            if (message.spoligotype98MatchBlast != null && message.hasOwnProperty("spoligotype98MatchBlast"))
                object.spoligotype98MatchBlast = message.spoligotype98MatchBlast;
            if (message.spoligotypeBloinBlast && message.spoligotypeBloinBlast.length) {
                object.spoligotypeBloinBlast = [];
                for (let j = 0; j < message.spoligotypeBloinBlast.length; ++j)
                    object.spoligotypeBloinBlast[j] = message.spoligotypeBloinBlast[j];
            }
            if (message.crispr && message.crispr.length) {
                object.crispr = [];
                for (let j = 0; j < message.crispr.length; ++j)
                    object.crispr[j] = $root.api.CrisprPart.toObject(message.crispr[j], options);
            }
            if (message.snp && message.snp.length) {
                object.snp = [];
                for (let j = 0; j < message.snp.length; ++j)
                    object.snp[j] = $root.api.Snp.toObject(message.snp[j], options);
            }
            return object;
        };

        /**
         * Converts this StrainResult to JSON.
         * @function toJSON
         * @memberof api.StrainResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StrainResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StrainResult;
    })();

    api.NcbiRun = (function() {

        /**
         * Properties of a NcbiRun.
         * @memberof api
         * @interface INcbiRun
         * @property {string|null} [accession] NcbiRun accession
         * @property {api.INcbiExperiment|null} [experiment] NcbiRun experiment
         * @property {google.protobuf.IStringValue|null} [title] NcbiRun title
         * @property {number|null} [totalBases] NcbiRun totalBases
         * @property {number|null} [totalSpots] NcbiRun totalSpots
         * @property {number|null} [size] NcbiRun size
         * @property {Array.<api.INcbiSample>|null} [samples] NcbiRun samples
         * @property {google.protobuf.ITimestamp|null} [publishedAt] NcbiRun publishedAt
         * @property {number|null} [readsPerSpot] NcbiRun readsPerSpot
         * @property {number|null} [averageReadLength] NcbiRun averageReadLength
         * @property {number|null} [totalReads] NcbiRun totalReads
         * @property {google.protobuf.IStringValue|null} [link] NcbiRun link
         */

        /**
         * Constructs a new NcbiRun.
         * @memberof api
         * @classdesc Represents a NcbiRun.
         * @implements INcbiRun
         * @constructor
         * @param {api.INcbiRun=} [properties] Properties to set
         */
        function NcbiRun(properties) {
            this.samples = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NcbiRun accession.
         * @member {string} accession
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.accession = "";

        /**
         * NcbiRun experiment.
         * @member {api.INcbiExperiment|null|undefined} experiment
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.experiment = null;

        /**
         * NcbiRun title.
         * @member {google.protobuf.IStringValue|null|undefined} title
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.title = null;

        /**
         * NcbiRun totalBases.
         * @member {number} totalBases
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.totalBases = 0;

        /**
         * NcbiRun totalSpots.
         * @member {number} totalSpots
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.totalSpots = 0;

        /**
         * NcbiRun size.
         * @member {number} size
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.size = 0;

        /**
         * NcbiRun samples.
         * @member {Array.<api.INcbiSample>} samples
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.samples = $util.emptyArray;

        /**
         * NcbiRun publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.publishedAt = null;

        /**
         * NcbiRun readsPerSpot.
         * @member {number} readsPerSpot
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.readsPerSpot = 0;

        /**
         * NcbiRun averageReadLength.
         * @member {number} averageReadLength
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.averageReadLength = 0;

        /**
         * NcbiRun totalReads.
         * @member {number} totalReads
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.totalReads = 0;

        /**
         * NcbiRun link.
         * @member {google.protobuf.IStringValue|null|undefined} link
         * @memberof api.NcbiRun
         * @instance
         */
        NcbiRun.prototype.link = null;

        /**
         * Creates a new NcbiRun instance using the specified properties.
         * @function create
         * @memberof api.NcbiRun
         * @static
         * @param {api.INcbiRun=} [properties] Properties to set
         * @returns {api.NcbiRun} NcbiRun instance
         */
        NcbiRun.create = function create(properties) {
            return new NcbiRun(properties);
        };

        /**
         * Encodes the specified NcbiRun message. Does not implicitly {@link api.NcbiRun.verify|verify} messages.
         * @function encode
         * @memberof api.NcbiRun
         * @static
         * @param {api.INcbiRun} message NcbiRun message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NcbiRun.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accession != null && Object.hasOwnProperty.call(message, "accession"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accession);
            if (message.experiment != null && Object.hasOwnProperty.call(message, "experiment"))
                $root.api.NcbiExperiment.encode(message.experiment, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                $root.google.protobuf.StringValue.encode(message.title, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.totalBases != null && Object.hasOwnProperty.call(message, "totalBases"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalBases);
            if (message.totalSpots != null && Object.hasOwnProperty.call(message, "totalSpots"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.totalSpots);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.size);
            if (message.samples != null && message.samples.length)
                for (let i = 0; i < message.samples.length; ++i)
                    $root.api.NcbiSample.encode(message.samples[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.readsPerSpot != null && Object.hasOwnProperty.call(message, "readsPerSpot"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.readsPerSpot);
            if (message.averageReadLength != null && Object.hasOwnProperty.call(message, "averageReadLength"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.averageReadLength);
            if (message.totalReads != null && Object.hasOwnProperty.call(message, "totalReads"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.totalReads);
            if (message.link != null && Object.hasOwnProperty.call(message, "link"))
                $root.google.protobuf.StringValue.encode(message.link, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NcbiRun message, length delimited. Does not implicitly {@link api.NcbiRun.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.NcbiRun
         * @static
         * @param {api.INcbiRun} message NcbiRun message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NcbiRun.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NcbiRun message from the specified reader or buffer.
         * @function decode
         * @memberof api.NcbiRun
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.NcbiRun} NcbiRun
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NcbiRun.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.NcbiRun();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accession = reader.string();
                    break;
                case 2:
                    message.experiment = $root.api.NcbiExperiment.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.title = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.totalBases = reader.int32();
                    break;
                case 5:
                    message.totalSpots = reader.int32();
                    break;
                case 6:
                    message.size = reader.int32();
                    break;
                case 7:
                    if (!(message.samples && message.samples.length))
                        message.samples = [];
                    message.samples.push($root.api.NcbiSample.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.readsPerSpot = reader.int32();
                    break;
                case 10:
                    message.averageReadLength = reader.int32();
                    break;
                case 11:
                    message.totalReads = reader.int32();
                    break;
                case 12:
                    message.link = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NcbiRun message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.NcbiRun
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.NcbiRun} NcbiRun
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NcbiRun.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NcbiRun message.
         * @function verify
         * @memberof api.NcbiRun
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NcbiRun.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accession != null && message.hasOwnProperty("accession"))
                if (!$util.isString(message.accession))
                    return "accession: string expected";
            if (message.experiment != null && message.hasOwnProperty("experiment")) {
                let error = $root.api.NcbiExperiment.verify(message.experiment);
                if (error)
                    return "experiment." + error;
            }
            if (message.title != null && message.hasOwnProperty("title")) {
                let error = $root.google.protobuf.StringValue.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.totalBases != null && message.hasOwnProperty("totalBases"))
                if (!$util.isInteger(message.totalBases))
                    return "totalBases: integer expected";
            if (message.totalSpots != null && message.hasOwnProperty("totalSpots"))
                if (!$util.isInteger(message.totalSpots))
                    return "totalSpots: integer expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.samples != null && message.hasOwnProperty("samples")) {
                if (!Array.isArray(message.samples))
                    return "samples: array expected";
                for (let i = 0; i < message.samples.length; ++i) {
                    let error = $root.api.NcbiSample.verify(message.samples[i]);
                    if (error)
                        return "samples." + error;
                }
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            if (message.readsPerSpot != null && message.hasOwnProperty("readsPerSpot"))
                if (!$util.isInteger(message.readsPerSpot))
                    return "readsPerSpot: integer expected";
            if (message.averageReadLength != null && message.hasOwnProperty("averageReadLength"))
                if (!$util.isInteger(message.averageReadLength))
                    return "averageReadLength: integer expected";
            if (message.totalReads != null && message.hasOwnProperty("totalReads"))
                if (!$util.isInteger(message.totalReads))
                    return "totalReads: integer expected";
            if (message.link != null && message.hasOwnProperty("link")) {
                let error = $root.google.protobuf.StringValue.verify(message.link);
                if (error)
                    return "link." + error;
            }
            return null;
        };

        /**
         * Creates a NcbiRun message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.NcbiRun
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.NcbiRun} NcbiRun
         */
        NcbiRun.fromObject = function fromObject(object) {
            if (object instanceof $root.api.NcbiRun)
                return object;
            let message = new $root.api.NcbiRun();
            if (object.accession != null)
                message.accession = String(object.accession);
            if (object.experiment != null) {
                if (typeof object.experiment !== "object")
                    throw TypeError(".api.NcbiRun.experiment: object expected");
                message.experiment = $root.api.NcbiExperiment.fromObject(object.experiment);
            }
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".api.NcbiRun.title: object expected");
                message.title = $root.google.protobuf.StringValue.fromObject(object.title);
            }
            if (object.totalBases != null)
                message.totalBases = object.totalBases | 0;
            if (object.totalSpots != null)
                message.totalSpots = object.totalSpots | 0;
            if (object.size != null)
                message.size = object.size | 0;
            if (object.samples) {
                if (!Array.isArray(object.samples))
                    throw TypeError(".api.NcbiRun.samples: array expected");
                message.samples = [];
                for (let i = 0; i < object.samples.length; ++i) {
                    if (typeof object.samples[i] !== "object")
                        throw TypeError(".api.NcbiRun.samples: object expected");
                    message.samples[i] = $root.api.NcbiSample.fromObject(object.samples[i]);
                }
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".api.NcbiRun.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            if (object.readsPerSpot != null)
                message.readsPerSpot = object.readsPerSpot | 0;
            if (object.averageReadLength != null)
                message.averageReadLength = object.averageReadLength | 0;
            if (object.totalReads != null)
                message.totalReads = object.totalReads | 0;
            if (object.link != null) {
                if (typeof object.link !== "object")
                    throw TypeError(".api.NcbiRun.link: object expected");
                message.link = $root.google.protobuf.StringValue.fromObject(object.link);
            }
            return message;
        };

        /**
         * Creates a plain object from a NcbiRun message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.NcbiRun
         * @static
         * @param {api.NcbiRun} message NcbiRun
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NcbiRun.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.samples = [];
            if (options.defaults) {
                object.accession = "";
                object.experiment = null;
                object.title = null;
                object.totalBases = 0;
                object.totalSpots = 0;
                object.size = 0;
                object.publishedAt = null;
                object.readsPerSpot = 0;
                object.averageReadLength = 0;
                object.totalReads = 0;
                object.link = null;
            }
            if (message.accession != null && message.hasOwnProperty("accession"))
                object.accession = message.accession;
            if (message.experiment != null && message.hasOwnProperty("experiment"))
                object.experiment = $root.api.NcbiExperiment.toObject(message.experiment, options);
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.google.protobuf.StringValue.toObject(message.title, options);
            if (message.totalBases != null && message.hasOwnProperty("totalBases"))
                object.totalBases = message.totalBases;
            if (message.totalSpots != null && message.hasOwnProperty("totalSpots"))
                object.totalSpots = message.totalSpots;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.samples && message.samples.length) {
                object.samples = [];
                for (let j = 0; j < message.samples.length; ++j)
                    object.samples[j] = $root.api.NcbiSample.toObject(message.samples[j], options);
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            if (message.readsPerSpot != null && message.hasOwnProperty("readsPerSpot"))
                object.readsPerSpot = message.readsPerSpot;
            if (message.averageReadLength != null && message.hasOwnProperty("averageReadLength"))
                object.averageReadLength = message.averageReadLength;
            if (message.totalReads != null && message.hasOwnProperty("totalReads"))
                object.totalReads = message.totalReads;
            if (message.link != null && message.hasOwnProperty("link"))
                object.link = $root.google.protobuf.StringValue.toObject(message.link, options);
            return object;
        };

        /**
         * Converts this NcbiRun to JSON.
         * @function toJSON
         * @memberof api.NcbiRun
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NcbiRun.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NcbiRun;
    })();

    api.NcbiExperiment = (function() {

        /**
         * Properties of a NcbiExperiment.
         * @memberof api
         * @interface INcbiExperiment
         * @property {string|null} [accession] NcbiExperiment accession
         * @property {google.protobuf.IStringValue|null} [centerName] NcbiExperiment centerName
         * @property {google.protobuf.IStringValue|null} [title] NcbiExperiment title
         * @property {api.INcbiStudy|null} [Study] NcbiExperiment Study
         */

        /**
         * Constructs a new NcbiExperiment.
         * @memberof api
         * @classdesc Represents a NcbiExperiment.
         * @implements INcbiExperiment
         * @constructor
         * @param {api.INcbiExperiment=} [properties] Properties to set
         */
        function NcbiExperiment(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NcbiExperiment accession.
         * @member {string} accession
         * @memberof api.NcbiExperiment
         * @instance
         */
        NcbiExperiment.prototype.accession = "";

        /**
         * NcbiExperiment centerName.
         * @member {google.protobuf.IStringValue|null|undefined} centerName
         * @memberof api.NcbiExperiment
         * @instance
         */
        NcbiExperiment.prototype.centerName = null;

        /**
         * NcbiExperiment title.
         * @member {google.protobuf.IStringValue|null|undefined} title
         * @memberof api.NcbiExperiment
         * @instance
         */
        NcbiExperiment.prototype.title = null;

        /**
         * NcbiExperiment Study.
         * @member {api.INcbiStudy|null|undefined} Study
         * @memberof api.NcbiExperiment
         * @instance
         */
        NcbiExperiment.prototype.Study = null;

        /**
         * Creates a new NcbiExperiment instance using the specified properties.
         * @function create
         * @memberof api.NcbiExperiment
         * @static
         * @param {api.INcbiExperiment=} [properties] Properties to set
         * @returns {api.NcbiExperiment} NcbiExperiment instance
         */
        NcbiExperiment.create = function create(properties) {
            return new NcbiExperiment(properties);
        };

        /**
         * Encodes the specified NcbiExperiment message. Does not implicitly {@link api.NcbiExperiment.verify|verify} messages.
         * @function encode
         * @memberof api.NcbiExperiment
         * @static
         * @param {api.INcbiExperiment} message NcbiExperiment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NcbiExperiment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accession != null && Object.hasOwnProperty.call(message, "accession"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accession);
            if (message.centerName != null && Object.hasOwnProperty.call(message, "centerName"))
                $root.google.protobuf.StringValue.encode(message.centerName, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                $root.google.protobuf.StringValue.encode(message.title, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Study != null && Object.hasOwnProperty.call(message, "Study"))
                $root.api.NcbiStudy.encode(message.Study, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NcbiExperiment message, length delimited. Does not implicitly {@link api.NcbiExperiment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.NcbiExperiment
         * @static
         * @param {api.INcbiExperiment} message NcbiExperiment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NcbiExperiment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NcbiExperiment message from the specified reader or buffer.
         * @function decode
         * @memberof api.NcbiExperiment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.NcbiExperiment} NcbiExperiment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NcbiExperiment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.NcbiExperiment();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accession = reader.string();
                    break;
                case 2:
                    message.centerName = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.title = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.Study = $root.api.NcbiStudy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NcbiExperiment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.NcbiExperiment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.NcbiExperiment} NcbiExperiment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NcbiExperiment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NcbiExperiment message.
         * @function verify
         * @memberof api.NcbiExperiment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NcbiExperiment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accession != null && message.hasOwnProperty("accession"))
                if (!$util.isString(message.accession))
                    return "accession: string expected";
            if (message.centerName != null && message.hasOwnProperty("centerName")) {
                let error = $root.google.protobuf.StringValue.verify(message.centerName);
                if (error)
                    return "centerName." + error;
            }
            if (message.title != null && message.hasOwnProperty("title")) {
                let error = $root.google.protobuf.StringValue.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.Study != null && message.hasOwnProperty("Study")) {
                let error = $root.api.NcbiStudy.verify(message.Study);
                if (error)
                    return "Study." + error;
            }
            return null;
        };

        /**
         * Creates a NcbiExperiment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.NcbiExperiment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.NcbiExperiment} NcbiExperiment
         */
        NcbiExperiment.fromObject = function fromObject(object) {
            if (object instanceof $root.api.NcbiExperiment)
                return object;
            let message = new $root.api.NcbiExperiment();
            if (object.accession != null)
                message.accession = String(object.accession);
            if (object.centerName != null) {
                if (typeof object.centerName !== "object")
                    throw TypeError(".api.NcbiExperiment.centerName: object expected");
                message.centerName = $root.google.protobuf.StringValue.fromObject(object.centerName);
            }
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".api.NcbiExperiment.title: object expected");
                message.title = $root.google.protobuf.StringValue.fromObject(object.title);
            }
            if (object.Study != null) {
                if (typeof object.Study !== "object")
                    throw TypeError(".api.NcbiExperiment.Study: object expected");
                message.Study = $root.api.NcbiStudy.fromObject(object.Study);
            }
            return message;
        };

        /**
         * Creates a plain object from a NcbiExperiment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.NcbiExperiment
         * @static
         * @param {api.NcbiExperiment} message NcbiExperiment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NcbiExperiment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.accession = "";
                object.centerName = null;
                object.title = null;
                object.Study = null;
            }
            if (message.accession != null && message.hasOwnProperty("accession"))
                object.accession = message.accession;
            if (message.centerName != null && message.hasOwnProperty("centerName"))
                object.centerName = $root.google.protobuf.StringValue.toObject(message.centerName, options);
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.google.protobuf.StringValue.toObject(message.title, options);
            if (message.Study != null && message.hasOwnProperty("Study"))
                object.Study = $root.api.NcbiStudy.toObject(message.Study, options);
            return object;
        };

        /**
         * Converts this NcbiExperiment to JSON.
         * @function toJSON
         * @memberof api.NcbiExperiment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NcbiExperiment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NcbiExperiment;
    })();

    api.NcbiStudy = (function() {

        /**
         * Properties of a NcbiStudy.
         * @memberof api
         * @interface INcbiStudy
         * @property {string|null} [accession] NcbiStudy accession
         * @property {google.protobuf.IStringValue|null} [alias] NcbiStudy alias
         * @property {google.protobuf.IStringValue|null} [centerName] NcbiStudy centerName
         * @property {google.protobuf.IStringValue|null} [title] NcbiStudy title
         * @property {google.protobuf.IStringValue|null} [abstract] NcbiStudy abstract
         * @property {google.protobuf.IStringValue|null} [projectName] NcbiStudy projectName
         */

        /**
         * Constructs a new NcbiStudy.
         * @memberof api
         * @classdesc Represents a NcbiStudy.
         * @implements INcbiStudy
         * @constructor
         * @param {api.INcbiStudy=} [properties] Properties to set
         */
        function NcbiStudy(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NcbiStudy accession.
         * @member {string} accession
         * @memberof api.NcbiStudy
         * @instance
         */
        NcbiStudy.prototype.accession = "";

        /**
         * NcbiStudy alias.
         * @member {google.protobuf.IStringValue|null|undefined} alias
         * @memberof api.NcbiStudy
         * @instance
         */
        NcbiStudy.prototype.alias = null;

        /**
         * NcbiStudy centerName.
         * @member {google.protobuf.IStringValue|null|undefined} centerName
         * @memberof api.NcbiStudy
         * @instance
         */
        NcbiStudy.prototype.centerName = null;

        /**
         * NcbiStudy title.
         * @member {google.protobuf.IStringValue|null|undefined} title
         * @memberof api.NcbiStudy
         * @instance
         */
        NcbiStudy.prototype.title = null;

        /**
         * NcbiStudy abstract.
         * @member {google.protobuf.IStringValue|null|undefined} abstract
         * @memberof api.NcbiStudy
         * @instance
         */
        NcbiStudy.prototype.abstract = null;

        /**
         * NcbiStudy projectName.
         * @member {google.protobuf.IStringValue|null|undefined} projectName
         * @memberof api.NcbiStudy
         * @instance
         */
        NcbiStudy.prototype.projectName = null;

        /**
         * Creates a new NcbiStudy instance using the specified properties.
         * @function create
         * @memberof api.NcbiStudy
         * @static
         * @param {api.INcbiStudy=} [properties] Properties to set
         * @returns {api.NcbiStudy} NcbiStudy instance
         */
        NcbiStudy.create = function create(properties) {
            return new NcbiStudy(properties);
        };

        /**
         * Encodes the specified NcbiStudy message. Does not implicitly {@link api.NcbiStudy.verify|verify} messages.
         * @function encode
         * @memberof api.NcbiStudy
         * @static
         * @param {api.INcbiStudy} message NcbiStudy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NcbiStudy.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accession != null && Object.hasOwnProperty.call(message, "accession"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accession);
            if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                $root.google.protobuf.StringValue.encode(message.alias, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.centerName != null && Object.hasOwnProperty.call(message, "centerName"))
                $root.google.protobuf.StringValue.encode(message.centerName, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                $root.google.protobuf.StringValue.encode(message.title, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.abstract != null && Object.hasOwnProperty.call(message, "abstract"))
                $root.google.protobuf.StringValue.encode(message.abstract, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.projectName != null && Object.hasOwnProperty.call(message, "projectName"))
                $root.google.protobuf.StringValue.encode(message.projectName, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NcbiStudy message, length delimited. Does not implicitly {@link api.NcbiStudy.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.NcbiStudy
         * @static
         * @param {api.INcbiStudy} message NcbiStudy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NcbiStudy.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NcbiStudy message from the specified reader or buffer.
         * @function decode
         * @memberof api.NcbiStudy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.NcbiStudy} NcbiStudy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NcbiStudy.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.NcbiStudy();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accession = reader.string();
                    break;
                case 2:
                    message.alias = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.centerName = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.title = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.abstract = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.projectName = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NcbiStudy message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.NcbiStudy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.NcbiStudy} NcbiStudy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NcbiStudy.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NcbiStudy message.
         * @function verify
         * @memberof api.NcbiStudy
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NcbiStudy.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accession != null && message.hasOwnProperty("accession"))
                if (!$util.isString(message.accession))
                    return "accession: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                let error = $root.google.protobuf.StringValue.verify(message.alias);
                if (error)
                    return "alias." + error;
            }
            if (message.centerName != null && message.hasOwnProperty("centerName")) {
                let error = $root.google.protobuf.StringValue.verify(message.centerName);
                if (error)
                    return "centerName." + error;
            }
            if (message.title != null && message.hasOwnProperty("title")) {
                let error = $root.google.protobuf.StringValue.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.abstract != null && message.hasOwnProperty("abstract")) {
                let error = $root.google.protobuf.StringValue.verify(message.abstract);
                if (error)
                    return "abstract." + error;
            }
            if (message.projectName != null && message.hasOwnProperty("projectName")) {
                let error = $root.google.protobuf.StringValue.verify(message.projectName);
                if (error)
                    return "projectName." + error;
            }
            return null;
        };

        /**
         * Creates a NcbiStudy message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.NcbiStudy
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.NcbiStudy} NcbiStudy
         */
        NcbiStudy.fromObject = function fromObject(object) {
            if (object instanceof $root.api.NcbiStudy)
                return object;
            let message = new $root.api.NcbiStudy();
            if (object.accession != null)
                message.accession = String(object.accession);
            if (object.alias != null) {
                if (typeof object.alias !== "object")
                    throw TypeError(".api.NcbiStudy.alias: object expected");
                message.alias = $root.google.protobuf.StringValue.fromObject(object.alias);
            }
            if (object.centerName != null) {
                if (typeof object.centerName !== "object")
                    throw TypeError(".api.NcbiStudy.centerName: object expected");
                message.centerName = $root.google.protobuf.StringValue.fromObject(object.centerName);
            }
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".api.NcbiStudy.title: object expected");
                message.title = $root.google.protobuf.StringValue.fromObject(object.title);
            }
            if (object.abstract != null) {
                if (typeof object.abstract !== "object")
                    throw TypeError(".api.NcbiStudy.abstract: object expected");
                message.abstract = $root.google.protobuf.StringValue.fromObject(object.abstract);
            }
            if (object.projectName != null) {
                if (typeof object.projectName !== "object")
                    throw TypeError(".api.NcbiStudy.projectName: object expected");
                message.projectName = $root.google.protobuf.StringValue.fromObject(object.projectName);
            }
            return message;
        };

        /**
         * Creates a plain object from a NcbiStudy message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.NcbiStudy
         * @static
         * @param {api.NcbiStudy} message NcbiStudy
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NcbiStudy.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.accession = "";
                object.alias = null;
                object.centerName = null;
                object.title = null;
                object.abstract = null;
                object.projectName = null;
            }
            if (message.accession != null && message.hasOwnProperty("accession"))
                object.accession = message.accession;
            if (message.alias != null && message.hasOwnProperty("alias"))
                object.alias = $root.google.protobuf.StringValue.toObject(message.alias, options);
            if (message.centerName != null && message.hasOwnProperty("centerName"))
                object.centerName = $root.google.protobuf.StringValue.toObject(message.centerName, options);
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.google.protobuf.StringValue.toObject(message.title, options);
            if (message.abstract != null && message.hasOwnProperty("abstract"))
                object.abstract = $root.google.protobuf.StringValue.toObject(message.abstract, options);
            if (message.projectName != null && message.hasOwnProperty("projectName"))
                object.projectName = $root.google.protobuf.StringValue.toObject(message.projectName, options);
            return object;
        };

        /**
         * Converts this NcbiStudy to JSON.
         * @function toJSON
         * @memberof api.NcbiStudy
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NcbiStudy.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NcbiStudy;
    })();

    api.NcbiSample = (function() {

        /**
         * Properties of a NcbiSample.
         * @memberof api
         * @interface INcbiSample
         * @property {string|null} [accession] NcbiSample accession
         * @property {google.protobuf.IStringValue|null} [title] NcbiSample title
         * @property {google.protobuf.IStringValue|null} [taxonId] NcbiSample taxonId
         * @property {google.protobuf.IStringValue|null} [scientificName] NcbiSample scientificName
         * @property {google.protobuf.ITimestamp|null} [collectedAt] NcbiSample collectedAt
         * @property {google.protobuf.IStringValue|null} [strain] NcbiSample strain
         * @property {google.protobuf.IStringValue|null} [location] NcbiSample location
         */

        /**
         * Constructs a new NcbiSample.
         * @memberof api
         * @classdesc Represents a NcbiSample.
         * @implements INcbiSample
         * @constructor
         * @param {api.INcbiSample=} [properties] Properties to set
         */
        function NcbiSample(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NcbiSample accession.
         * @member {string} accession
         * @memberof api.NcbiSample
         * @instance
         */
        NcbiSample.prototype.accession = "";

        /**
         * NcbiSample title.
         * @member {google.protobuf.IStringValue|null|undefined} title
         * @memberof api.NcbiSample
         * @instance
         */
        NcbiSample.prototype.title = null;

        /**
         * NcbiSample taxonId.
         * @member {google.protobuf.IStringValue|null|undefined} taxonId
         * @memberof api.NcbiSample
         * @instance
         */
        NcbiSample.prototype.taxonId = null;

        /**
         * NcbiSample scientificName.
         * @member {google.protobuf.IStringValue|null|undefined} scientificName
         * @memberof api.NcbiSample
         * @instance
         */
        NcbiSample.prototype.scientificName = null;

        /**
         * NcbiSample collectedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} collectedAt
         * @memberof api.NcbiSample
         * @instance
         */
        NcbiSample.prototype.collectedAt = null;

        /**
         * NcbiSample strain.
         * @member {google.protobuf.IStringValue|null|undefined} strain
         * @memberof api.NcbiSample
         * @instance
         */
        NcbiSample.prototype.strain = null;

        /**
         * NcbiSample location.
         * @member {google.protobuf.IStringValue|null|undefined} location
         * @memberof api.NcbiSample
         * @instance
         */
        NcbiSample.prototype.location = null;

        /**
         * Creates a new NcbiSample instance using the specified properties.
         * @function create
         * @memberof api.NcbiSample
         * @static
         * @param {api.INcbiSample=} [properties] Properties to set
         * @returns {api.NcbiSample} NcbiSample instance
         */
        NcbiSample.create = function create(properties) {
            return new NcbiSample(properties);
        };

        /**
         * Encodes the specified NcbiSample message. Does not implicitly {@link api.NcbiSample.verify|verify} messages.
         * @function encode
         * @memberof api.NcbiSample
         * @static
         * @param {api.INcbiSample} message NcbiSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NcbiSample.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accession != null && Object.hasOwnProperty.call(message, "accession"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accession);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                $root.google.protobuf.StringValue.encode(message.title, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.taxonId != null && Object.hasOwnProperty.call(message, "taxonId"))
                $root.google.protobuf.StringValue.encode(message.taxonId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.scientificName != null && Object.hasOwnProperty.call(message, "scientificName"))
                $root.google.protobuf.StringValue.encode(message.scientificName, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.collectedAt != null && Object.hasOwnProperty.call(message, "collectedAt"))
                $root.google.protobuf.Timestamp.encode(message.collectedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.strain != null && Object.hasOwnProperty.call(message, "strain"))
                $root.google.protobuf.StringValue.encode(message.strain, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                $root.google.protobuf.StringValue.encode(message.location, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NcbiSample message, length delimited. Does not implicitly {@link api.NcbiSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.NcbiSample
         * @static
         * @param {api.INcbiSample} message NcbiSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NcbiSample.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NcbiSample message from the specified reader or buffer.
         * @function decode
         * @memberof api.NcbiSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.NcbiSample} NcbiSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NcbiSample.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.NcbiSample();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accession = reader.string();
                    break;
                case 2:
                    message.title = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.taxonId = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.scientificName = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.collectedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.strain = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.location = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NcbiSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.NcbiSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.NcbiSample} NcbiSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NcbiSample.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NcbiSample message.
         * @function verify
         * @memberof api.NcbiSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NcbiSample.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accession != null && message.hasOwnProperty("accession"))
                if (!$util.isString(message.accession))
                    return "accession: string expected";
            if (message.title != null && message.hasOwnProperty("title")) {
                let error = $root.google.protobuf.StringValue.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.taxonId != null && message.hasOwnProperty("taxonId")) {
                let error = $root.google.protobuf.StringValue.verify(message.taxonId);
                if (error)
                    return "taxonId." + error;
            }
            if (message.scientificName != null && message.hasOwnProperty("scientificName")) {
                let error = $root.google.protobuf.StringValue.verify(message.scientificName);
                if (error)
                    return "scientificName." + error;
            }
            if (message.collectedAt != null && message.hasOwnProperty("collectedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.collectedAt);
                if (error)
                    return "collectedAt." + error;
            }
            if (message.strain != null && message.hasOwnProperty("strain")) {
                let error = $root.google.protobuf.StringValue.verify(message.strain);
                if (error)
                    return "strain." + error;
            }
            if (message.location != null && message.hasOwnProperty("location")) {
                let error = $root.google.protobuf.StringValue.verify(message.location);
                if (error)
                    return "location." + error;
            }
            return null;
        };

        /**
         * Creates a NcbiSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.NcbiSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.NcbiSample} NcbiSample
         */
        NcbiSample.fromObject = function fromObject(object) {
            if (object instanceof $root.api.NcbiSample)
                return object;
            let message = new $root.api.NcbiSample();
            if (object.accession != null)
                message.accession = String(object.accession);
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".api.NcbiSample.title: object expected");
                message.title = $root.google.protobuf.StringValue.fromObject(object.title);
            }
            if (object.taxonId != null) {
                if (typeof object.taxonId !== "object")
                    throw TypeError(".api.NcbiSample.taxonId: object expected");
                message.taxonId = $root.google.protobuf.StringValue.fromObject(object.taxonId);
            }
            if (object.scientificName != null) {
                if (typeof object.scientificName !== "object")
                    throw TypeError(".api.NcbiSample.scientificName: object expected");
                message.scientificName = $root.google.protobuf.StringValue.fromObject(object.scientificName);
            }
            if (object.collectedAt != null) {
                if (typeof object.collectedAt !== "object")
                    throw TypeError(".api.NcbiSample.collectedAt: object expected");
                message.collectedAt = $root.google.protobuf.Timestamp.fromObject(object.collectedAt);
            }
            if (object.strain != null) {
                if (typeof object.strain !== "object")
                    throw TypeError(".api.NcbiSample.strain: object expected");
                message.strain = $root.google.protobuf.StringValue.fromObject(object.strain);
            }
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".api.NcbiSample.location: object expected");
                message.location = $root.google.protobuf.StringValue.fromObject(object.location);
            }
            return message;
        };

        /**
         * Creates a plain object from a NcbiSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.NcbiSample
         * @static
         * @param {api.NcbiSample} message NcbiSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NcbiSample.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.accession = "";
                object.title = null;
                object.taxonId = null;
                object.scientificName = null;
                object.collectedAt = null;
                object.strain = null;
                object.location = null;
            }
            if (message.accession != null && message.hasOwnProperty("accession"))
                object.accession = message.accession;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.google.protobuf.StringValue.toObject(message.title, options);
            if (message.taxonId != null && message.hasOwnProperty("taxonId"))
                object.taxonId = $root.google.protobuf.StringValue.toObject(message.taxonId, options);
            if (message.scientificName != null && message.hasOwnProperty("scientificName"))
                object.scientificName = $root.google.protobuf.StringValue.toObject(message.scientificName, options);
            if (message.collectedAt != null && message.hasOwnProperty("collectedAt"))
                object.collectedAt = $root.google.protobuf.Timestamp.toObject(message.collectedAt, options);
            if (message.strain != null && message.hasOwnProperty("strain"))
                object.strain = $root.google.protobuf.StringValue.toObject(message.strain, options);
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.google.protobuf.StringValue.toObject(message.location, options);
            return object;
        };

        /**
         * Converts this NcbiSample to JSON.
         * @function toJSON
         * @memberof api.NcbiSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NcbiSample.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NcbiSample;
    })();

    return api;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

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
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
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
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
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
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
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
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
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
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
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
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
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

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                let message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                let message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                let message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                let message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                let message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                let message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                let message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                let message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                let message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
