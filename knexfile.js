// Update with your config settings.
require('dotenv').config()

const pg = require('pg')

if (process.env.DATABASE_URL) {
    pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
    client: 'pg',
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
}

module.exports = {
    // development: {
    //   client: 'sqlite3',
    //   useNullAsDefault: true,
    //   migrations: {
    //     directory: './data/migrations',
    //   },
    //   seeds: {
    //     directory: './data/seeds',
    //   },
    //   // this enables foreign keys in SQLite
    //   pool: {
    //     afterCreate: (conn, done) => {
    //       conn.run('PRAGMA foreign_keys = ON', done)
    //     },
    //   }, connection: { filename: './data/nba.db3' }
    // },
    development: {
        ...sharedConfig,
        connection: process.env.DEV_DATABASE_URL,
    },
    testing: {
        ...sharedConfig,
        connection: process.env.TESTING_DATABASE_URL,
    },
    production: {
        ...sharedConfig,
        connection: process.env.DATABASE_URL,
        pool: { min: 2, max: 10 },
    },
}

// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/nba.db3'
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './data/migrations'
//     },
//     seeds: {
//       directory: './data/seeds'
//     }
//   },

//   staging: {
//     // client: 'postgresql',
//     // connection: {
//     //   database: 'my_db',
//     //   user:     'username',
//     //   password: 'password'
//     // },
//     // pool: {
//     //   min: 2,
//     //   max: 10
//     // },
//     // migrations: {
//     //   tableName: 'knex_migrations'
//     // }
//   },

//   production: {
//     // client: 'postgresql',
//     // connection: {
//     //   database: 'my_db',
//     //   user:     'username',
//     //   password: 'password'
//     // },
//     // pool: {
//     //   min: 2,
//     //   max: 10
//     // },
//     // migrations: {
//     //   tableName: 'knex_migrations'
//     // }
//   }

// };

