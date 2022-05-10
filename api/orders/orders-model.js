const User = require('../users/users-model')
const db = require('../../data/dbConfig')
// const { default: knex } = require('knex')

const getAll = () => {
    return db('orders')
}

const getById = (id) => {
    return db('orders as ord').where('ord.order_id', id).first()
}

// const addOrder = async (user_id, items) => {
//     const orderId = await db('orders').insert({ 'user_id': user_id })
//     items.forEach(element => {
//         db('items_orders').insert({ 'item_id': item_id, 'order_id': orderId })
//     });
// }
// const getOrderDetails = async (id) => {

// }


const addOrder = async (user_id, items) => {

    //     const scheme = await db('schemes as sc').where('sc.scheme_id', scheme_id).select('sc.scheme_id', 'sc.scheme_name')

    //   const schemeStructure = {
    //     scheme: scheme[0],
    //     steps: []
    //   }

    // const newScheme = await db('schemes').insert({ 'scheme_name': scheme.scheme_name })

    // const order = 
    await db('orders').insert({ user_id: user_id })
    // const [id1] = await db('cars').insert({ vin, make, model, mileage, title, transmission })
    // const id = await db('orders').insert({ user_id })
    // console.log('pringting what should be id', id)
    const customer = await User.getById(user_id)

    // console.log(orderId)
    const orderSructure = {
        // order_id: await getById(orderId),
        // order_id: 1,
        user_name: customer.user_name,
        user_id: customer.user_id,
        items: items
    }

    // // Creates a new order
    // // const orderDate = new Date()
    // // const [order_id] = await db('orders').insert({ orderDate, user_id })
    return orderSructure
}
// const create = async ({ vin, make, model, mileage, title, transmission }) => {
//     // DO YOUR MAGIC
//     const [id] = await db('cars').insert({ vin, make, model, mileage, title, transmission })
//     return getById(id)
//   }

module.exports = {
    addOrder,
    getAll,
    getById
}