const express = require('express')
const helmet = require("helmet");
const server = express()
const itemsRouter = require('./items/items-router')
const usersRouter = require('./users/users-router')
const ordersRouter = require('./orders/orders-router')
const cors = require("cors");
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const config = {
    name: "chocolatechip",
    secret: "keep it secret, keep it safe",
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: require('../data/dbConfig'),
        tablename: "sessions",
        sidfieldname: "sid",
        createTable: true,
        clearInterval: 1000 * 60 * 60
    })
}


server.use(helmet());
server.use(express.json())
server.use(cors(corsOptions)) // Use this after the variable declaration
server.use(session(config));
server.use('/api/users', usersRouter)
server.use('/api/items', itemsRouter)
server.use('/api/orders', ordersRouter)


server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;
