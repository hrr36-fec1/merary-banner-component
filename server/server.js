const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
let port = 8080;

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

app.listen(port, (error) => {
  if (error) {
    console.log(error, 'ERROR: not connected to server!');
  }
  console.log(`Listening on port ${port}!`);
});


