const express = require('express');
// const server = require('../server');
const router = express.Router();
const User = require('./users-model')

router.get('/', (req, res) => {
    console.log('getting all users')
    User.getAll()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

// router.get('/search/:term', (req, res) => {
//     const { name } = req.params
//     // console.log(typeof (name))
//     // console.log(`getting player by term: ${name}`)
//     Player.getByName(name)
//         .then(response => {
//             res.status(200).json(response)
//         })
//         .catch(err => {
//             res.status(400).json({ message: err.message })
//         })
// })

router.get('/:id', (req, res) => {
    console.log('getting user by id')
    const { id } = req.params
    User.getById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})
router.post('/addItem', (req, res) => {
    console.log(req.body)
    // const newItem = req.body
    // // const { id } = req.params
    // User.getById(id)
    //     .then(response => {
    //         res.status(201).json(response)
    //     })
    //     .catch(err => {
    //         res.status(400).json({ message: err.message })
    //     })
})




module.exports = router;