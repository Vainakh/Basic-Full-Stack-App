const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const CryptoJS = require("crypto-js");
const app = express();
const db = require('./controllers.js');

app.use(express.static(path.join(__dirname, './../client/dist')));
app.use(bodyParser.json());

app.post('/data', (req, res) => {
    // Encrypt
  req.body.ssn = CryptoJS.AES.encrypt(JSON.stringify(req.body.ssn), 'my-secret-key@123').toString();
  db.postData(req.body, (err) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send();
    }
  });
});

app.get('/data', (req, res) => {
  db.getData((err, data) => {
    data = data.map((item) => {
       // Decrypt
      let bytes = CryptoJS.AES.decrypt(item.ssn, 'my-secret-key@123');
      item.ssn = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return item
    })
    res.send(data)
  });
});

app.post('/auth', (req, res) => {
  db.getAuth(req.body, (err, response) => {
    if (response === true) {
      res.status(200).send();
    } else {
      res.status(401).send();
    }
  });
})

let PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log('error on server')
  } else {
    console.log(`success on server connection, listening on port ${PORT}`)
  }
});
