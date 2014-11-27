/**
* This is a file where you can define various routes globally. It's better than
* defining those in server.js, but ideally you should be defining routes as part of
* modules. @see example "hello" module to get a taste of how this works.
*/

// Third party libraries
var express = require('express')
  , exports = module.exports = express()
  , app = exports;

// Local includes
var modHello = require('./hello');
var modSignUp = require('./sign_up');
var modInvoice = require('./invoice');

/** Global ROUTES **/
// app.get('/globalhello', modHello.callbacks.sayHello);

