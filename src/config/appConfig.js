require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const appConfig = {
  port: process.env.APP_PORT || 3030,
  env: process.env.NODE_ENV || 'none',
};

module.exports = appConfig;
