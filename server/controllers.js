let {save} = require('./../db/index.js');
let {find} = require('./../db/index.js');
let {auth} = require('./../db/index.js');

const postData = (data, callback) => {
    save(data, (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    })
};

const getData = (callback) => {
    find((err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
    });
};

const getAuth = (data, callback) => {
  auth(data, (err, res) => {
    callback(null, res)
  })
}

module.exports = {
    postData,
    getData,
    getAuth
};
