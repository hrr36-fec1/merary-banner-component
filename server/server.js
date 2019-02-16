const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {Banner, db, save} = require('../database/banner_db');

let app = express();
let port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));


app.get('/api/movies/banner', function (req, res) {
   Banner.find().exec()
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


