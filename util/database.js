const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://kero:1234@cluster0.2eous.mongodb.net/node-shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
    });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw new Error('No database found!');
};

module.exports = { mongoConnect, getDb };


// Another way to export A function:
// exports.mongoConnect = mongoConnect;
// const mongoConnect = require('./util/database').mongoConnect;
