module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'database_name',
      user: 'user_name',
      password: 'XXXXXXXXXX'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      database: 'database_name',
      user: 'user_name',
      password: 'XXXXXXXXXX'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
