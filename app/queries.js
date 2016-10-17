const pgp = require('pg-promise')()

// Connect to database
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://iChrille@localhost/iChrille'
const db = pgp(DATABASE_URL)

// Expose db and pgp, just in case we need them
module.exports.pgp = pgp
module.exports.db = db

/**
 * Gets or creates an ip  to the database and returns the id of given ip
 * @returns {Promise}
 */
module.exports.getIpId = (ip) => {
  // return new Promise((resolve, reject) => {
  //   resolve(ip)
  // })
  return db.query('INSERT INTO ip (ip) VALUES($1) ON CONFLICT (ip) DO UPDATE SET ip = $1 RETURNING id;', [ip])
}

/**
 * Gets id from database based on given version
 * @returns {Promise}
 */
module.exports.getVersionId = (version) => {
  // return new Promise((resolve, reject) => {
  //   resolve(0xBADA55)
  // })
  return db.query(`SELECT id FROM version WHERE version=$1`, [version])
}
