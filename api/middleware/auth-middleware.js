const express = require('express')
const User = require('../users/users-model')

const restricted = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.status(401).json("You shall not pass!")
    }
}
const checkUsernameExists = async (req, res, next) => {
    // User.findBy({ username: req.body.username })
    //   .then(user => {
    //     if (user.username) {
    //       req.userData = user[0]
    //       next()
    //     }
    //     else {
    //       res.status(401).json({ message: 'invalid credentials' })
    //     }
    //   })
    try {
        const rows = await User.findBy({ user_name: req.body.user_name })
        if (rows.length) {
            req.userData = rows[0]
            console.log(req.userData)
            next()
        } else {
            console.log('username doesnt exist')
            res.status(401).json("Invalid Credentials")
        }
    } catch (e) {
        res.status(500).json(`Server error: ${e.message}`)
    }
}

module.exports = {
    restricted,
    checkUsernameExists
}
