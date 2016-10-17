const pgp = require('pg-promise')()

// Connect to database
const DATABASE_URL = process.env.DATABASE_URL
const db = pgp(DATABASE_URL)

// Expose db and pgp, just in case we need them
module.exports.pgp = pgp
module.exports.db = db

/**
 * Gets or creates an ip to the database and returns the id of given ip
 * @returns {Promise}
 */
module.exports.getIpId = (ip) => {
  return db.query('INSERT INTO ip (ip) VALUES($1) ON CONFLICT (ip) DO UPDATE SET ip = $1 RETURNING id;', [ip])
}

/**
 * Gets id from database based on given version
 * @returns {Promise}
 */
module.exports.getVersionId = (version) => {
  return db.query(`SELECT id FROM version WHERE version=$1`, [version])
}

/**
 * Records a crash and inserts it into the database
 * @params {Object} The crash object
 * @returns {Promise}
 */
module.exports.recordGameCrash = ({ ipId, versionId, currentScene, exception, playerId }) => {
  const validation = new Promise((resolve, reject) => {
    if (!ipId) {
      reject(Error('Expected `ipId` to not be null'))
    }

    if (!versionId) {
      reject(Error('Expected `versionId` to not be null'))
    }

    if (!currentScene) {
      reject(Error('Expected `currentScene` to not be null'))
    }

    if (!exception) {
      reject(Error('Expected `exception` to not be null'))
    }

    if (!playerId) {
      reject(Error('Expected `playerId` to not be null'))
    }

    resolve()
  })

  const query = db.query(`
    INSERT INTO crash ("ipId", "versionId", "currentScene", "exception", "playerId")
    VALUES ($1, $2, $3, $4, $5)
  `, [
    ipId,
    versionId,
    currentScene,
    exception,
    playerId
  ])

  return Promise.all([
    validation,
    query
  ])
}
