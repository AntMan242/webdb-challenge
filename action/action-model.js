const db = require('../data/dbConfig.js');

const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: '../data/lambda.db3',
    },
    useNullAsDefault: true,
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
  };
  
  function find() {
    return db('actions');
  }
  
  function findById(id) {
    return db('actions')
      .where({ id : id })
      .first();
  }
  
  function add(actions) {
    return db('actions')
        .insert(actions)
        .then(([id]) => {
            return findById(id)
        })
  }
  
  function update() {
    return db('actions')
        .where({id})
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id)
            } else {
                return null
            }
        });
  }
  
  function remove() {
    return db('actions')
        .where(id)
        .del();
  }