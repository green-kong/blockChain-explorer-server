'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const blocks = require('./blocks.js')(sequelize, Sequelize.DataTypes);
const txs = require('./tx.js')(sequelize, Sequelize.DataTypes);

db.blocks = blocks;
db.txs = txs;

blocks.hasMany(txs);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
