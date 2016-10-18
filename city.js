var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CitySchema = new Schema({
  CityCode : {
    type: Number,
    require: true
  },
  CityName : {
    type:String,
    require:true
  },
  CityDetail:{
    type:String
  }
});
module.exports = mongoose.model('City', CitySchema);
