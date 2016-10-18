var express     = require('express');
var app         = express();
var morgan      = require('morgan');
var config = require('./config'); // get our config file
var mongoose    = require('mongoose');
var City   = require('./city');
mongoose.connect(config.database);

var fs = require('fs');
var mkdirp = require('mkdirp');
var port = process.env.PORT || 5000;
app.listen(port);
app.get('/',function(req,res){
  console.log(req.query.citycode);
  City.find({CityCode:req.query.citycode},function(err,city){
    if(err) throw err;
    res.send(city);
  });
});
app.get('/setup', function(req, res) {

  // create a sample user
  var city = new City({
    CityCode: 42,
    CityName: 'Hà Tây',
    CityDetail: 'blah blah'
  });

  // save the sample user
  city.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});
console.log('Magic happens at http://localhost:' + port);
