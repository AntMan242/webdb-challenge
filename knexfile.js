// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/lambdaschool.db3'
    },
    
    },

  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
  pool: {
    afterCreate: (connection, done) => {
      connection.run('PRAGMA foreign_keys = ON', done);
    },
},
};