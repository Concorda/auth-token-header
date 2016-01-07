'use strict'

var _ = require('lodash')
var Default_options = require('./default-options.js')

module.exports = function (options) {
  var seneca = this

  options = _.extend({}, Default_options, options || {})

  function setToken (msg, done) {
    var tokenkey = msg.tokenkey || options.tokenkey
    var token = msg.token
    var res = this.fixedargs.res$

    res.set(tokenkey, token)
    done(null, {token: token})
  }

  function getToken (msg, done) {
    var tokenkey = msg.tokenkey || options.tokenkey
    var req = this.fixedargs.req$
    done(null, {token: req.get(tokenkey)})
  }

  seneca.add({role: 'auth', set: 'token'}, setToken)
  seneca.add({role: 'auth', get: 'token'}, getToken)
}
