const express = require('express');
// const server = require('../server');
const router = express.Router();
const Order = require('./orders-model')

router.get('/', (req, res) => {
    console.log('getting all orders')
    Order.getAll()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

router.get('/:id', (req, res) => {
    console.log('getting order by id')
    const { id } = req.params
    Order.getById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

router.post('/addorder', (req, res) => {
    // console.log(req.body)
    const id = req.body.user_id
    const items = req.body.items
    // console.log(id)
    // console.log(items)
    // const newItem = req.body
    // // const { id } = req.params
    Order.addOrder(id, items)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})


module.exports = router;