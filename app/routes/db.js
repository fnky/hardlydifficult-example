const express = require('express')
const upload = require('multer')({ dest: 'uploads/' })
const router = express.Router()
const queries = require('../queries')

/**
 * Very simple error handler for this use case.
 * Do your prober error handling here, whenever the database query fails
 * @returns {Function}
 */
function onError (req, res) {
  return (err) => {
    res.json({ error: err.message }).status(500)
  }
}

/**
 * GET /
 */
router.get('/', (req, res) => {
  const ip = req.get('X-Forwarded-For') || req.connection.remoteAddress
  const version = req.query.version

  if (!ip) {
    return res.json({ error: 'Couldn\'t get ip address' })
  }

  if (!version) {
    return res.json({ error: 'Required version param not given' })
  }

  Promise.all([
    queries.getIpId(ip),
    queries.getVersionId(version)
  ])
    .then((results) => {
      const [ipIds, versionIds] = results
      res.json({ ipId: ipIds[0].id, versionId: versionIds[0].id })
    })
    .catch(onError(req, res))
})

/**
 * GET /ip
 */
router.get('/ip', (req, res) => {
  const ip = req.get('X-Forwarded-For') || req.connection.remoteAddress

  if (!ip) {
    return res.json({ error: 'Couldn\'t get ip address' })
  }

  queries.getIpId(ip)
    .then((result) => {
      // Return JSON object of result
      res.json(result[0])

      // You can also render whatever you want, but this is simple REST
    })
    .catch(onError(req, res)) // Error handle this, like render a 500 error page
})

/**
 * GET /version
 * @param {String} version The version to get the id from
 */
router.get('/version', (req, res) => {
  const version = req.query.version

  // Check if we got a version
  if (!version) {
    return res.json({ error: 'Required version param not given' })
  }

  queries.getVersionId(version)
    .then((result) => {
      res.json(result[0])
    })
    .catch(onError(req, res))
})

/**
 * GET /crash
 * @param {String}
 */
router.post('/crash', (req, res) => {
  queries.recordGameCrash(req.body)
    .then((result) => {
      res.json(req.body)
    })
    .catch(onError(req, res))
})

module.exports = router
