"use strict";

var _ = require( 'lodash' )
var default_options = require( './default-options.js' )

module.exports = function ( options ) {

  var seneca = this

  options = _.extend( {}, default_options, options || {} )

  function setToken( args, cb ) {
    var tokenkey = args.tokenkey || options.tokenkey
    var token = args.token
    var res = this.fixedargs.res$

    res.set( tokenkey, token )

    cb( null, {token: token} )
  }

  function getToken( args, cb ) {
    var tokenkey = args.tokenkey || options.tokenkey
    var req = this.fixedargs.req$
    cb( null, {token: req.get( tokenkey )} )
  }

  seneca.add( {role: 'auth', set: 'token'}, setToken )
  seneca.add( {role: 'auth', get: 'token'}, getToken )

}
