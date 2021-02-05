/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var graph_pb = require('./graph_pb.js')

var search_pb = require('./search_pb.js')
const proto = {};
proto.api = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.ApiClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.ApiPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.HelloRequest,
 *   !proto.api.HelloReply>}
 */
const methodDescriptor_Api_SayHello = new grpc.web.MethodDescriptor(
  '/api.Api/SayHello',
  grpc.web.MethodType.UNARY,
  proto.api.HelloRequest,
  proto.api.HelloReply,
  /**
   * @param {!proto.api.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.HelloRequest,
 *   !proto.api.HelloReply>}
 */
const methodInfo_Api_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.HelloReply,
  /**
   * @param {!proto.api.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.HelloReply.deserializeBinary
);


/**
 * @param {!proto.api.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Api/SayHello',
      request,
      metadata || {},
      methodDescriptor_Api_SayHello,
      callback);
};


/**
 * @param {!proto.api.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.HelloReply>}
 *     Promise that resolves to the response
 */
proto.api.ApiPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Api/SayHello',
      request,
      metadata || {},
      methodDescriptor_Api_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.SearchRequest,
 *   !proto.api.SearchReply>}
 */
const methodDescriptor_Api_Search = new grpc.web.MethodDescriptor(
  '/api.Api/Search',
  grpc.web.MethodType.UNARY,
  proto.api.SearchRequest,
  proto.api.SearchReply,
  /**
   * @param {!proto.api.SearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.SearchReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.SearchRequest,
 *   !proto.api.SearchReply>}
 */
const methodInfo_Api_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.SearchReply,
  /**
   * @param {!proto.api.SearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.SearchReply.deserializeBinary
);


/**
 * @param {!proto.api.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.SearchReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.SearchReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Api/Search',
      request,
      metadata || {},
      methodDescriptor_Api_Search,
      callback);
};


/**
 * @param {!proto.api.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.SearchReply>}
 *     Promise that resolves to the response
 */
proto.api.ApiPromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Api/Search',
      request,
      metadata || {},
      methodDescriptor_Api_Search);
};


module.exports = proto.api;

