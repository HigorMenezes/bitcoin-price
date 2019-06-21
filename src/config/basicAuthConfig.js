require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const appConfig = {
  username: process.env.BASIC_AUTH_USERNAME,
  password: process.env.BASIC_AUTH_PASSWORD,
};

module.exports = appConfig;
