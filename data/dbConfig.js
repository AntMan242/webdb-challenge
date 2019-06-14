const knex = require('knex');

// development key
const knexConfig = require('../knexfile.js'); 

const db = knex(knexConfig.development)

module.exports = db;