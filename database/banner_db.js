const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/banner');
var uniqueValidator = require('mongoose-unique-validator');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

let bannerSchema = mongoose.Schema({
    "video": String,
    "title": String,
    "year" : String,
    "score_title" : String,
    "question" : String,
    "score_explanation" : String,
    "score" : String,
    "see_all" : String,
    "vote_now" : String,
    "1" : String,
    "2" : String,
    "3" : String,
    "4" : String,
    "5" : String,
    "6" : String,
    "7" : String,
    "8" : String,
    "9" : String,
    "10" : String
});

let Banner = mongoose.model('Banner', bannerSchema);

let save = (results) => {
  let newBanner = new Banner({
     "video": results.video,
    "title": results.title,
    "year" : results.year,
    "score_title" : results.score_title,
    "question" : results.question,
    "score_explanation" : results.score_explanation,
    "score" : results.score,
    "see_all" : results.see_all,
    "vote_now" : results.vote_now,
    "1" : results.one,
    "2" : results.two,
    "3" : results.three,
    "4" : results.four,
    "5" : results.five,
    "6" : results.six,
    "7" : results.seven,
    "8" : results.eight,
    "9" : results.nine,
    "10" : results.ten
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