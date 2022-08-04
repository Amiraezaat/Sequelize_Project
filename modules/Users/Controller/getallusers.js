const productModel = require('../../../DB/models/ProductModel')
const UserModel = require('../../../DB/models/UserModel')

exports.getallusers = async (req, res) => {
  try {
    const users = await UserModel.findAll({
      include: [
        {
          model: productModel
        }
      ]
    })
    res.status(200).json({ message: 'done', users })
  } catch (error) {
    res.status(400).json({ message: 'fail to get all users' })
  }
}
