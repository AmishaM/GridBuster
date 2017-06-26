var express = require('express');
var router = express.Router();
var bmtc = require('bmtc-js-api')


/*used to get random number to mock cab location*/
function getRandomNumber()
{
	var randomnumber = Math.random();
	randomnumber = randomnumber.toFixed(3)
	return randomnumber;
}

/*used to mock the number of cabs present in that area*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

router.get('/cabs', function(req, res, next) {
  var lat = parseFloat(req.query.lat);
  var lng = parseFloat(req.query.lng);


  
  var number_of_cabs = getRandomInt(2,6);
  var cabs = [];
  for(var i=0;i<number_of_cabs;i++)
  {
  	var cab_lat = lat + getRandomNumber() / 100;
  	var cab_lng = lng + getRandomNumber() / 100;

  	var cab_location = {lat:cab_lat, lng:cab_lng};
  	cabs.push(cab_location)
  }

  res.json({'cabs':cabs,marker:'https://png.icons8.com/car/p1em/20'});
  
});

module.exports = router;
