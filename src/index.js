exports.while = whilst
exports.doWhile = doWhilst

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

function whilst (test, iterator, done) {
	!function next(err) {
		if (err) done && done(err)
		else if (test()) iterator(next)
		else done && done()
	}()
}

/**
 * Like while except the order of the test and the iterator is switched.
 * Therefore, the iterator will allways be called at least once
 * @see whilst
 */

function doWhilst (iterator, done) {
	iterator(function next(err, cont) {
		if (err) done && done(err)
		else if (cont) iterator(next)
		else done && done()
	})
}

// Create compliments
exports.until = eval(('('+whilst+')').replace('test()', '!test()'))
exports.doUntil = eval(('('+doWhilst+')').replace('(c', '(!c'))
