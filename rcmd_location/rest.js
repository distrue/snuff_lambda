const mongoose = require('mongoose');

exports.makeConn = new Promise((res, rej) => {
    mongoose.connect(process.env.mongodburl, {
    user: process.env.userid,
    pass: process.env.pass,
    dbName: process.env.dbName,
    authSource: process.env.authSource
    }).then((err) => {
        res()
    });
});

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  url: {
    type: String
  },
  date: {
    type: String
  },
  locate: {
    type: String
  },
  foodtype: {
    type: String
  },
  tags: [{
    type: String
  }],
  summary: {
    type: String
  },
  imgs: [{
    type: String
  }],
  desc: {
    type: String
  }
});

exports.restaurantModel = mongoose.model('restaurants', schema);
