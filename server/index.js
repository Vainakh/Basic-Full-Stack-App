let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let crypto = require('crypto');

let app = express();

let db = require('./controllers.js');

app.use(express.static(path.join(__dirname, './../client/dist')));
app.use(bodyParser.json());




let PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log('error on server')
  } else {
    console.log(`success on server connection, listening on port ${PORT}`)
  }
});