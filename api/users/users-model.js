const db = require('../../data/dbConfig')

const getAll = () => {
    return db('users')
}

const getById = (id) => {
    return db('users as us').where('us.user_id', id).first()
}

// build a post route that adds an item to an order, and then adds that order to the user
// Gonna need some joins with the bridge table!

// const getByName = (name) => {
//     return db("players").where(name)
// }

// function findBy(filter) {
//     return db("users").where(filter).orderBy("user_id");
//   }

// const scheme = await db('schemes as sc').where('sc.scheme_id', scheme_id).select('sc.scheme_id', 'sc.scheme_name')

// const schemeStructure = {
//   scheme: scheme[0],
//   steps: []
// }

// const checkSteps = await db('schemes as sc').leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id').where('sc.scheme_id', scheme_id).select('st.step_id', 'st.step_number', 'st.instructions').orderBy('st.step_number')

// if (checkSteps[0].step_number == null) {
//   schemeStructure.steps = []
// } else {
//   schemeStructure.steps = checkSteps
// }

// return schemeStructure
// }



module.exports = {
    getAll,
    getById
}