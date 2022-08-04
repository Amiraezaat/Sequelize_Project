const { DataTypes } = require('sequelize')
const { connectionsql } = require('../connection')
const productModel = connectionsql.define('Product', {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
    required: true
  },
  desc: {
    type: DataTypes.STRING(500),
    allowNull: false,
    required: true
  },
  price: {
    type: DataTypes.INTEGER
  }
})

module.exports = productModel
