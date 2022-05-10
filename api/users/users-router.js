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
router.post('/register', (req, res) => {
    const user_name = req.body.user_name
    const password = req.body.password
    console.log(user_name)
    console.log(password)
    User.createUser(user_name, password)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})


module.exports = router;