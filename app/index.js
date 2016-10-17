const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

// Middleware and whatnot
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Register routes to app
routes(app)

module.exports = app
