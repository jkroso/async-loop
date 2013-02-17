/**
 * Execute a callback for each time the test passes. Any 
 * errors handled within the iterator will cause the loop
 * to halt immediatly and `done` to be called.
 *
 *   whilst(
 *     function () { return true },
 *     function (done) {
 *       checkTwitter()
 *       setTimeout(done, 100000)
 *     }
 *   )
 *
 * @param {Function} test, should return a boolean
 * @param {Function} iterator
 * @param {Function} [done]
 */

exports.while = function(test, iterator, done) {
	!function next(err) {
		if (err) done && done(err)
		else if (test()) iterator(next)
		else done && done()
	}()
}

/**
 * Like while except the test is checked after execution. In this
 * case there is no need for the `test` to be a seperate function
 * so you do that inside your normal body then pass the result to 
 * the callback.
 *
 *   doWhilst(function(next){
 *     // do work
 *     next(null, true) // pass true to loop again
 *   })
 *
 * @param {Function} iterator
 * @param {Function} [done]
 */

exports.doWhile = function(iterator, done) {
	iterator(function next(err, cont) {
		if (err) done && done(err)
		else if (cont) iterator(next)
		else done && done()
	})
}

// Create compliments
exports.until = eval(('('+exports.while+')').replace('test()', '!test()'))
exports.doUntil = eval(('('+exports.doWhile+')').replace('(c', '(!c'))
