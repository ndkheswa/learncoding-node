require('dotenv/config');
require('reflect-metadata');
require('ts-node/register');

require('./src/bootstrap.js')
  .bootstrap()
  .catch(console.error);