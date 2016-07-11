//var acceptor = require('./acceptors/ws-acceptor');
var acceptor = require('./acceptors/tcp-acceptor');

module.exports.create = function(opts, cb) {
  return acceptor.create(opts, cb);
};
