const dbRoutes = require('./db')

module.exports = (router) => {
  // Routes for db
  router.use('/db', dbRoutes)
}
