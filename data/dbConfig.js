const knex = require('knex')
const configs = require('../knexfile')

// const db = knex(process.env.NODE_ENV === 'production' ? configs.production : configs.development)
const db = knex(configs[process.env.NODE_ENV]) || 'development'


module.exports = db