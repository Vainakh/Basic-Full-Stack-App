let mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

mongoose.connect('mongodb://127.0.0.1:27017/data', { useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', ()=> {
    console.log('Error connecting to mongo database')
});
db.once('open', ()=> {
    console.log('Success connecting to mongo database')
});


let mongooseSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  fullAddress: String,
  ssn: String
});


let authSchema = mongoose.Schema({
  username: String,
  password: String
});

// let userSchema = mongoose.Schema({
//   username: String,
// });

let Model = new mongoose.model('data', mongooseSchema);

let Auth = new mongoose.model('auth', authSchema)

// let User = new mongoose.model('user', userSchema)

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
          console.log('successful save in db/index.js');
          callback(null, res)
      }
  })
};

const find = (callback) => {
  console.log('find fires');
  Model.find((err, data) => {
      if(err) {
          console.log('error in find');
          callback(err)
      } else {
          console.log('successful find', data);
          callback(null, data)
      }
  })
};

const auth = (data, callback) => {
  console.log("auth fires")
  // console.log(data)

  
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
  //       console.log(res);
  //       console.log('successful save in authentication');
  //       callback(null, res)
  //     }
  //   })
  // });
  

  

  // console.log(data)

  Auth.findOne({ username: data.username }, (err, userData) => {
    if(err) {
      console.log('error in find');
      callback(err)
    } else {
      // console.log('successful find', userData);
      bcrypt.compare(data.password, userData.password, function(err, res) {
        if (res == true){
          console.log("True")
           callback(null, true)
          // password matched
        } else{
          console.log("False")
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