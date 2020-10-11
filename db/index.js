const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

mongoose.connect('mongodb://127.0.0.1:27017/data', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', ()=> {
    console.log('Error connecting to mongo database')
});
db.once('open', ()=> {
    console.log('Success connecting to mongo database')
});

const mongooseSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  fullAddress: String,
  ssn: String
});

const authSchema = mongoose.Schema({
  username: String,
  password: String
});

const Model = new mongoose.model('data', mongooseSchema);
const Auth = new mongoose.model('auth', authSchema)

const save = (data, callback) => {
  let model = Model({
    firstName: `${data.firstName}`,
    lastName: `${data.lastName}`,
    phoneNumber: `${data.phoneNumber}`,
    fullAddress: `${data.fullAddress}`,
    ssn: `${data.ssn}`,
  });

  model.save((err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res)
      }
  })
};

const find = (callback) => {
  Model.find((err, data) => {
      if(err) {
          callback(err)
      } else {
          callback(null, data)
      }
  })
};

//uncomment 61-78 to seed username and password data;
const auth = (data, callback) => {
  // let auth;

  // bcrypt.hash(data.password, saltRounds, (err, hash) => {
  //   auth = Auth({
  //     username: `${data.username}`,
  //     password: `${hash}`
  //   })

  //   auth.save((err, res) => {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       callback(null, res)
  //     }
  //   })
  // });

  Auth.findOne({ username: data.username }, (err, userData) => {
    if(err || !userData) {
      callback(err)
    } else {
      bcrypt.compare(data.password, userData.password, function(err, res) {
        if (res == true) {
           callback(null, true)
          // password matched
        } else {
          callback(null, false)
          // wrong password
        } 
      });
    }
  })
};

module.exports = {
  save,
  find,
  auth
};