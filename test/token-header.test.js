'use strict'

var Lab = require('lab')
var lab = exports.lab = Lab.script()
var suite = lab.suite
var test = lab.test

var Code = require('code')
var expect = Code.expect

suite('token-header suite set token tests', function () {
  test('simple test', function (done) {
    var si = require('seneca')()

    si.use(require('..'))
    si.fixedargs.res$ = {
      set: function (tokenkey, token) {
        expect(tokenkey).to.be.equal('X-Auth-Token')
        expect(token).to.be.equal('token_value')

        si.close()
        done()
      }
    }
    si.act('role: auth, set: token', {token: 'token_value'}, function () {
    })
  })

  test('custom token test', function (done) {
    var si = require('seneca')()

    si.use(require('..'))
    si.fixedargs.res$ = {
      set: function (tokenkey, token) {
        expect(tokenkey).to.be.equal('token_key')
        expect(token).to.be.equal('token_value')

        si.close()
        done()
      }
    }
    si.act('role: auth, set: token', {tokenkey: 'token_key', token: 'token_value'}, function () {
    })
  })

  test('custom token in options test', function (done) {
    var si = require('seneca')()

    si.use(require('..'), {tokenkey: 'token_key'})
    si.fixedargs.res$ = {
      set: function (tokenkey, token) {
        expect(tokenkey).to.be.equal('token_key')
        expect(token).to.be.equal('token_value')

        si.close()
        done()
      }
    }
    si.act('role: auth, set: token', {token: 'token_value'}, function () {
    })
  })
})


suite('token-header suite get token tests', function () {
  test('simple test', function (done) {
    var si = require('seneca')()

    si.use(require('..'))
    si.fixedargs.req$ = {
      get: function (tokenkey) {
        return 'token_value'
      }
    }
    si.act('role: auth, get: token', {token: 'token_value'}, function (err, token) {
      expect(err).to.be.null()
      expect(token).to.be.deep.equal({ token: 'token_value' })
      done()
    })
  })

  test('custom token test', function (done) {
    var si = require('seneca')()

    si.use(require('..'))
    si.fixedargs.req$ = {
      get: function (tokenkey) {
        return 'token_value'
      }
    }
    si.act('role: auth, get: token', {tokenkey: 'tokenkey', token: 'token_value'}, function (err, token) {
      expect(err).to.be.null()
      expect(token).to.be.deep.equal({ token: 'token_value' })
      done()
    })
  })

  test('custom token in options test', function (done) {
    var si = require('seneca')()

    si.use(require('..'), {tokenkey: 'token_key'})
    si.fixedargs.req$ = {
      get: function (tokenkey) {
        return 'token_value'
      }
    }
    si.act('role: auth, get: token', {token: 'token_value'}, function (err, token) {
      expect(err).to.be.null()
      expect(token).to.be.deep.equal({ token: 'token_value' })
      done()
    })
  })
})
