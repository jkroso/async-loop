# async-loop

a low level set of looping constructs for async operations.

## Getting Started

With component  

`component install jkroso/async-loop`

In Node.js  

`npm install jkroso/async-loop`

## API

```javascript
var whilst = require('async-loop').while
var doWhile = require('async-loop').doWhile
var doUntil = require('async-loop').doUntil
var until = require('async-loop').until
```
  - [exports.while()](#exportswhiletestfunctioniteratorfunctiondonefunction)
  - [exports.doWhile()](#exportsdowhileiteratorfunctiondonefunction)

## exports.while(test,:Function, iterator:Function, [done]:Function)

  Execute a callback for each time the test passes. Any 
  errors handled within the iterator will cause the loop
  to halt immediatly and `done` to be called.
  
```js
whilst(
  function () { return true },
  function (done) {
    checkTwitter()
    setTimeout(done, 100000)
  }
)
```

## exports.doWhile(iterator:Function, [done]:Function)

  Like while except the test is checked after execution. In this
  case there is no need for the `test` to be a seperate function
  so you do that inside your normal body then pass the result to 
  the callback.
  
```js
doWhilst(function(next){
  // do work
  next(null, true) // pass true to loop again
})
```


## compliment functions

All functions mentioned in the api section have compliments wherin the test conditions are flipped. You may find these make your code more readable.

- whilst -> until
- doWhilst -> doUntil

## Contributing
As with all my work this is both a work in progress and a thought in progress. Feel free to chip in in any way you can.

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Jakeb Rosoman

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
