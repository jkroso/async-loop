exports.while = whilst
exports.doWhile = doWhilst
exports.until = until
exports.doUntil = doUntil

/**
 * Execute a callback for each time the test passes. Then call the 3rd callback
 * if one is provided. Any errors handled within the iterator will cause the loop
 * to halt immediatly and the 3rd argument will be called.
 *
 *   whilst(
 *     function () { return true },
 *     function (done) {
 *       checkTwitter()
 *       setTimeout(done, 100000)
 *     }
 *   )
 *
 * @param {Function} test, should return a boolean to pass or fail the test
 * @param {Function} iterator, this is the body of the loop
 * @param {Function} [done] called once either the test fails or an error is handled
 */

function whilst (test, iterator, done) {
	if (test()) 
		iterator(function (err) {
			if (err) done && done(err)
			else whilst(test, iterator, done)
		})
	else 
		done && done()
}

/**
 * Like while except the iterator the order of the test and the iterator is switched.
 * Therefore, the iterator will allways be called at least once
 * 
 * @see while
 */

function doWhilst (iterator, test, done) {
	iterator(function (err) {
		if (test())
			doWhilst(iterator, test, done)
		else 
			done && done()
	})
}

/**
 * Like while except the process is only run if the test fails. As soon as it 
 * passes looping stops and the final callback is called as per whiel
 * 
 * @see while
 */

function until (test, iterator, done) {
	if (!test())
		iterator(function (err) {
			if (err) done && done(err)
			else until(test, iterator, done)
		})
	else
		done && done()
}

/**
 * Like doWhile except the order of process and test is switched. That means the 
 * process is always run at least once.
 *
 * @see doWhile
 */

function doUntil (iterator, test, done) {
	iterator(function (err) {
		if (err) 
			done && done(err)
		else if (!test()) 
			doUntil(iterator, test, done)
		else
			done && done()
	})
}