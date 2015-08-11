var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'), 
    _ = require("underscore"), 
    mongoose = require('mongoose');

var Market = require('./models/market')


// var marketsArray = [
//   {id:12345, marketname:'Clement Street', website:'http://www.agriculturalinstitute.org', day:'Sunday', hours:'9:00am - 3:00pm'}, 
//   {id:67890, marketname:'Ferry Building', website:'http://www.ferrybuildingmarketplace.com/farmers_market.php', day:'Saturday', 'hours':'8:00am - 2:00pm'},
//   {id:54321, marketname:'Mission Bay at UCSF', website:'http://www.pcfma.com/missionbay', day:'Wednesday', hours:'10:00am - 2:00pm'}
//   ]

//connect to mongo database
mongoose.connect('mongodb://localhost/farmersmarket');

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));
// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// set up root route to respond with 'hello world'
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/api/markets', function (req, res) {
  Market.find(function (err, markets) {
    if(err) {
      console.log("error: " + err);
      res.status(500).send(err);
    } else {
      console.log("markets:" + markets);
      res.json(markets);
    }
  })
});


// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});