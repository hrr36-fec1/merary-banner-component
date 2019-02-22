const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/banner');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

let bannerSchema = mongoose.Schema({
    "movieId": Number,
    "video": String,
    "title": String,
    "year" : String,
    "score_explanation" : String,
    "score" : String,
    "vote0": Number,
    "vote1": Number,
    "vote2": Number,
    "vote3": Number,
    "vote4": Number,
    "vote5": Number,
    "vote6": Number,
    "vote7": Number,
    "vote8": Number,
    "vote9": Number,
    "vote10": Number
});

let Banner = mongoose.model('Banner', bannerSchema);

let save = (results) => {
  let newBanner = new Banner({
    "movieId": results.movieId,
    "video": results.video,
    "title": results.title,
    "year" : results.year,
    "score_explanation" : results.score_explanation,
    "score" : results.score,
    "vote0": results.vote0,
    "vote1": results.vote1,
    "vote2": results.vote2,
    "vote3": results.vote3,
    "vote4": results.vote4,
    "vote5": results.vote5,
    "vote6": results.vote6,
    "vote7": results.vote7,
    "vote8": results.vote8,
    "vote9": results.vote9,
    "vote10": results.vote10
  });
  newBanner.save(err => {
    if (err) {
      console.log('Error saving Banner data to database')
      return console.log(err)
    }
  });
};

module.exports = {
  db,
  Banner,
  save
}