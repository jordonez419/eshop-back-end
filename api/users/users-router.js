const express = require('express');
// const server = require('../server');
const router = express.Router();
const User = require('./users-model')
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const { restricted, checkUsernameExists } = require('../middleware/auth-middleware')

router.get('/', restricted, (req, res) => {
    console.log('getting all users')
    User.getAll()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

router.get('/logout', (req, res) => {
    console.log('auth log out route')
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.json(`Can't log out:${err.message}`)
            } else {
                res.status(200).json({ message: 'logged out' })
            }
        })
    } else {
        res.status(200).json({ message: "no session" })
    }

})


router.post('/register', (req, res) => {
    const user_name = req.body.user_name
    const password = req.body.password
    const hash = bcrypt.hashSync(password, saltRounds);
    // Store hash in your password DB.
    console.log(user_name)
    console.log(password)
    User.createUser(user_name, hash)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

router.post('/login', checkUsernameExists, (req, res) => {
    // console.log('login post route')
    console.log('inputted password:', req.body.password)
    console.log('inputted uername:', req.body.user_name)
    try {
        const verified = bcrypt.compareSync(req.body.password, req.userData.password)
        if (verified) {
            req.session.user = req.userData
            res.status(200).json({ message: `Welcome ${req.userData.user_name}` })
            // res.json(`Welcome back ${req.userData.username}`)
            //res.json(`Welcome back ${req.session.user.username}`)
        } else {
            res.status(401).json({ message: "Invalid Credentials" })
        }
    } catch (e) {
        res.status(500).json({ message: "Invalid Credentials" })
    }
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


module.exports = router;