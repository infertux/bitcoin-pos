function Database() {}

// Typical CRUD

Database.prototype.find = function(btc_address) {
  return {
      'url': "https://consensusreality.io/pos/" + btc_address
  };
};

Database.prototype.save = function() {
  // @TODO
};

Database.prototype.delete = function() {
  // @TODO
};

module.exports = new Database();

