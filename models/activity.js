
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Activity extends Model { }

Activity.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cost: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, { sequelize, modelName: 'activity' })

module.exports = Activity
