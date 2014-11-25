var exports = module.exports;

var database   = require('../models/database');

exports.signUpForm = function(req, res) {

  var template = '../lib/sign_up/views/form';
  var context = {'csrftoken': req.csrfToken()};

  res.render(template, context);

};

exports.processForm = function(req, res) {

  var btc_address = req.param('btc_address', '');

  var context = {
    url: database.find(btc_address).url
  };

  var template = '../lib/sign_up/views/confirm';
  res.render(template, context);
};


