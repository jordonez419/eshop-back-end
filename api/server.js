const express = require('express')
const server = express()
const itemsRouter = require('./items/items-router')
const usersRouter = require('./users/users-router')
const cors = require("cors");

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}


server.use(cors(corsOptions)) // Use this after the variable declaration
server.use(express.json())
server.use('/api/users', usersRouter)
server.use('/api/items', itemsRouter)


server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;
