const {db, Banner} = require('./banner_db.js');

var bannerData = [
  {
    "video": "https://www.youtube.com/watch?v=lc0UehYemQA",
    "title": "Jurassic Park",
    "year" : "1993",
    "score_title" : "Metascore",
    "question" : "placeholder for ?",
    "score_explanation" : "Generally favorable reviews based on 20 Critics",
    "score" : "68",
    "see_all" : "See All",
    "vote_now" : "Vote Now",
    "1" : "1",
    "2" : "2",
    "3" : "3",
    "4" : "4",
    "5" : "5",
    "6" : "6",
    "7" : "7",
    "8" : "8",
    "9" : "9",
    "10" : "10"
  }
];

var seedDB = function seedDB() {
  Banner.create(bannerData).then(function () {
    return db.disconnect();
  });
};

seedDB();