//........search by firstname start with A and age greater than 30 ......

const { Op } = require('sequelize')
const productModel = require('../../../DB/models/ProductModel')
const UserModel = require('../../../DB/models/UserModel')

exports.searchA_30 = async (req, res) => {
  const letter = req.params.letter
  try {
    const users = await UserModel.findAll({
      where: {
        [Op.and]: {
          firstName: {
            [Op.like]: `${letter}%`
          },
          age: {
            [Op.gt]: 30
          }
        }
      },
      attributes: ['firstName', 'lastName', 'email', 'age']
    })
    if (users.length) {
      res.status(200).json({ message: 'Users of this range are', users: users })
    } else {
      res.status(404).json({ message: 'there are no users in this range' })
    }
  } catch (error) {
    res.status(400).json({ message: 'fail' })
  }
}

//........search by firstname or lastname start with A and age greater than or equal 30 ......

exports.searchA_gte30 = async (req, res) => {
  const letter = req.params.letter
  try {
    const users = await UserModel.findAll({
      where: {
        [Op.and]: {
          [Op.or]: {
            firstName: {
              // [Op.like]: `${letter}%` //firstName start with letter
              [Op.startsWith]: `${letter}`
            },
            lastName: {
              [Op.substring]: `${letter}` // lastName contain letter
            }
          },
          age: {
            [Op.lte]: 30 // age less than or equal 30
          }
        }
      },
      attributes: ['firstName', 'lastName', 'email', 'age', 'id'],
      include: {
        model: productModel,
        attributes: ['title', 'desc']
      }
    })
    if (users.length) {
      res.status(200).json({ message: `Users are`, users: users })
    } else {
      res.status(404).json({ message: 'There are no users match your conditions' })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'fail' })
  }
}

//..... get users with age between 20 and 27.......

exports.searchAge = async (req, res) => {
  try {
    const users = await UserModel.findAll({
      where: {
        age: {
          [Op.between]: [20, 27 ] // age between 20 and 27 without taking 27 (execlude 27)
        }
      },
      attributes: ['firstName', 'lastName', 'email', 'age', 'id'] ,
      include: {
        model: productModel,
        attributes: ['title', 'desc']
      }
    })
    if (users.length) {
      res.status(200).json({ message: 'The Result of search ', users: users })
    } else {
      res.status(404).json({ message: 'there are no users with with this age range' })
    }
  } catch (error) {
    res.status(400).json({ message: 'fail' })
  }
}
