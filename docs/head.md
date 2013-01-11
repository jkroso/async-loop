# async-loop

a low level set of looping constructs for async operations. The api of these functions are identical to those from [coalan/async](https://github.com/caolan/async) except here the 3rd argument is always optional, so if this documentation is too brief look their. I wrote this project because I think coalan/async is generally to broad and is falling out of maintanance. I generally only use one or two functions from it at a time.

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
