const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:Javascript${}535@localhost/activity_db')
