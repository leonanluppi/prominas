'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:@localhost:3306/blog');
var path = require('path');
var fs = require('fs');
var db = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== 'index.js'
  })
  .forEach((file, key) => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
