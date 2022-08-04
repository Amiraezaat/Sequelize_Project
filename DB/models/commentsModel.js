const { connectionsql } = require('../connection')
const { DataTypes } = require('sequelize')
const UserModel = require('./UserModel')
const productModel = require('./ProductModel')

const commnetModel = connectionsql.define('Comment', {
  // to specify which field will ref to which model to get the data from it
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: UserModel,
      key: 'id'
    }
  },
  ProductId: {
    type: DataTypes.INTEGER,
    references: {
      model: productModel,
      key: 'id'
    }
  },
  commentbody: {
    type: DataTypes.STRING
  }
})

// ..... user model related to product model through comment model
UserModel.belongsToMany(productModel, { through: commnetModel })
productModel.belongsToMany(UserModel, { through: commnetModel })

// ....... relate comment model to both product model and user model to be able to retrive data from any model
productModel.hasMany(commnetModel, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
commnetModel.belongsTo(productModel) // create ProductId
UserModel.hasMany(commnetModel, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
commnetModel.belongsTo(UserModel) // create UserId

module.exports = commnetModel
