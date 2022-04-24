const db = require('../../data/dbConfig')

const getAll = () => {
    return db('users')
}

const getById = (id) => {
    return db('users as us').where('us.user_id', id).first()
}
// const getByName = (name) => {
//     return db("players").where(name)
// }

// function findBy(filter) {
//     return db("users").where(filter).orderBy("user_id");
//   }


module.exports = {
    getAll,
    getById
}