$(function() {

//DEFINE ALL THE VARIABLES/SETUP


//underscore function to compile both templates
var resultsTemplate = _.template($('#results-template').html());
var detailsTemplate = _.template($('#market-details-template').html());

//html elements to hold search results and market details
var $resultsList = $('#results-list');
var $detailsPanel = $('#market-details');


//DEFINE FUNCTIONS FOR APIs (MARKET & MAPBOX) 


//render any market to the html page
function render(market) {
  var $market = $(resultsTemplate(market));
  $resultsList.append($market);
}

//render all markets from the server to the page
function all() {
  $.get('/api/markets', function(data) {
    var allMarkets = data;

    _.each(allMarkets, function(market) {
      render(market);
    });
  });
};

all();

//EVENT LISTENERS


});