var request = require('request');

function Exchange() {}

Exchange.prototype.price = function(fn) {

  request('https://vip.bitcoin.co.id/api/btc_idr/ticker', function(error, response, data) { // FIXME: don't hardcode

    try {

      if (!error && response.statusCode == 200) {

        var json = JSON.parse(data);
        var last_price = parseFloat(json.ticker.last);

        fn(last_price);

      }

    } catch(err) {

      console.error("Error parsing JSON: " + err);

    }
  });
};

module.exports = new Exchange();

