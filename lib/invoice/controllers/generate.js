var exports = module.exports;

var exchange = require('../models/exchange');

exports.getForm = function(req, res) {

  var template = '../lib/invoice/views/form';
  var context = {'csrftoken': req.csrfToken()};

  res.render(template, context);

};

exports.postForm = function(req, res) {

  var btc_address = req.param('id', '');
  var fiat_amount = parseFloat(req.param('fiat_amount', ''));
  var fiat_currency = req.param('fiat_currency', '');

  exchange.price(function(rate) {
    var btc_amount = (fiat_amount / rate).toFixed(8);
    var qr_code_data = "bitcoin:" + btc_address + "?amount=" + btc_amount;

    var context = {
      qr_code_data: qr_code_data,
      message: fiat_amount + " " + fiat_currency + " = " + btc_amount + " BTC"
    };

    var template = '../lib/invoice/views/pay';
    res.render(template, context);
  });
};

