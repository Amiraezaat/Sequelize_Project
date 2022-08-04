const commnetModel = require('../../../DB/models/commentsModel')
const productModel = require('../../../DB/models/ProductModel')
const UserModel = require('../../../DB/models/UserModel')

//.......get all products........
exports.getAllProducts = async (req, res) => {
  try {
    const products = await productModel.findAll({
      include: [
        {
          // get information about user that create the product
          model: UserModel,
          attributes: ['firstName', 'lastName', 'email', 'age'],
          include: {
            // get all comments of this user
            model: commnetModel
          }
        },
        {
          // get all comments of this product
          model: commnetModel
        }
      ]
    })
    res.status(200).json({ message: 'all products', products })
  } catch (error) {
    res.status(400).json({ message: 'fail' })
  }
}

//............get products for one user......

exports.getAllProductsForUser = async (req, res) => {
  try {
    const { id } = req.params
    const products = await productModel.findAll({
      where: {
        UserId: id
      },
      include: {
        model: UserModel,
        attributes: ['firstName', 'lastName', 'email', 'age']
      },
      attributes: ['title']
    })
    res.status(200).json({ message: 'all products', products })
  } catch (error) {
    res.status(400).json({ message: 'fail' })
  }
}
