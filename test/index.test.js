var should = require('chai').should()
  , whilst = require('../src').while
  , doWhile = require('../src').doWhile
  , doUntil = require('../src').doUntil
  , until = require('../src').until

function delay (fn) {
	var args = [].slice.call(arguments, 1)
	setTimeout(function () {
		fn.apply(null, args)
	}, Math.round(Math.random() * 10))
}

describe('while', function () {
	it('should iterate for every tiem the test passes', function (done) {
		var call_order = []
		var count = 0

		whilst(
			function () {
				call_order.push(['test', count])
				return (count < 5)
			},
			function (cb) {
				call_order.push(['iterator', count++])
				delay(cb)
			},
			function (err) {
				should.not.exist(err)
				call_order.should.deep.equal([
					['test', 0], ['iterator', 0], 
					['test', 1], ['iterator', 1], 
					['test', 2], ['iterator', 2],
					['test', 3], ['iterator', 3], 
					['test', 4], ['iterator', 4], 
					['test', 5],
				])
				count.should.equal(5)
				done()
			}
		)
	})

	it('should stop as soon as there is an error', function (done) {
		whilst(
			function () {
				return true
			},
			function (cb) {
				delay(cb, 'error')
			},
			function (err) {
				err.should.equal('error')
				done()
			}
		)
	})
})

describe('doWhilst', function () {
	it('should iterate until the test fails', function (done) {
		var call_order = []
		var count = 0

		doWhile(
			function (cb) {
				call_order.push(['iterator', count++])
				delay(cb, null, count < 5)
			},
			function (err) {
				should.not.exist(err)
				call_order.should.deep.equal([
					['iterator', 0],
					['iterator', 1],
					['iterator', 2],
					['iterator', 3],
					['iterator', 4],
				])
				count.should.equal(5)
				done()
			}
		)
	})

	it('should stop as soon as there is an error', function (done) {
		doWhile(
			function (cb) {
				delay(cb, 'error', true)
			},
			function (err) {
				err.should.equal('error')
				done()
			}
		)
	})
})

describe('until', function () {
	it('should iterate for each time the test fails', function (done) {
		var call_order = [];
		var count = 0

		until(
			function () {
				call_order.push(['test', count]);
				return (count === 5)
			},
			function (cb) {
				call_order.push(['iterator', count++]);
				delay(cb)
			},
			function (err) {
				call_order.should.deep.equal([
					['test', 0], ['iterator', 0], 
					['test', 1], ['iterator', 1], 
					['test', 2], ['iterator', 2],
					['test', 3], ['iterator', 3], 
					['test', 4], ['iterator', 4], 
					['test', 5],
				])
				count.should.equal(5)
				done()
			}
		)
	})
})

describe('doUntil', function () {
	it('should iterate until the test passes', function (done) {
		var call_order = []
		var count = 0

		doUntil(
			function (cb) {
				call_order.push(['iterator', count++])
				delay(cb, null, count == 5)
			},
			function (err) {
				should.not.exist(err)
				call_order.should.deep.equal([
					['iterator', 0],
					['iterator', 1],
					['iterator', 2],
					['iterator', 3],
					['iterator', 4],
				])
				count.should.equal(5)
				done()
			}
		)
	})
})