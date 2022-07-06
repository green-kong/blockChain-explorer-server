require('dotenv').config();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: 'dev_kong',
    password: 'qwer1234',
    database: 'kong_explorer',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'dev_kong',
    password: 'qwer1234',
    database: 'kong_explorer',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};

module.exports = config;
