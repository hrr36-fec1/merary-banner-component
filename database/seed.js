const {db, Banner} = require('./banner_db.js');

var bannerData = [
  {
    "movieId": 1,
    "video": "https://www.youtube.com/watch?v=lc0UehYemQA",
    "title": "Jurassic Park",
    "year" : "1993",
    "score_explanation" : "Generally favorable reviews based on 20 Critics",
    "score" : "68",
    "scores_obj" :
      {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 2,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "The Lion King",
    "year" : "1995",
    "score_explanation" : "Generally favorable reviews based on 26 Critics",
    "score" : "88",
    "scores_obj":  {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 3,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "The Matrix",
    "year" : "2001",
    "score_explanation" : "Generally favorable reviews based on 12 Critics",
    "score" : "73",
    "scores_obj" : {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 4,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "All's Well that Ends Well",
    "year" : "2011",
    "score_explanation" : "Generally favorable reviews based on 8 Critics",
    "score" : "84",
    "scores_obj" :  {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 5,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Berkeley Park",
    "year" : "2014",
    "score_explanation" : "Generally favorable reviews based on 17 Critics",
    "score" : "91",
    "scores_obj" :  {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 6,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Redwood City Games",
    "year" : "2010",
    "score_explanation" : "Generally favorable reviews based on 11 Critics",
    "score" : "22",
    "scores_obj" :  {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 7,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Sunrise",
    "year" : "2006",
    "score_explanation" : "Generally favorable reviews based on 29 Critics",
    "score" : "71",
    "scores_obj" :
     {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 8,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Merced",
    "year" : "2008",
    "score_explanation" : "Generally favorable reviews based on 21 Critics",
    "score" : "43",
    "scores_obj" :
     {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 9,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Tennis Titans",
    "year" : "2001",
    "score_explanation" : "Generally favorable reviews based on 19 Critics",
    "score" : "89",
    "scores_obj" :
     {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 10,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Titanic",
    "year" : "1998",
    "score_explanation" : "Generally favorable reviews based on 14 Critics",
    "score" : "92",
    "scores_obj" :
     {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 11,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Best Ever",
    "year" : "1962",
    "score_explanation" : "Generally favorable reviews based on 66 Critics",
    "score" : "98",
    "scores_obj" :
     {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 12,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Casablanca",
    "year" : "1971",
    "score_explanation" : "Generally favorable reviews based on 67 Critics",
    "score" : "98",
    "scores_obj" :
     {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 13,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Joel's World",
    "year" : "1995",
    "score_explanation" : "Generally favorable reviews based on 44 Critics",
    "score" : "98",
    "scores_obj" :
     {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 14,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Batman Begins",
    "year" : "2007",
    "score_explanation" : "Generally favorable reviews based on 23 Critics",
    "score" : "74",
    "scores_obj" :
     {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  },
    {
    "movieId": 15,
    "video": "https://www.youtube.com/watch?v=helloworld",
    "title": "Moonstruck",
    "year" : "1989",
    "score_explanation" : "Generally favorable reviews based on 12 Critics",
    "score" : "99",
    "scores_obj" :
     {
      "vote1": 1,
      "vote2": 2,
      "vote3": 3,
      "vote4": 4,
      "vote5": 5,
      "vote6": 6,
      "vote7": 7,
      "vote8": 8,
      "vote9": 9,
      "vote10": 10
     }
  }
];

var seedDB = function seedDB() {
  Banner.create(bannerData).then(function () {
    return db.disconnect();
  });
};

seedDB();