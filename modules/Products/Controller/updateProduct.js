const productModel = require('../../../DB/models/ProductModel')



//.............update product by product owner only............
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { UserId, title, desc, price } = req.body
    const product = await productModel.findOne({
      where: {
        id
      }
    })
    if (product.UserId === UserId) {
      await productModel.update(
        { title, desc, price },
        {
          where: {
            id
          }
        }
      )
      res.status(200).json({ message: 'updated done' })
    } else {
      res.status(401).json({ message: 'opps you are not the onwer' })
    }
  } catch (error) {
    res.status(400).json({ message: 'updated fail' })
  }
}
