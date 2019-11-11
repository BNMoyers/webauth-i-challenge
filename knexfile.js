// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        con.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: { 
      directory: './data/seeds'
    }
  },

 

};
