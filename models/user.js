
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model { }

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  income: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  expense: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
  // remaining property
}, { sequelize, modelName: 'user' })

module.exports = User
