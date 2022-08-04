const productModel = require('../../../DB/models/ProductModel')


//................delete product by product owner only ...............
exports.deleteProduct = async (req, res) => {
  try {
    const { id, UserId } = req.body
    const product = await productModel.findOne({
      where: {
        id
      }
    })
    if (product) {
      if (product.UserId === UserId) {
        await productModel.destroy({
          where: { id }
        })
        res.status(200).json({ message: 'deleted done' })
      } else {
        res
          .status(401)
          .json({ message: 'sorry you cannot delete this product ' })
      }
    } else {
      res.status(404).json({ message: 'there is no product with this id' })
    }
  } catch (error) {
    res.status(400).json({ message: 'delete fail' })
  }
}
