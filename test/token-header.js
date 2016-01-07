'use strict'

var Lab = require('lab')
var lab = exports.lab = Lab.script()
var suite = lab.suite
var test = lab.test
var before = lab.before

var Util = require('./util.js')

suite('token header suite tests', function () {
  before({}, function (done) {
    Util.init(function (err, agentData) {
      done(err)
    })
  })

  test('match test', function (done) {
    done()
  })
})
