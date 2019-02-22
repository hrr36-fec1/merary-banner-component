const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {Banner, db, save} = require('../database/banner_db');

let app = express();
let port = 8082;

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

app.use(function(req, res, next) {
  // allow CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});


app.get('/api/movies/banner', function (req, res) {
   Banner.find().sort({movieId: 1}).exec()
   .then(results => {
    if (!results){
      return res.status(500).send({})
    }
    console.log(results);
    return res.status(200).send(results);
  })
});

app.listen(port, (error) => {
  if (error) {
    console.log(error, 'ERROR: not connected to server!');
  }
  console.log(`Listening on port ${port}!`);
});




