const { DataTypes } = require('sequelize')
const { connectionsql } = require('../connection')
const productModel = require('./ProductModel')
const UserModel = connectionsql.define('User', {
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
    required: false
  }
})

UserModel.hasMany(productModel, {
  // foreignKey:"createdBy" ,  if you want to change name of foregin key field
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
productModel.belongsTo(UserModel)

module.exports = UserModel
