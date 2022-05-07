const db = require('../../data/dbConfig')

const getAll = () => {
    return db('items')
}

const getById = (id) => {
    return db('items as it').where('it.item_id', id).first()
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