// Third-party libraries
var _ = require('underscore')
  , express = require('express')
  , exports = module.exports = express()
  , app = exports;

// Don't just use, but also export in case another module needs to use these as well.
exports.callbacks    = require('./controllers/generate');
// exports.models       = require('./models'); 

app.set('view options', {
  layout: false
});
app.set('view engine', 'jade');

app.get('/:id', exports.callbacks.getForm);
app.post('/:id', exports.callbacks.postForm);


