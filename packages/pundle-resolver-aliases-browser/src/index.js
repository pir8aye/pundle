// Copied from https://github.com/substack/node-browserify/blob/master/lib/builtins.js
/* eslint-disable no-underscore-dangle */

exports.assert = require.resolve('assert/')
exports.buffer = require.resolve('buffer/')
exports.console = require.resolve('console-browserify')
exports.constants = require.resolve('constants-browserify')
exports.crypto = require.resolve('crypto-browserify')
exports.domain = require.resolve('domain-browser')
exports.events = require.resolve('events/')
exports.fs = require.resolve('./_empty.js')
exports.http = require.resolve('stream-http')
exports.https = require.resolve('https-browserify')
exports.os = require.resolve('os-browserify/browser.js')
exports.path = require.resolve('path-browserify')
exports.punycode = require.resolve('punycode/')
exports.querystring = require.resolve('querystring-es3/')
exports.stream = require.resolve('stream-browserify')
exports._stream_duplex = require.resolve('readable-stream/duplex.js')
exports._stream_passthrough = require.resolve('readable-stream/passthrough.js')
exports._stream_readable = require.resolve('readable-stream/readable.js')
exports._stream_transform = require.resolve('readable-stream/transform.js')
exports._stream_writable = require.resolve('readable-stream/writable.js')
exports.string_decoder = require.resolve('string_decoder/')
exports.sys = require.resolve('util/util.js')
exports.timers = require.resolve('timers-browserify-full')
exports.tty = require.resolve('tty-browserify')
exports.url = require.resolve('url/')
exports.util = require.resolve('util/util.js')
exports.vm = require.resolve('vm-browserify')
exports.zlib = require.resolve('browserify-zlib')
exports._process = require.resolve('process/browser')
