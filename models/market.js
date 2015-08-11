var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var MarketSchema = new Schema ({
  marketname: String,
  website: String,
  day: String,
  hours: String
});

var Market = mongoose.model('Market', MarketSchema);

module.exports = Market;