# async-loop

a low level set of looping constructs for async operations. The api of these functions are identical to those from [coalan/async](https://github.com/caolan/async) except here the 3rd argument is always optional, so if this documentation is to brief look their. I wrote this project because I think coalan/async is generally to broad and is falling out of maintanance.

## Getting Started

With component(1) 

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
  - [whilst()](#whilst)
  - [doWhilst()](#dowhilst)
  - [until()](#until)
  - [doUntil()](#dountil)

## whilst()

  Execute a callback for each time the test passes. Then call the 3rd callback
  if one is provided. Any errors handled within the iterator will cause the loop
  to halt immediatly and the 3rd argument will be called.
  
```js
whilst(
  function () { return true },
  function (done) {
    checkTwitter()
    setTimeout(done, 100000)
  }
)
```

## doWhilst()

  Like while except the iterator the order of the test and the iterator is switched.
  Therefore, the iterator will allways be called at least once

## until()

  Like while except the process is only run if the test fails. As soon as it 
  passes looping stops and the final callback is called as per whiel

## doUntil()

  Like doWhile except the order of process and test is switched. That means the 
  process is always run at least once.

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
