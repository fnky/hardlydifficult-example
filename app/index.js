const express = require('express')
const routes = require('./routes')

const app = express()

// Middleware and whatnot

// Register routes to app
routes(app)

module.exports = app
