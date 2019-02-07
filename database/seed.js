const {db, Banner} = require('./banner_db.js');

var bannerData = [
  {

    "video": "https://www.youtube.com/watch?v=lc0UehYemQA",
    "title": "Jurassic Park",
    "year" : "1993",
    "score_explanation" : "Generally favorable reviews based on 20 Critics",
    "score" : "68",
    "scores_obj" : {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
  }
];

var seedDB = function seedDB() {
  Banner.create(bannerData).then(function () {
    return db.disconnect();
  });
};

seedDB();